; "use strict";

(function headerAnimation () {
  var headerStatus = 0,
  header = document.querySelector(".header"),
  headerTop = document.querySelector(".headerTop"),
  dropDownItems = document.querySelector(".dropDownItems");

  this.func = function () {console.log('hi')};

  document.querySelector(".mnuBtn").addEventListener('click', slide, false);

  function slide () {
    if (headerStatus == 0) {
      header.style.transform = "translate3d(0, 260px, 0)";
      headerTop.style.transform = "translate3d(0, -260px, 0)";
      
      // dropDownItems.style.display = "block";
      // document.querySelector(".headerForSmallDevices").style.msTransform = "translate3d(0, 325px, 0)";
      // document.querySelector(".headerForSmallDevices").style.Transform = "translate3d(0, 325px, 0)";
      // document.querySelector(".contentWrapper").style.WebkitTransform = "translate3d(0, 325px, 0)";
      // document.querySelector(".contentWrapper").style.msTransform = "translate3d(0, 325px, 0)";
      // document.querySelector(".contentWrapper").style.Transform = "translate3d(0, 325px, 0)";
      headerStatus = 1;
    } else {
      header.style.transform = "translate3d(0, 0, 0)";
      headerTop.style.transform = "translate3d(0, 0, 0)";
      // document.querySelector(".headerTop").style.height = "60px";
      // document.querySelector(".headerForSmallDevices").style.msTransform = "translate3d(0, 0, 0)";
      // document.querySelector(".headerForSmallDevices").style.Transform = "translate3d(0, 0, 0)";
      // document.querySelector(".contentWrapper").style.WebkitTransform = "translate3d(0, 0, 0)";
      // document.querySelector(".contentWrapper").style.msTransform = "translate3d(0, 0, 0)";
      // document.querySelector(".contentWrapper").style.Transform = "translate3d(0, 0, 0)";
      headerStatus = 0;
    };
  };


}());
