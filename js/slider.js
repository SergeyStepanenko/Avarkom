; "use strict";

(function sliderAnimation () {
  this.blockWidth = document.querySelector(".quotationWidth").clientWidth,
  t1 = "translate3d(",
  t2 = "px, 0, 0)",
  sliderPosition = 1;

  var navigation = document.querySelector(".navigation");
  navigation.addEventListener("click", handleEvent, false);

  function handleEvent(e) {
      if (e.target !== e.currentTarget) {
          sliderPosition = e.target.id.replace(/[a-z]/g, "");
          shiftBlocks(+sliderPosition);
      }
      e.stopPropagation();
  }
  function shiftBlocks(times) {
    var a = "btn",
    c = ".style.backgroundColor = '#D50821'";

    document.querySelector(".quotationWrapper").style.transform = t1 + -this.blockWidth * (+times - 1) + t2;

    for (var i = 0; i < document.querySelectorAll(".btn").length; i++) {
      document.querySelectorAll(".btn")[i].style.backgroundColor = "#E9E9E9";
    }

    eval(a + times + c);
  };

  document.querySelector("#arrowLeft").addEventListener("click", toLeft, false);

  function toLeft() {
    if (document.body.clientWidth > 1366) {
      if (sliderPosition != 1) {
        sliderPosition = +sliderPosition - 2;
        shiftBlocks(sliderPosition);
      } else {
        sliderPosition = document.querySelectorAll(".quotation").length - 2;
        shiftBlocks(sliderPosition);
      };
    } else {
      if (sliderPosition != 1) {
        sliderPosition = +sliderPosition - 1;
        shiftBlocks(sliderPosition);
      } else {
        sliderPosition = document.querySelectorAll(".quotation").length;
        shiftBlocks(sliderPosition);
      };
    };
  };

  document.querySelector("#arrowRight").addEventListener("click", toRight, false);

  function toRight() {
    if (document.body.clientWidth > 1366) {
      if (sliderPosition != document.querySelectorAll(".quotation").length - 2) {
        sliderPosition = +sliderPosition + 2;
        shiftBlocks(sliderPosition);
      } else {
        sliderPosition = 1;
        shiftBlocks(sliderPosition);
      };
    } else {
      if (sliderPosition != document.querySelectorAll(".quotation").length) {
        sliderPosition = +sliderPosition + 1;
        shiftBlocks(sliderPosition);
      } else {
        sliderPosition = 1;
        shiftBlocks(sliderPosition);
      };
    };
  };


  var initialPoint,
  finalPoint,
  quotationWrapper = document.querySelector(".quotationWrapper");

  quotationWrapper.addEventListener('touchstart', function(event) {
    event.preventDefault();
    event.stopPropagation();

    initialPoint = event.changedTouches[0];
  }, false);

  quotationWrapper.addEventListener('touchend', function(event) {
    event.preventDefault();
    event.stopPropagation();

    finalPoint = event.changedTouches[0];
    var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);

    if (xAbs > 20) {
        finalPoint.pageX < initialPoint.pageX ? toRight() : toLeft();
    }
  }, false);

}());
