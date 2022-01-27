document.addEventListener('DOMContentLoaded', () => {
  const verify = document.querySelector('#verify');
  verify.style.display = 'none';

  const form = document.querySelector('form');
  form.onsubmit = (evt) => {
    evt.preventDefault();

    setTimeout(() => {
      verify.style.display = 'block';
      window.location.assign('/success.html');
    }, 1000);
  };
});
