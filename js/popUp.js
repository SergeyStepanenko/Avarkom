; "use strict";

(function popUp () {
  var div = document.createElement('div'),
  body = document.querySelector("body"),
  popUpCover,
  closeButton2;

  div.className = "popUpWrapper";
  div.innerHTML = "\
  		<div class = 'popUpContainer'>\
  				<a class = 'closeButton'>x</a>\
  					<div class = 'popUpContainerInner'>\
  						<div class = 'callMePopUp'>Перезвоните мне</div>\
  						<div class = 'popUpText'>Введите свое имя и номер телефона и мы сразу же перезвоним</div>\
  						<div class = 'form'>\
  							<form action='' id='myForm' method>\
                  <input class='inputName' name='name' value='Введите ваше имя'>\
  								<input class='inputPhoneNumber' name='phone' value='+7 (___) ___-__-__'>\
  								<input class='submitData' onsubmit='yaCounter43150839.reachGoal(\"sendtrue\"); return true;' type='submit' value='Отправить' >\
  							</form>\
  		        </div>\
  		      </div>\
  		    </div>";

  document.querySelector('.callBeBackBtn').addEventListener('click', appendChild, false);
  document.querySelectorAll('.callMe')[0].addEventListener('click', appendChild, false);
  document.querySelectorAll('.callMe')[1].addEventListener('click', appendChild, false);

  function appendChild () {
    body.appendChild(div);
    function append () {
      body.appendChild(div);
      $("#myForm").submit(function(){
        var error = "";

        error += $(this).yaproField("phone", "p", "телефон введен неправильно");

        return false;
      });

      fieldPhone("[name=phone]"); //форматирование номера
    };

    setTimeout(append, 1);


    closeButton = document.querySelector('.closeButton');

    closeButton.addEventListener('click', closePopUp, false);

    overlay = document.querySelector('.contentWrapper');
    setTimeout(function addEventListener () {overlay.addEventListener('click', closePopUp, false)}, 1);

    document.querySelector('.inputName').addEventListener('click', resetStyleName, false);
    document.querySelector('.inputPhoneNumber').addEventListener('click', resetStylePhone, false);

    document.querySelector('.submitData').onclick = function () {
      var customerName = document.querySelector('.inputName').value;
      var customerPhone = document.querySelector('.inputPhoneNumber').value;

      if (customerPhone.length > 9 && customerPhone != '+7 (___) ___-__-__') {
        customerPhone = "+"+ customerPhone.replace(/\D+/g,'');
        console.log("customerName " + customerName);
        console.log("customerPhone " + customerPhone);

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

        body.appendChild(popUpCover);
        closeButton2 = document.querySelector('.closeButton2');
        setTimeout(function addEventListener () {closeButton2.addEventListener('click', closePopUp, false)}, 1);
      } else {
        function shakeInputBlock() {
          //add Effect Here
        }
      }
    };
  };

  function closePopUp () {
    div != undefined ? body.removeChild(div) : "";
    popUpCover != undefined ? body.removeChild(popUpCover) : "";

    closeButton.removeEventListener('click', closePopUp, false);
    overlay.removeEventListener('click', closePopUp, false);

  };

  function resetStyleName () {
    if (document.querySelector('.inputName').value == 'Введите ваше имя') {
      document.querySelector('.inputName').value = "";
    };

    document.querySelector('.inputName').style.color = "black";
  };
  function resetStylePhone () {
    if (document.querySelector('.inputPhoneNumber').value == '+7 (___) ___-__-__') {
      document.querySelector('.inputPhoneNumber').value = "";
      document.querySelector('.inputPhoneNumber').style.color = "black";
    };
  };
}());
