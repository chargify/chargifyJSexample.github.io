document.getElementById('credit-card-info').style.display = 'none';
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

  type: 'pay_pal',

  // selector for PayPal button (PayPal button will be shown inside of it)
  selectorForPayPalButton: '#pay-pal',

  // points to your Chargify site
  serverHost: localStorage.getItem("serverHost"),

  gatewayHandle: localStorage.getItem("gatewayHandle"),

  // Use auto-populated dropdowns instead of plain text fields
  addressDropdowns: true,

  fields: {
    firstName: {
      selector: '#chargify-form',
      required: true,
    },
    lastName: {
      selector: '#chargify-form',
      required: true,
    },
    address: {
      selector: '#chargify-billing',
    },
    address2: {
      selector: '#chargify-billing',
    },
    country: {
      selector: '#chargify-billing',
    },
    city: {
      selector: '#chargify-billing',
    },
    state: {
      selector: '#chargify-billing',
    },
    zip: {
      selector: '#chargify-billing',
    },
  },
}, {
  onPayPalAuthorized: function () {
    document.querySelector('.host-form').dispatchEvent(new Event('submit')); // submit form
  },
  onPayPalError: function (err) {
    console.error(err); // eslint-disable-line no-console
  },
});

// this function will be called on form submit event
function onSubmitForm() { // eslint-disable-line no-unused-vars
  document.querySelector('#pay-pal-validation-errors').innerHTML = '';

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
        document.querySelector('#pay-pal-validation-errors').innerHTML = 'Your payment has been authorized, but some fields are not valid.<br />Fill in them and submit form again and you will be charged upon sign-up.';
      } else {
        document.querySelector('#pay-pal-validation-errors').innerHTML = err.errors;
      }

      console.log('{host} token ERROR - err: ', err); // eslint-disable-line no-console
    },
  );
}
