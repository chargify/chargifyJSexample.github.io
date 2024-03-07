
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

    type: 'direct_debit',

    // selector for Plaid Link (Plaid Link will be shown inside of it)
    selectorForPlaidLink: '#plaid-link',
    plaidLinkName: 'Use Plaid to connect my bank account',
    plaidLinkStyle: {
        backgroundColor: '#000',
        color: '#fff',
        padding: '15px 25px',
        textDecoration: 'none',
        marging: '20 px'
    },

    addressDropdowns: true,

    serverHost: localStorage.getItem(`${context}serverHost`),
    gatewayHandle: localStorage.getItem(`${context}gatewayHandle`),

},{
    onDirectDebitReceiveConfigurationError: function(error) { console.log('onDirectDebitReceiveConfigurationError: ' + error) },
    onReceivedDirectDebitConfiguration: function() { console.log('onReceivedDirectDebitConfiguration') },
    onPlaidLinkTokenError: function(error) { console.log(error) },
    onPlaidComplete: function() { console.log('onPlaidComplete') },
    onPlaidExit: function(error) { console.log('onPlaidExit: ' + error) },
});
