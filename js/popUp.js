; "use strict";

(function popUp () {
  var div = document.createElement('div'),
  body = document.querySelector("body"),
  closeButton,
  overlay;

  div.className = "popUpWrapper";
  div.innerHTML = "\
      <div class = 'popUpContainer'>\
      <a class = 'closeButton'>x</a>\
        <div class = 'popUpContainerInner'>\
          <div class = 'callMePopUp'>Перезвоните мне</div>\
          <div class = 'popUpText'>Введите свое имя и номер телефона и мы сразу же перезвоним</div>\
          <div class = 'form'>\
            <form action='/action_page.php'>\
              <input class = 'inputName' type='text' name='name' value = 'Введите ваше имя'>\
              <input class = 'inputPhoneNumber' type='text' name='lname' value = '+7 (___) ___-__-__'>\
              <input class = 'submitData' type='submit' value='Жду звонка!'>\
            </form>\
          </div>\
        </div>\
      </div>";


  document.querySelector('.callBeBackBtn').addEventListener('click', appendChild, false);
  document.querySelectorAll('.callMe')[0].addEventListener('click', appendChild, false);
  document.querySelectorAll('.callMe')[1].addEventListener('click', appendChild, false);

  function appendChild () {
    body.appendChild(div);

    closeButton = document.querySelector('.closeButton');
    closeButton.addEventListener('click', closePopUp, false);
    overlay = document.querySelector('.content_1');
    setTimeout(function addEventListener () {overlay.addEventListener('click', closePopUp, false)}, 1000);
  };

  function closePopUp () {
    body.removeChild(div);
    closeButton.removeEventListener('click', closePopUp, false);
    overlay.removeEventListener('click', closePopUp, false);
  };

}());
