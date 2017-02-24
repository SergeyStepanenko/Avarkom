; "use strict";

(function sliderAnimation () {
  var block = document.querySelectorAll(".quotation"),
  singleBlock = document.querySelector(".quotation"),
  blockWidth = window.getComputedStyle(singleBlock, null).getPropertyValue("width").replace(/[a-z]/g, ""),
  blockMargin = window.getComputedStyle(singleBlock, null).getPropertyValue("margin").split(" ").pop().replace(/[a-z]/g, "") * 2,
  blockRealWidth = +blockWidth + +blockMargin,
  t1 = "translate3d(",
  t2 = "px, 0, 0)",
  btn1 = document.querySelector("#btn1"),
  btn2 = document.querySelector("#btn2"),
  btn3 = document.querySelector("#btn3"),
  btn4 = document.querySelector("#btn4"),
  btn5 = document.querySelector("#btn5");



  document.querySelector("#btn1").onclick = function () {
    for (var i = 0; i < block.length; i++) {
      document.querySelectorAll(".quotation")[i].style.transform = "translate3d(0px, 0, 0)";
    }
    btn1.style.backgroundColor = "#D50821";
    btn2.style.backgroundColor = "#E9E9E9";
    btn3.style.backgroundColor = "#E9E9E9";
    btn4.style.backgroundColor = "#E9E9E9";
    btn5.style.backgroundColor = "#E9E9E9";
  }, false;

  document.querySelector("#btn2").onclick = function () {
    for (var i = 0; i < block.length; i++) {
      shiftBlocks(1);
    }
    btn2.style.backgroundColor = "#D50821";
  }, false;

  document.querySelector("#btn3").onclick = function () {
    for (var i = 0; i < block.length; i++) {
      shiftBlocks(2);
    }
    btn3.style.backgroundColor = "#D50821";
  }, false;

  document.querySelector("#btn4").onclick = function () {
    shiftBlocks(3);
    btn4.style.backgroundColor = "#D50821";
  }, false;

  document.querySelector("#btn5").onclick = function () {
    shiftBlocks(4);
    btn5.style.backgroundColor = "#D50821";
  }, false;



  function shiftBlocks(times) {
    for (var i = 0; i < block.length; i++) {
      document.querySelectorAll(".quotation")[i].style.transform = t1 + -blockRealWidth * times + t2;
    };

    for (var i = 0; i < block.length; i++) {
      btn1.style.backgroundColor = "#E9E9E9";
      btn2.style.backgroundColor = "#E9E9E9";
      btn3.style.backgroundColor = "#E9E9E9";
      btn4.style.backgroundColor = "#E9E9E9";
      btn5.style.backgroundColor = "#E9E9E9";
    };
  };

}());














// block.style.WebkitTransform = "translate3d(-287px, 0, 0)";
// document.querySelector(".headerForSmallDevices").style.msTransform = "translate3d(0, 325px, 0)";
// document.querySelector(".headerForSmallDevices").style.Transform = "translate3d(0, 325px, 0)";
// document.querySelector(".contentWrapper").style.WebkitTransform = "translate3d(0, 325px, 0)";
// document.querySelector(".contentWrapper").style.msTransform = "translate3d(0, 325px, 0)";
// document.querySelector(".contentWrapper").style.Transform = "translate3d(0, 325px, 0)";
