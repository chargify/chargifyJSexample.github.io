document.querySelector('.host-form').addEventListener('submit', function (event) {
  const form = this;

  event.preventDefault();

  if (typeof onSubmitForm === 'function') {
    onSubmitForm(); // eslint-disable-line no-undef
  } else {
    chargify.token(
      form,

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
        console.log('{host} token ERROR - err: ', err); // eslint-disable-line no-console
      },
    );
  }
});
