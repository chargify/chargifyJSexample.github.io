
const chargify = new Chargify();

chargify.load({

  // selector where the iframe will be included in the host's HTML (i.e. '#chargify-form')
  // optional if you have a `selector` on each and every field
  selector: '#chargify-form',

  // (i.e. '1a2cdsdn3lkn54lnlkn')
  publicKey: 'MY_PUBLIC_KEY',

  // form type (possible values: 'card' or 'bank')
  type: 'card',

  // points to your Chargify site
  serverHost: 'https://acme.chargify.test',

  // flag to show/hide the credit card image
  // true: hides the credit card image
  // visible otherwise
  hideCardImage: false,

  // optional label/translation (i.e. '(optional field)')
  optionalLabel: '(optional field)',

  // required label/translation (i.e. '*')
  requiredLabel: '*',

  // global styles including iframe styles and global fields, input, label and messages styles
  style: {
    // to style an iframe, use the iframe's container selector (i.e. '#chargify-form')
    '#chargify-form': { border: '1px dashed #ffc0cb57' },

    // `field` is the container for each field
    field: { backgroundColor: 'orange', paddingTop: '10px', paddingBottom: '10px', borderRadius: '5px' },

    // `input` is the input HTML element
    input: { backgroundColor: '#e6e6e6', paddingTop: '2px', paddingBottom: '1px' },

    // `label` is the label container
    label: { backgroundColor: 'lightblue', paddingTop: '2px', paddingBottom: '1px' },

    // `message` is the invalid message container
    message: { backgroundColor: 'red', color: 'white', paddingTop: '2px', paddingBottom: '1px' },
  },

  // fields overrides
  fields: {

    firstName: {
      // selector where the iframe of this field will be included in the host's HTML (i.e. '#chargify-last-name')
      // optional if you have `selector` at the root of the options
      selector: '#chargify-form',

      // label text override/translation (i.e. 'First')
      label: 'FIRST NAME',

      // placeholder text override/translation
      placeholder: 'John',

      required: true,

      // error message override/translation
      message: 'This field is not valid. Please update it.',

      // max length override
      maxlength: '30',

      // per field style override
      style: {
        field: { backgroundColor: '#ffdfdf', padding: '3px', borderRadius: '5px' },
        input: { backgroundColor: '#fdfde1', paddingTop: '2px', paddingBottom: '1px' },
        label: { paddingTop: '2px', paddingBottom: '1px', fontSize: '11px' },
        message: { paddingTop: '2px', paddingBottom: '1px' },
      },
    },

    lastName: {
      selector: '#chargify-form',
      label: 'LAST NAME',
      placeholder: 'Doe',
      required: true,
      message: 'This field is not valid. Please update it.',
      maxlength: '30',
      style: {
        field: { backgroundColor: '#ffdfdf', padding: '3px', borderRadius: '5px' },
        input: { backgroundColor: '#fdfde1', paddingTop: '2px', paddingBottom: '1px' },
        label: { paddingTop: '2px', paddingBottom: '1px', fontSize: '11px' },
        message: { paddingTop: '2px', paddingBottom: '1px' },
      },
    },

    number: {
      selector: '#chargify-form',
      label: 'Number',
      placeholder: 'xxxx xxxx xxxx xxxx',
      message: 'This field is not valid. Please update it.',
      style: {
        field: { backgroundColor: '#ffdfdf', padding: '3px', borderRadius: '5px' },
        input: { backgroundColor: '#fdfde1', paddingTop: '2px', paddingBottom: '1px' },
        label: { paddingTop: '2px', paddingBottom: '1px', fontSize: '11px' },
        message: { paddingTop: '2px', paddingBottom: '1px' },
      },
    },

    month: {
      selector: '#chargify-form',
      label: 'Mon',
      placeholder: 'mm',
      message: 'This field is not valid. Please update it.',
      style: {
        field: { backgroundColor: '#ffdfdf', padding: '3px', borderRadius: '5px' },
        input: { backgroundColor: '#fdfde1', paddingTop: '2px', paddingBottom: '1px' },
        label: { paddingTop: '2px', paddingBottom: '1px', fontSize: '11px' },
        message: { paddingTop: '2px', paddingBottom: '1px' },
      },
    },

    year: {
      selector: '#chargify-form',
      label: 'Year',
      placeholder: 'yy',
      message: 'This field is not valid. Please update it.',
      style: {
        field: { backgroundColor: '#ffdfdf', padding: '3px', borderRadius: '5px' },
        input: { backgroundColor: '#fdfde1', paddingTop: '2px', paddingBottom: '1px' },
        label: { paddingTop: '2px', paddingBottom: '1px', fontSize: '11px' },
        message: { paddingTop: '2px', paddingBottom: '1px' },
      },
    },

    cvv: {
      selector: '#chargify-form',
      label: 'CVV code',
      placeholder: 'yy',
      required: true,
      message: 'This field is not valid. Please update it.',
      style: {
        field: { backgroundColor: '#ffdfdf', padding: '3px', borderRadius: '5px' },
        input: { backgroundColor: '#fdfde1', paddingTop: '2px', paddingBottom: '1px' },
        label: { paddingTop: '2px', paddingBottom: '1px', fontSize: '11px' },
        message: { paddingTop: '2px', paddingBottom: '1px' },
      },
    },

    address: {
      selector: '#chargify-billing',
      label: 'Address',
      placeholder: '1234 Hill St',
      required: true,
      message: 'This field is not valid. Please update it.',
      maxlength: '70',
      style: {
        field: { backgroundColor: '#ffdfdf', padding: '3px', borderRadius: '5px' },
        input: { backgroundColor: '#fdfde1', paddingTop: '2px', paddingBottom: '1px' },
        label: { paddingTop: '2px', paddingBottom: '1px', fontSize: '11px' },
        message: { paddingTop: '2px', paddingBottom: '1px' },
      },
    },

    address2: {
      selector: '#chargify-billing',
      label: 'Address 2',
      placeholder: '1234 Hill St',
      required: true,
      message: 'This field is not valid. Please update it.',
      maxlength: '70',
      style: {
        field: { backgroundColor: '#ffdfdf', padding: '3px', borderRadius: '5px' },
        input: { backgroundColor: '#fdfde1', paddingTop: '2px', paddingBottom: '1px' },
        label: { paddingTop: '2px', paddingBottom: '1px', fontSize: '11px' },
        message: { paddingTop: '2px', paddingBottom: '1px' },
      },
    },

    city: {
      selector: '#chargify-billing',
      label: 'City',
      placeholder: 'Austin',
      required: true,
      message: 'This field is not valid. Please update it.',
      maxlength: '30',
      style: {
        field: { backgroundColor: '#ffdfdf', padding: '3px', borderRadius: '5px' },
        input: { backgroundColor: '#fdfde1', paddingTop: '2px', paddingBottom: '1px' },
        label: { paddingTop: '2px', paddingBottom: '1px', fontSize: '11px' },
        message: { paddingTop: '2px', paddingBottom: '1px' },
      },
    },

    state: {
      selector: '#chargify-billing',
      label: 'State',
      placeholder: 'TX',
      required: true,
      message: 'This field is not valid. Please update it.',
      maxlength: '2',
      style: {
        field: { backgroundColor: '#ffdfdf', padding: '3px', borderRadius: '5px' },
        input: { backgroundColor: '#fdfde1', paddingTop: '2px', paddingBottom: '1px' },
        label: { paddingTop: '2px', paddingBottom: '1px', fontSize: '11px' },
        message: { paddingTop: '2px', paddingBottom: '1px' },
      },
    },

    zip: {
      selector: '#chargify-billing',
      label: 'Zip Code',
      placeholder: '10001',
      required: true,
      message: 'This field is not valid. Please update it.',
      maxlength: '5',
      style: {
        field: { backgroundColor: '#ffdfdf', padding: '3px', borderRadius: '5px' },
        input: { backgroundColor: '#fdfde1', paddingTop: '2px', paddingBottom: '1px' },
        label: { paddingTop: '2px', paddingBottom: '1px', fontSize: '11px' },
        message: { paddingTop: '2px', paddingBottom: '1px' },
      },
    },

    country: {
      selector: '#chargify-billing',
      label: 'Country',
      placeholder: 'USA',
      required: true,
      message: 'This field is not valid. Please update it.',
      maxlength: '30',
      style: {
        field: { backgroundColor: '#ffdfdf', padding: '3px', borderRadius: '5px' },
        input: { backgroundColor: '#fdfde1', paddingTop: '2px', paddingBottom: '1px' },
        label: { paddingTop: '2px', paddingBottom: '1px', fontSize: '11px' },
        message: { paddingTop: '2px', paddingBottom: '1px' },
      },
    },

  },
});
