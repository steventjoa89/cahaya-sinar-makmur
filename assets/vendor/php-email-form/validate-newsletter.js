/**
* PHP Email Form Validation - v3.1
* Author: Steven Tjoa Tanudjaja
*/

(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-newsletter-form');

  forms.forEach( function(e) {
    e.addEventListener('submit', function(event) {
      event.preventDefault();

      console.log("DOne,,,")

      let thisForm = this;
      
      var action = thisForm.getAttribute('action');
      
      if( ! action ) {
        displayError(thisForm, 'The form action property is not set!')
        return;
      }
      // thisForm.querySelector('.loading').classList.add('d-block');
      // thisForm.querySelector('.error-message').classList.remove('d-block');
      // thisForm.querySelector('.sent-message').classList.remove('d-block');

      let formData = new FormData( thisForm );

      php_email_form_submit(thisForm, action, formData);
    });
  });

  function php_email_form_submit(thisForm, action, formData) {
    fetch(action, {
      method: 'POST',
      body: formData,
      headers: {'X-Requested-With': 'XMLHttpRequest'}
    })
    .then(response => {
      // console.log(response);
      // if( response.ok ) {
      //   return response.text()
      // } else {
      //   throw new Error(`${response.status} ${response.statusText} ${response.url}`); 
      // }
    })
    .then(data => {
      hideNewsLetter();
      
    })
    .catch((error) => {
      hideNewsLetter();
    });
  }

  function hideNewsLetter(){
    document.getElementById("join-newsletter").innerHTML = "Thank You!";
    document.getElementById("join-newsletter-form").style.display = "none";
  }
})();
