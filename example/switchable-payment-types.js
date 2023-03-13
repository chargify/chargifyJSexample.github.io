
document.getElementById('payment-types').style.display = 'block';
document.getElementById('credit-card-info').style.display = 'none';
document.getElementById('billing-info').style.display = 'none';
document.getElementById('bank-info').style.display = 'none';

const chargify = new Chargify();
const context = localStorage.getItem('context');

// Initial load as credit card
chargify.load({
  selector: '#chargify-form',
  publicKey: localStorage.getItem(`${context}publicKey`),
  securityToken: localStorage.getItem(`${context}securityToken`),
  type: 'card',
  serverHost: localStorage.getItem(`${context}serverHost`),
  gatewayHandle: localStorage.getItem(`${context}gatewayHandle`),
});

document.getElementById('payment-type-card').addEventListener('click', () => {
  // change type to credit card (selector, publicKey and serverHost are stored from previous call)
  chargify.load({ type: 'card' });
  document.getElementById('host-token').value = '';
});

document.getElementById('payment-type-bank').addEventListener('click', () => {
  // change type to bank account (selector, publicKey and serverHost are stored from previous call)
  chargify.load({ type: 'bank' });
  document.getElementById('host-token').value = '';
});
