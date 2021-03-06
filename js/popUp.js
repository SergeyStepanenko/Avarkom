; "use strict";

(function popUp () {
  var div = document.createElement('div'),
     body = document.querySelector("body"),
    overlayPopUp = document.createElement('div'),
  popUpCover,
  closeButton2;

  overlayPopUp.className = "overlayPopUp";

  div.className = "popUpWrapper";
  div.innerHTML = "\
  		<div class = 'popUpContainer'>\
  				<a class = 'closeButton'>x</a>\
  					<div class = 'popUpContainerInner'>\
  						<div class = 'callMePopUp'>Перезвоните мне</div>\
  						<div class = 'popUpText'>Введите свое имя и номер телефона и мы сразу же перезвоним</div>\
  						<div class = 'form'>\
  							<form action='mail/index.php' id='myForm' method='post'>\
                  <input class='inputName' name='name' placeholder='Введите ваше имя' value=''>\
  								<input class='inputPhoneNumber' placeholder='Ваш телефон' name='phone' value=''>\
  								<input class='submitData' onsubmit='yaCounter43150839.reachGoal(\"sendtrue\"); return true;' type='submit' value='Отправить' >\
  							</form>\
  		        </div>\
  		      </div>\
  		    </div>";

  document.querySelector('.callBeBackBtn').addEventListener('click', appendChild, false);
  document.querySelectorAll('.callMe')[0].addEventListener('click', appendChild, false);
  document.querySelectorAll('.callMe')[1].addEventListener('click', appendChild, false);

  function appendChild () {
    body.appendChild(overlayPopUp);
    body.appendChild(div);
    body.style.overflow = "hidden";

    function append () {
      body.appendChild(div);
      $("#myForm").submit(function(){
        var error = "";

        error += $(this).yaproField("phone", "p", "телефон введен неправильно");

        var data = $("#myForm").serialize();

        $.ajax({
          type: "POST",
          url: 'mail/index.php',
          data: data,
          success: function() {
            // показать окно об успешной отправке и закрыть после
            body.appendChild(popUpCover);
            closeButton2 = document.querySelector('.closeButton2');
            setTimeout(function addEventListener () {closeButton2.addEventListener('click', closePopUp, false)}, 1);
          },
        });

        return false;
      });

      fieldPhone("[name=phone]"); //форматирование номера
    };

    setTimeout(append, 1);

    closeButton = document.querySelector('.closeButton');
    closeButton.addEventListener('click', closePopUp, false);

    overlay = document.querySelector('.overlayPopUp');
    setTimeout(function addEventListener () {overlay.addEventListener('click', closePopUp, false)}, 1);

    document.querySelector('.inputName').addEventListener('click', resetStyleName, false);
    document.querySelector('.inputPhoneNumber').addEventListener('onmouseover', resetStylePhone, false);

    document.querySelector('.submitData').onclick = function () {
      var customerName = document.querySelector('.inputName').value;
      var customerPhone = document.querySelector('.inputPhoneNumber').value;

      if (customerPhone.length > 9 && customerPhone != '+7 (___) ___-__-__') {
        customerPhone = "+" + customerPhone.replace(/\D+/g,'');
        customerName == "Введите ваше имя" ? customerName = "" : customerName;

        var now = new Date();

        function writeUserData(name, phone) {
          firebase.database().ref('callers/' + now).set({
            username: name,
            phone: phone,
          });
        }

        writeUserData(customerName, customerPhone); //отправляем данные в базу firebase

        popUpCover = document.createElement('div');

        popUpCover.className = "popUpWrapper";
        popUpCover.innerHTML = "\
            <div class = 'popUpContainer'>\
                <a class = 'closeButton2'>x</a>\
                  <div class = 'popUpContainerInner'>\
                    <div class = 'callMePopUpCover'>Ваша заявка принята</div>\
                    <div class = 'popUpText'>Уже набираем ваш номер!</div>\
                    </div>\
                  </div>\
                </div>";


      };
    };
  };

  function closePopUp () {
    div != undefined ? body.removeChild(div) : "";
    popUpCover != undefined ? body.removeChild(popUpCover) : "";
    overlayPopUp != undefined ? body.removeChild(overlayPopUp) : "";

    closeButton.removeEventListener('click', closePopUp, false);
    overlay.removeEventListener('click', closePopUp, false);

    body.style.overflow = "auto";
  };

  function resetStyleName () {
    if (document.querySelector('.inputName').value == 'Введите ваше имя') {
      document.querySelector('.inputName').value = "";
    };

    document.querySelector('.inputName').style.color = "black";
  };
  function resetStylePhone () {
    console.log("focus");
    if (document.querySelector('.inputPhoneNumber').value == '+7 (___) ___-__-__') {
      document.querySelector('.inputPhoneNumber').value = "";
      document.querySelector('.inputPhoneNumber').style.color = "black";
    };
  };
}());
