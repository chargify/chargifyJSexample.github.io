import { SignJWT } from 'jose'

var chargifyJsSrc = document.getElementById('chargify-js-src');
var publicKey = document.getElementById('public-key');
var privateKey = document.getElementById('private-key');
var serverHost = document.getElementById('server-host');
var example = document.getElementById('examples');
var gatewayHandle = document.getElementById('gateway-handle');
var settingsSubmit = document.getElementById('settings-submit');
var loadingSubmit = document.getElementById('settings-loading');
var errorBox = document.getElementById('errors-box');
var localStorage = window.localStorage;
var chargifyJsSrcValue = localStorage.getItem("chargifyJsSrc");
var publicKeyValue = localStorage.getItem("publicKey");
var privateKeyValue = localStorage.getItem('privateKey');
var serverHostValue = localStorage.getItem("serverHost");
var exampleValue = localStorage.getItem("example");
var gatewayHandleValue = localStorage.getItem("gatewayHandle");

const generateSecurityToken = async () => {
  if (!privateKeyValue) { return null };

  const secret = new TextEncoder().encode(privateKeyValue);
  const result = new SignJWT({}).setProtectedHeader({ alg: 'HS256' })
                                .setIssuer(publicKeyValue)
                                .setJti(self.crypto.randomUUID())
                                .setSubject(self.crypto.randomUUID())
                                .sign(secret);
  return result
}

chargifyJsSrc.value = chargifyJsSrcValue;
publicKey.value = publicKeyValue;
privateKey.value = privateKeyValue;
serverHost.value = serverHostValue;
example.value = exampleValue;
gatewayHandle.value = gatewayHandleValue;

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
  localStorage.setItem("privateKey", privateKey.value);
  localStorage.setItem("serverHost", serverHost.value);
  localStorage.setItem("example", example.value);
  localStorage.setItem("gatewayHandle", gatewayHandle.value);
  generateSecurityToken().then(securityToken => localStorage.setItem("securityToken", securityToken));
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











