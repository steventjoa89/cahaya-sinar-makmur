/**
* PHP Email Form Validation - v3.1
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach( function(e) {
    e.addEventListener('submit', function(event) {
      event.preventDefault();

      let thisForm = this;
      let formData = new FormData( thisForm );

      // Write into text file inside folder
      let sentMessage = (folderLocation, fileName) => {
        try {
          thisForm.querySelector('.loading').classList.add('d-block');  
          console.log(`name: ${formData.get("name")}`);
          console.log(`email: ${formData.get("email")}`);
          console.log(`subject: ${formData.get("subject")}`);
          console.log(`message: ${formData.get("message")}`);

          // TODO - PARSING THE DATA
          throw 200

          // TODO SUCCESS
          displaySuccess(thisForm, 'Message successfully has been sent!')
        } catch (error) {
          displayError(thisForm, 'Error: Message cannot be sent at the moment. Please try again later.')
          console.error(error);
        }
      }
      
      let folderLocation = "./";
      let fileName = "12345.txt";
      sentMessage(folderLocation, fileName);
    });
  });

  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }

  function displaySuccess(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.sent-message').innerHTML = error;
    thisForm.querySelector('.sent-message').classList.add('d-block');
  }

})();
