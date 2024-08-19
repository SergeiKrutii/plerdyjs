const input = document.querySelector('#phone');
const container = document.querySelector('[intl-tel-input]');
const iti = window.intlTelInput(input, {
  initialCountry: 'ua',
  separateDialCode: true,
  onlyCountries: ['ua', 'md', 'us'],
  useFullscreenPopup: false,
  dropdownContainer: container,

  geoIpLookup: function (callback) {
    fetch('https://ipinfo.io')
      .then(response => response.json())
      .then(data => {
        const countryCode = data && data.country ? data.country : 'us';
        callback(countryCode);
      });
  },
  utilsScript:
    'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
});
