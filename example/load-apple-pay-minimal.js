document.getElementById('credit-card-info').style.display = 'none';
document.getElementById('billing-info').style.display = 'none';
document.getElementById('bank-info').style.display = 'none';
document.getElementById('example-card-numbers').style.display = 'none';
document.querySelector('.host-button').style.display = 'none';

const chargify = new Chargify();

chargify.load({
  // selector where the iframe will be included in the host's HTML (i.e. '#chargify-form')
  // optional if you have a `selector` on each and every field
  selector: '#chargify-form',

  // (i.e. '1a2cdsdn3lkn54lnlkn')
  publicKey: localStorage.getItem("publicKey"),

  type: 'apple_pay',

  // This will be presented in the Apple Pay modal window
  applePayLabel: 'Example product',
  applePayAmount: '10', // the amount should be formatted with period ".", for example "10.5"

  // selector for Apple Pay button (apple pay button will be shown inside of it)
  selectorForApplePayButton: '#apple-pay',

  // points to your Chargify site
  serverHost: localStorage.getItem("serverHost"),
}, {
  onApplePayAuthorized: function () {
    document.querySelector('.host-form').dispatchEvent(new Event('submit')); // submit form
  },
  onApplePayNotSupported: function () {
    document.querySelector('#apple-pay-validation-errors').innerHTML = 'Your browser or device does not support Apple Pay on the web. Open this page in Safari on a compatible device.';
  },
  onApplePayError: function (err) {
    console.error(err); // eslint-disable-line no-console
  },
});

// this function will be called on form submit event
const onSubmitForm = function () { // eslint-disable-line no-unused-vars
  document.querySelector('#apple-pay-validation-errors').innerHTML = '';

  chargify.token(
    document.querySelector('.host-form'),

    (token, message) => {
      console.log('{host} token SUCCESS - token: ', token); // eslint-disable-line no-console

      // host will write token in hidden input
      document.querySelector('#host-token').value = token;

      // and then submit form
      // form.submit();
      console.log('{host} form submitted'); // eslint-disable-line no-console

      // if there is message show it via alert
      if (message) {
        alert(message);
      }
    },

    (err) => {
      document.querySelector('.host-button').style.display = 'inline';

      if (err.hasOwnProperty('invalidFields')) {
        document.querySelector('#apple-pay-validation-errors').innerHTML = 'Your payment has been authorized, but some fields are not valid.<br />Fill in them and submit form again and you will be charged upon sign-up.';
      } else {
        document.querySelector('#apple-pay-validation-errors').innerHTML = err.errors;
      }

      console.log('{host} token ERROR - err: ', err); // eslint-disable-line no-console
    },
  );
};
