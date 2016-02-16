var domains = ['com', 'ca', 'com.br'];

function getCurrentDomain() {
  var currentUrl = chrome.tabs.getCurrent.url;
  return currentUrl;
}

function nextStep () {
  //chrome.tabs.update(null, {url:'https://xli-dev.dhcp.tripadvisor.ru'});
  console.log(getCurrentDomain());

  //setTimeout(nextStep2, 3000);
  //console.log(0);
}

// document.getElementById('clickme').addEventListener('click', test); 
setTimeout(nextStep, 3000);
