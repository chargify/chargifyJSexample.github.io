import { SignJWT } from 'jose';

const chargifyJsSrc = document.getElementById('chargify-js-src');
const publicKey = document.getElementById('public-key');
const privateKey = document.getElementById('private-key');
const serverHost = document.getElementById('server-host');
const example = document.getElementById('examples');
const gatewayHandle = document.getElementById('gateway-handle');
const settingsSubmit = document.getElementById('settings-submit');
const loadingSubmit = document.getElementById('settings-loading');
const errorBox = document.getElementById('errors-box');
const localStorage = window.localStorage;
const chargifyJsSrcValue = localStorage.getItem("chargifyJsSrc");
const publicKeyValue = localStorage.getItem("publicKey");
const privateKeyValue = localStorage.getItem('privateKey');
const serverHostValue = localStorage.getItem("serverHost");
const exampleValue = localStorage.getItem("example");
const gatewayHandleValue = localStorage.getItem("gatewayHandle");

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

const chargifyJsSrcScript = document.createElement('script');
chargifyJsSrcScript.setAttribute('src', chargifyJsSrcValue);
document.head.appendChild(chargifyJsSrcScript);

setTimeout(() => {
  const exampleScript = document.createElement('script');
  exampleScript.setAttribute('src',`./example/${example.value}.js`);
  document.head.appendChild(exampleScript);

  const submitScript = document.createElement('script');
  submitScript.setAttribute('src','./example/submit.js');
  document.head.appendChild(submitScript);
  loadingSubmit.style.display = "none";
  settingsSubmit.style.display = "block";
}, 2000);











