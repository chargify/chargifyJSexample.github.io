var chargifyJsSrc = document.getElementById('chargify-js-src');
var publicKey = document.getElementById('public-key');
var serverHost = document.getElementById('server-host');
var example = document.getElementById('examples');
var settingsSubmit = document.getElementById('settings-submit');
var loadingSubmit = document.getElementById('settings-loading');
var errorBox = document.getElementById('errors-box');
var localStorage = window.localStorage;
var chargifyJsSrcValue = localStorage.getItem("chargifyJsSrc");
var publicKeyValue = localStorage.getItem("publicKey");
var serverHostValue = localStorage.getItem("serverHost");
var exampleValue = localStorage.getItem("example");

chargifyJsSrc.value = chargifyJsSrcValue;
publicKey.value = publicKeyValue;
serverHost.value = serverHostValue;
example.value = exampleValue;

if(!chargifyJsSrc.value){
  chargifyJsSrc.value = 'https://js.chargify.com/latest/chargify.js';
}

if (!chargifyJsSrc.value || !publicKey.value || !serverHost.value || !example.value) {
  errorBox.style.display = "block";
}

saveSettings = () => {
  settingsSubmit.style.display = "none";
  loadingSubmit.style.display = "block";
  localStorage.setItem("chargifyJsSrc", chargifyJsSrc.value);
  localStorage.setItem("publicKey", publicKey.value);
  localStorage.setItem("serverHost", serverHost.value);
  localStorage.setItem("example", example.value);
  location.reload();
}

settingsSubmit.addEventListener("click", saveSettings);

var chargifyJsSrcScript = document.createElement('script');
chargifyJsSrcScript.setAttribute('src', chargifyJsSrcValue);
document.head.appendChild(chargifyJsSrcScript);

setTimeout(() => {
  var exampleScript = document.createElement('script');
  exampleScript.setAttribute('src',`./example/${example.value}.js`);
  document.head.appendChild(exampleScript);

  var submitScript = document.createElement('script');
  submitScript.setAttribute('src','./example/submit.js');
  document.head.appendChild(submitScript);
  loadingSubmit.style.display = "none";
  settingsSubmit.style.display = "block";
}, 2000);











