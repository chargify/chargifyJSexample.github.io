document.getElementById('credit-card-info').style.display = 'none';
document.getElementById('billing-info').style.display = 'none';
document.getElementById('bank-info').style.display = 'none';
document.getElementById('example-card-numbers').style.display = 'none';
document.querySelector('.host-button').style.display = 'none';

const chargify = new Chargify();
const context = localStorage.getItem('context');

chargify.verifyMicrodeposit({
  token: localStorage.getItem(`${context}oneTimeToken`),
  publicKey: localStorage.getItem(`${context}publicKey`),
  securityToken: localStorage.getItem(`${context}securityToken`),
  serverHost: localStorage.getItem(`${context}serverHost`),
  gatewayHandle: localStorage.getItem(`${context}gatewayHandle`),
  selectorForPlaidLink: '#plaid-link',
  plaidLinkName: 'Verify my bank account',
  plaidLinkStyle: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '15px 25px',
    textDecoration: 'none',
    textTransform: 'capitalize',
  },
}, (token) => {
  console.log('The account was successfully verified:', token);
  document.querySelector('#host-token').value = token;
}, (error) => {
  console.log('An error occurred during the account verification:', error);
},
{
  onDirectDebitReceiveConfigurationError: function(error) { console.log('onDirectDebitReceiveConfigurationError: ' + error) },
  onReceivedDirectDebitConfiguration: function() { console.log('onReceivedDirectDebitConfiguration') },
  onPlaidAccountVerificationPending: function(token) { console.log('This token requires manual verification:', token); },
  onPlaidLinkTokenError: function(error) { console.log('onPlaidLinkTokenError: ' + error) },
  onPlaidAccountVerificationError: function(error) { console.log(error) },
  onPlaidExit: function(error) { console.log('onPlaidExit: ' + error) },
}
);
