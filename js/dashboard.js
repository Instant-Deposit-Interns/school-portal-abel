document.addEventListener('DOMContentLoaded', () => {
  const iframe = document.querySelector('iframe');
  iframe.width = '1080px';
  iframe.height = '550px';

  const getData = (route = 'profile') => {
    fetch(`/dashboard/${route}.html`)
      .then((result) => result.text())
      .then((data) => {
        iframe.srcdoc = data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getData();

  const side_bar_links = document.querySelectorAll('.side-bar-link > span');
  [...side_bar_links].forEach((link) => {
    link.onclick = () => {
      let action = link.dataset.action;
      console.log(action);
      getData(action);
    };
  });

  iframe.onload = () => {
    let innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    let program_form = innerDoc.body.querySelector(
      'form[name="program-selection"]'
    );
    program_form.onsubmit = (evt) => {
      evt.preventDefault();
      window.location.assign('/payment.html');
      program_form.reset();
    };
  };
});
