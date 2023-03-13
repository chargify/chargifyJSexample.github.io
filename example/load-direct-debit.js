document.getElementById('credit-card-info').style.display = 'none';
document.getElementById('billing-info').style.display = 'none';
document.getElementById('bank-info').style.display = 'none';
document.getElementById('example-card-numbers').style.display = 'none';

const chargify = new Chargify();
const context = localStorage.getItem('context');

chargify.load({
  // selector where the iframe will be included in the host's HTML (i.e. '#chargify-form')
  // optional if you have a `selector` on each and every field
  selector: '#chargify-form',

  // (i.e. '1a2cdsdn3lkn54lnlkn')
  publicKey: localStorage.getItem(`${context}publicKey`),
  securityToken: localStorage.getItem(`${context}securityToken`),

  // form type (possible values: 'card', 'bank', 'apple_pay', 'pay_pal', 'direct_debit')
  type: 'direct_debit',

  serverHost: localStorage.getItem(`${context}serverHost`),

  gatewayHandle: localStorage.getItem(`${context}gatewayHandle`),
});
