//var dv = document.createElement('div');
//dv.id = 'myid';
//dv.innerHTML = 'test';
//document.body.appendChild(dv);

var queryDiv = document.getElementById('DEBUG_QUERY');
var jsonQuery = '';
if(queryDiv){
  jsonQuery = queryDiv.innerHTML;
}
// send the query to extension
chrome.runtime.sendMessage({query: jsonQuery}, function(response) {
    console.log(response);
});

// handle the search result
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
    console.log(request.result);
});
