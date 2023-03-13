const chargify = new Chargify();
const context = localStorage.getItem('context');

chargify.load({

  // selector where the iframe will be included in the host's HTML (i.e. '#chargify-bank')
  // optional if you have a `selector` on each and every field
  selector: '#chargify-bank',

  // (i.e. '1a2cdsdn3lkn54lnlkn')
  publicKey: localStorage.getItem(`${context}publicKey`),
  securityToken: localStorage.getItem(`${context}securityToken`),

  // form type (possible values: 'card' or 'bank')
  type: 'bank',

  // points to your Chargify site
  serverHost: localStorage.getItem(`${context}serverHost`),

  gatewayHandle: localStorage.getItem(`${context}gatewayHandle`),

  // optional label/translation (i.e. '(optional field)')
  optionalLabel: '(optional field)',

  // required label/translation (i.e. '*')
  requiredLabel: '*',

  // global styles including iframe styles and global fields, input, label and messages styles
  style: {
    // to style an iframe, use the iframe's container selector (i.e. '#chargify-bank')
    '#chargify-bank': { border: '1px dashed #ffc0cb57' },

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
      selector: '#chargify-bank',

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
      selector: '#chargify-bank',
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

    bankName: {
      selector: '#chargify-bank',
      label: 'Bank Name',
      placeholder: 'My Bank',
      message: 'This field is not valid. Please update it.',
      style: {
        field: { backgroundColor: '#ffdfdf', padding: '3px', borderRadius: '5px' },
        input: { backgroundColor: '#fdfde1', paddingTop: '2px', paddingBottom: '1px' },
        label: { paddingTop: '2px', paddingBottom: '1px', fontSize: '11px' },
        message: { paddingTop: '2px', paddingBottom: '1px' },
      },
    },

    routingNumber: {
      selector: '#chargify-bank',
      label: 'Routing',
      placeholder: '123412341234',
      message: 'This field is not valid. Please update it.',
      style: {
        field: { backgroundColor: '#ffdfdf', padding: '3px', borderRadius: '5px' },
        input: { backgroundColor: '#fdfde1', paddingTop: '2px', paddingBottom: '1px' },
        label: { paddingTop: '2px', paddingBottom: '1px', fontSize: '11px' },
        message: { paddingTop: '2px', paddingBottom: '1px' },
      },
    },

    accountNumber: {
      selector: '#chargify-bank',
      label: 'Acct. Number',
      placeholder: '123412341234',
      message: 'This field is not valid. Please update it.',
      style: {
        field: { backgroundColor: '#ffdfdf', padding: '3px', borderRadius: '5px' },
        input: { backgroundColor: '#fdfde1', paddingTop: '2px', paddingBottom: '1px' },
        label: { paddingTop: '2px', paddingBottom: '1px', fontSize: '11px' },
        message: { paddingTop: '2px', paddingBottom: '1px' },
      },
    },

    accountType: {
      selector: '#chargify-bank',
      label: 'Acct. Type',
      placeholder: 'Select One...',
      required: true,
      message: 'This field is not valid. Please update it.',
      style: {
        field: { backgroundColor: '#ffdfdf', padding: '3px', borderRadius: '5px' },
        input: { backgroundColor: '#fdfde1', paddingTop: '2px', paddingBottom: '1px' },
        label: { paddingTop: '2px', paddingBottom: '1px', fontSize: '11px' },
        message: { paddingTop: '2px', paddingBottom: '1px' },
      },
    },

    accountHolderType: {
      selector: '#chargify-bank',
      label: 'Acct. Holder',
      placeholder: 'Select One...',
      required: true,
      message: 'This field is not valid. Please update it.',
      style: {
        field: { backgroundColor: '#ffdfdf', padding: '3px', borderRadius: '5px' },
        input: { backgroundColor: '#fdfde1', paddingTop: '2px', paddingBottom: '1px' },
        label: { paddingTop: '2px', paddingBottom: '1px', fontSize: '11px' },
        message: { paddingTop: '2px', paddingBottom: '1px' },
      },
    },

  },
});
