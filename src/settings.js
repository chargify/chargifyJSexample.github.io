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

const generateSecurityToken = async (publicKeyValue, privateKeyValue) => {
  if (!privateKeyValue || !publicKeyValue) { return null };

  const secret = new TextEncoder().encode(privateKeyValue);
  const result = new SignJWT({}).setProtectedHeader({ alg: 'HS256' })
                                .setIssuer(publicKeyValue)
                                .setJti(self.crypto.randomUUID())
                                .setSubject(self.crypto.randomUUID())
                                .sign(secret);
  return result
}

chargifyJsSrc.value = localStorage.getItem('chargifyJsSrc');
publicKey.value = localStorage.getItem('publicKey');
privateKey.value = localStorage.getItem('privateKey');
serverHost.value = localStorage.getItem('serverHost');
example.value = localStorage.getItem('example');
gatewayHandle.value = localStorage.getItem('gatewayHandle');

if(!chargifyJsSrc.value){
  chargifyJsSrc.value = 'https://js.chargify.com/latest/chargify.js';
}

if (!chargifyJsSrc.value || !publicKey.value || !serverHost.value || !example.value) {
  errorBox.style.display = "block";
}

const saveSettings = () => {
  settingsSubmit.style.display = "none";
  loadingSubmit.style.display = "block";
  localStorage.setItem("chargifyJsSrc", chargifyJsSrc.value);
  localStorage.setItem("publicKey", publicKey.value);
  localStorage.setItem("privateKey", privateKey.value);
  localStorage.setItem("serverHost", serverHost.value);
  localStorage.setItem("example", example.value);
  localStorage.setItem("gatewayHandle", gatewayHandle.value);
  generateSecurityToken(publicKey.value, privateKey.value)
    .then(securityToken => localStorage.setItem("securityToken", securityToken))
    .then(() => location.reload());
}

settingsSubmit.addEventListener("click", saveSettings);

const chargifyJsSrcScript = document.createElement('script');
chargifyJsSrcScript.setAttribute('src', chargifyJsSrc.value);
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











