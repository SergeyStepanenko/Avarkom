; "use strict";



(function sliderAnimation () {
  var block = document.querySelectorAll(".quotation"),
  // blockWidth = window.getComputedStyle(block, null).getPropertyValue("width"),
  btn1 = document.querySelector("#btn1"),
  btn2 = document.querySelector("#btn2"),
  btn3 = document.querySelector("#btn3"),
  btn4 = document.querySelector("#btn4"),
  btn5 = document.querySelector("#btn5");

  document.querySelector("#btn1").onclick = function () {
    for (var i = 0; i < block.length; i++) {
      document.querySelectorAll(".quotation")[i].style.transform = "translate3d(0px, 0, 0)";
      btn1.style.backgroundColor = "#D50821";
      btn2.style.backgroundColor = "#E9E9E9";
      btn3.style.backgroundColor = "#E9E9E9";
      btn4.style.backgroundColor = "#E9E9E9";
      btn5.style.backgroundColor = "#E9E9E9";
    }
  }, false;

  document.querySelector("#btn2").onclick = function () {
    for (var i = 0; i < block.length; i++) {
      document.querySelectorAll(".quotation")[i].style.transform = "translate3d(-287px, 0, 0)";
      btn1.style.backgroundColor = "#E9E9E9";
      btn2.style.backgroundColor = "#D50821";
      btn3.style.backgroundColor = "#E9E9E9";
      btn4.style.backgroundColor = "#E9E9E9";
      btn5.style.backgroundColor = "#E9E9E9";
    }
  }, false;

  document.querySelector("#btn3").onclick = function () {
    for (var i = 0; i < block.length; i++) {
      document.querySelectorAll(".quotation")[i].style.transform = "translate3d(-574px, 0, 0)";
      btn1.style.backgroundColor = "#E9E9E9";
      btn2.style.backgroundColor = "#E9E9E9";
      btn3.style.backgroundColor = "#D50821";
      btn4.style.backgroundColor = "#E9E9E9";
      btn5.style.backgroundColor = "#E9E9E9";
    }
  }, false;

  document.querySelector("#btn4").onclick = function () {
    for (var i = 0; i < block.length; i++) {
      document.querySelectorAll(".quotation")[i].style.transform = "translate3d(-861px, 0, 0)";
      btn1.style.backgroundColor = "#E9E9E9";
      btn2.style.backgroundColor = "#E9E9E9";
      btn3.style.backgroundColor = "#E9E9E9";
      btn4.style.backgroundColor = "#D50821";
      btn5.style.backgroundColor = "#E9E9E9";
    }
  }, false;

  document.querySelector("#btn5").onclick = function () {
    for (var i = 0; i < block.length; i++) {
      document.querySelectorAll(".quotation")[i].style.transform = "translate3d(-1148px, 0, 0)";
      btn1.style.backgroundColor = "#E9E9E9";
      btn2.style.backgroundColor = "#E9E9E9";
      btn3.style.backgroundColor = "#E9E9E9";
      btn4.style.backgroundColor = "#E9E9E9";
      btn5.style.backgroundColor = "#D50821";
    }
  }, false;


}());




















// block.style.WebkitTransform = "translate3d(-287px, 0, 0)";
// document.querySelector(".headerForSmallDevices").style.msTransform = "translate3d(0, 325px, 0)";
// document.querySelector(".headerForSmallDevices").style.Transform = "translate3d(0, 325px, 0)";
// document.querySelector(".contentWrapper").style.WebkitTransform = "translate3d(0, 325px, 0)";
// document.querySelector(".contentWrapper").style.msTransform = "translate3d(0, 325px, 0)";
// document.querySelector(".contentWrapper").style.Transform = "translate3d(0, 325px, 0)";
