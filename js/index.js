const form = document.querySelector('form');

form.onsubmit = (evt) => {
  evt.preventDefault();
  window.location.assign('/dashboard.html');
  form.reset();
};
