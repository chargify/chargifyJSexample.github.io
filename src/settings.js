var chargifyJsSrc = document.getElementById('chargify-js-src');
var publicKey = document.getElementById('public-key');
var serverHost = document.getElementById('server-host');
var settingsSubmit = document.getElementById('settings-submit');
var localStorage = window.localStorage;
var chargifyJsSrcValue = localStorage.getItem("chargifyJsSrc")
var publicKeyValue = localStorage.getItem("publicKey")
var serverHostValue = localStorage.getItem("serverHost")

chargifyJsSrc.value = chargifyJsSrcValue;
publicKey.value = publicKeyValue;
serverHost.value = serverHostValue;

saveSettings = () => {
  localStorage.setItem("chargifyJsSrc", chargifyJsSrc.value);
  localStorage.setItem("publicKey", publicKey.value);
  localStorage.setItem("serverHost", serverHost.value);
}

settingsSubmit.addEventListener("click", saveSettings);

var chargifyJsSrcScript = document.createElement('script');
chargifyJsSrcScript.setAttribute('src', chargifyJsSrcValue);
document.head.appendChild(chargifyJsSrcScript);

var exampleScript = document.createElement('script');
// example/load-card-full.js
exampleScript.setAttribute('src','./example/load-card-minimal.js');
document.head.appendChild(exampleScript);

var submitScript = document.createElement('script');
submitScript.setAttribute('src','./example/submit.js');
document.head.appendChild(submitScript);