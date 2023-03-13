const chargify = new Chargify();
const context = localStorage.getItem('context');

chargify.load({

  // selector where the iframe will be included in the host's HTML (i.e. '#chargify-form')
  // optional if you have a `selector` on each and every field
  selector: '#chargify-form',

  // (i.e. '1a2cdsdn3lkn54lnlkn')
  publicKey: localStorage.getItem(`${context}publicKey`),
  securityToken: localStorage.getItem(`${context}securityToken`),

  // form type (possible values: 'card' or 'bank')
  type: 'card',

  // points to your Chargify site
  serverHost: localStorage.getItem(`${context}serverHost`),

  gatewayHandle: localStorage.getItem(`${context}gatewayHandle`),

  // Enable 3D secure
  threeDSecure: true,

  // Use auto-populated dropdowns instead of plain text fields
  addressDropdowns: true,

  fields: {
    firstName: {
      selector: '#chargify-form',
      label: 'First Name',
      placeholder: 'John',
      required: true,
      message: 'This field is not valid. Please update it.',
      maxlength: '30',
    },

    lastName: {
      selector: '#chargify-form',
      label: 'Last Name',
      placeholder: 'Doe',
      required: true,
      message: 'This field is not valid. Please update it.',
      maxlength: '30',
    },

    number: {
      selector: '#chargify-form',
      label: 'Number',
      placeholder: 'xxxx xxxx xxxx xxxx',
      message: 'This field is not valid. Please update it.',
    },

    month: {
      selector: '#chargify-form',
      label: 'Mon',
      placeholder: 'mm',
      message: 'This field is not valid. Please update it.',
    },

    year: {
      selector: '#chargify-form',
      label: 'Year',
      placeholder: 'yy',
      message: 'This field is not valid. Please update it.',
    },

    cvv: {
      selector: '#chargify-form',
      label: 'CVV code',
      placeholder: 'yy',
      required: true,
      message: 'This field is not valid. Please update it.',
    },

    address: {
      selector: '#chargify-billing',
      label: 'Address',
      placeholder: '1234 Hill St',
      required: false,
      message: 'This field is not valid. Please update it.',
      maxlength: '70',
    },

    city: {
      selector: '#chargify-billing',
      label: 'City',
      placeholder: 'Austin',
      required: false,
      message: 'This field is not valid. Please update it.',
      maxlength: '30',
    },

    country: {
      selector: '#chargify-billing',
      label: 'Country',
      placeholder: 'Select...',
      required: true,
      message: 'This field is not valid. Please update it.',
      maxlength: '2', // ISO 3166-1 alpha-2
    },

    state: {
      selector: '#chargify-billing',
      label: 'State',
      placeholder: 'Select...',
      required: true,
      message: 'This field is not valid. Please update it.',
      maxlength: '2',
    },

    zip: {
      selector: '#chargify-billing',
      label: 'Zip Code',
      placeholder: '10001',
      required: true,
      message: 'This field is not valid. Please update it.',
      maxlength: '5',
    },
  },
}, {
  onThreeDsConfigError: function (error) {
    console.error(error); // eslint-disable-line no-console
  },
});
