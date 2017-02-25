; "use strict";

(function sliderAnimation () {
  var blockWidth = document.querySelector(".quotationWidth").clientWidth,
  t1 = "translate3d(",
  t2 = "px, 0, 0)",
  btn1 = document.querySelector("#btn1"),
  btn2 = document.querySelector("#btn2"),
  btn3 = document.querySelector("#btn3"),
  btn4 = document.querySelector("#btn4"),
  btn5 = document.querySelector("#btn5"),
  sliderPosition = 0;

  document.querySelector("#btn1").onclick = function () {

    document.querySelector(".quotationWrapper").style.transform = "translate3d(0px, 0, 0)";

    btn1.style.backgroundColor = "#D50821";
    btn2.style.backgroundColor = "#E9E9E9";
    btn3.style.backgroundColor = "#E9E9E9";
    btn4.style.backgroundColor = "#E9E9E9";
    btn5.style.backgroundColor = "#E9E9E9";
     sliderPosition = 0;
  }, false;

  document.querySelector("#btn2").onclick = function () {
    shiftBlocks(1);
     sliderPosition = 1;
  }, false;

  document.querySelector("#btn3").onclick = function () {
    shiftBlocks(2);
     sliderPosition = 2;
  }, false;

  document.querySelector("#btn4").onclick = function () {
    shiftBlocks(3);
     sliderPosition = 3;
  }, false;

  document.querySelector("#btn5").onclick = function () {
    shiftBlocks(4);
     sliderPosition = 4;
  }, false;

  document.querySelector("#arrowLeft").onclick = function () {
    if (sliderPosition != 0) {
      shiftBlocks(sliderPosition - 1);
      sliderPosition = sliderPosition - 1;
    }
  }

  document.querySelector("#arrowRight").onclick = function () {
    if (sliderPosition != document.querySelectorAll(".quotation").length - 1) {
      shiftBlocks(sliderPosition + 1);
      sliderPosition = sliderPosition + 1;
    }
  }

  function shiftBlocks(times) {
    var a = "btn",
    c = ".style.backgroundColor = '#D50821'";

      document.querySelector(".quotationWrapper").style.transform = t1 + -blockWidth * times + t2;
      // document.querySelector(".quotationWrapper").style.msTransform = t1 + -blockWidth * times + t2;

      btn1.style.backgroundColor = "#E9E9E9";
      btn2.style.backgroundColor = "#E9E9E9";
      btn3.style.backgroundColor = "#E9E9E9";
      btn4.style.backgroundColor = "#E9E9E9";
      btn5.style.backgroundColor = "#E9E9E9";

      eval(a + (times + 1) + c);
  };

}());














// block.style.WebkitTransform = "translate3d(-287px, 0, 0)";
// document.querySelector(".headerForSmallDevices").style.msTransform = "translate3d(0, 325px, 0)";
// document.querySelector(".headerForSmallDevices").style.Transform = "translate3d(0, 325px, 0)";
// document.querySelector(".contentWrapper").style.WebkitTransform = "translate3d(0, 325px, 0)";
// document.querySelector(".contentWrapper").style.msTransform = "translate3d(0, 325px, 0)";
// document.querySelector(".contentWrapper").style.Transform = "translate3d(0, 325px, 0)";
