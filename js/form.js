const form = document.getElementById('contactForm');

form.addEventListener('submit', function (event) {
  // zamezení defaultnímu stavu události ()
  event.preventDefault();

  // data formuláře
  const formData = new FormData(form);
  const formDataObject = {};
  // naplnění dat
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  // reset formuláře
  form.reset();

  // alert
  window.alert('Děkujeme ' + formDataObject['name'] + '!');
});