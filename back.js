document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('tmp-clipboard').onclick = function () {

        chrome.tabs.executeScript(null, {
            file: "script.js"
        });

    }
});

// query elastic search
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      console.log(sender.tab ?
                    "from a content script:" + sender.tab.url :
                    "from the extension");
      var xhr = new XMLHttpRequest();
      var handleStateChange = function(){
          if(xhr.readyState==4){
            //alert(xhr.responseText);
            var searchResult = xhr.responseText; 
            //inject the response back to page
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
              chrome.tabs.sendMessage(tabs[0].id, {result: searchResult}, function(response) {
                  console.log(response);
              });
            });
          }
      };
      xhr.onreadystatechange = handleStateChange; // Implemented elsewhere.
      xhr.open("POST", 'http://els04ml.ml.tripadvisor.com:9200/locations_en/_search', true);
      xhr.send(request.query);
});
