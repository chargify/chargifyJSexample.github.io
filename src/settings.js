import { SignJWT } from 'jose';

const chargifyJsSrc = document.getElementById('chargify-js-src');
const publicKey = document.getElementById('public-key');
const privateKey = document.getElementById('private-key');
const serverHost = document.getElementById('server-host');
const example = document.getElementById('examples');
const gatewayHandle = document.getElementById('gateway-handle');
const oneTimeToken = document.getElementById('one-time-token');
const settingsSubmit = document.getElementById('settings-submit');
const loadingSubmit = document.getElementById('settings-loading');
const errorBox = document.getElementById('errors-box');
const localStorage = window.localStorage;
let context = localStorage.getItem('context') || '1';

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

chargifyJsSrc.value = localStorage.getItem(`${context}chargifyJsSrc`);
publicKey.value = localStorage.getItem(`${context}publicKey`);
privateKey.value = localStorage.getItem(`${context}privateKey`);
serverHost.value = localStorage.getItem(`${context}serverHost`);
example.value = localStorage.getItem(`${context}example`);
gatewayHandle.value = localStorage.getItem(`${context}gatewayHandle`);
oneTimeToken.value = localStorage.getItem(`${context}oneTimeToken`);

if(!chargifyJsSrc.value){
  chargifyJsSrc.value = 'https://js.chargify.com/latest/chargify.js';
}

if (!chargifyJsSrc.value || !publicKey.value || !serverHost.value || !example.value) {
  errorBox.style.display = 'block';
}

const saveSettings = () => {
  settingsSubmit.style.display = 'none';
  loadingSubmit.style.display = 'block';
  localStorage.setItem('context', context);
  localStorage.setItem(`${context}chargifyJsSrc`, chargifyJsSrc.value);
  localStorage.setItem(`${context}publicKey`, publicKey.value);
  localStorage.setItem(`${context}privateKey`, privateKey.value);
  localStorage.setItem(`${context}serverHost`, serverHost.value);
  localStorage.setItem(`${context}example`, example.value);
  localStorage.setItem(`${context}gatewayHandle`, gatewayHandle.value);
  localStorage.setItem(`${context}oneTimeToken`, oneTimeToken.value);
  generateSecurityToken(publicKey.value, privateKey.value)
    .then(securityToken => localStorage.setItem(`${context}securityToken`, securityToken))
    .then(() => location.reload());
}

settingsSubmit.addEventListener('click', saveSettings);

const setContext = (name) => {
  localStorage.setItem('context', name);
  location.reload();
}

const contextButtons = document.querySelectorAll('.context-button');
contextButtons.forEach(contextButton => {
  contextButton.addEventListener('click', () => { setContext(contextButton.value) });
  if (contextButton.value === context) contextButton.classList.add('active')
});

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
  loadingSubmit.style.display = 'none';
  settingsSubmit.style.display = 'block';
}, 2000);
