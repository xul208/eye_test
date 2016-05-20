var domains = ['com', 'ca', 'com.br'];

function getCurrentDomain() {
  var currentUrl = chrome.tabs.getCurrent.url;
  return currentUrl;
}

function test(){
//  chrome.tabs.update(null, {url:'https://xli-dev.dhcp.tripadvisor.com'});
//  alert(0);
  chrome.tabs.executeScript(null, {
          file: "onPage.js" 
        });
}
document.getElementById('clickme').addEventListener('click', test); 
//setTimeout(nextStep, 3000);
