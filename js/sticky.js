; "use strict";

//refreshes page whenever its width is changed

(function () {
	var screenSize = document.body.clientWidth + 17, currentSize, landingViewOld, landingViewNew;
	if (screenSize < 700) {
		landingViewOld = "small";
	} else if (screenSize > 700 && screenSize < 1365) {
		landingViewOld = "medium";
	} else if (screenSize > 1365) {
		landingViewOld = "large";
	}

	console.log(screenSize);

  window.addEventListener('resize', function() {
	  if (window.RT) clearTimeout(window.RT);
	  window.RT = setTimeout(function() {
			currentSize = document.body.clientWidth;
			if (currentSize < 700) {
				landingViewNew = "small";
			} else if (currentSize > 700 && currentSize < 1365) {
				landingViewNew = "medium";
			} else if (currentSize > 1365) {
				landingViewNew = "large";
			}
			if (landingViewOld != landingViewNew) {
				this.location.reload(false); /* false to get page from cache */
			};
			landingViewOld = landingViewNew;
	  }, 100);
	});
})();

(function(){  // анонимная функция (function(){ })(), чтобы переменные "a" и "b" не стали глобальными
  if (document.body.clientWidth > 700) {
    var a = document.querySelector('#aside1'), b = null, c = document.querySelector('.onTop768px');  // селектор блока, который нужно закрепить
    window.addEventListener('scroll', Ascroll, false);
    document.body.addEventListener('scroll', Ascroll, false);  // если у html и body высота равна 100%
    function Ascroll() {
      if (b == null) {  // добавить потомка-обёртку, чтобы убрать зависимость с соседями
        var Sa = getComputedStyle(a, ''), s = '';
        for (var i = 0; i < Sa.length; i++) {  // перечислить стили CSS, которые нужно скопировать с родителя
          if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
            s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
          }
        }
        b = document.createElement('div');  // создать потомка
        // b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
        b.style.cssText = s + ' box-sizing: border-box; width: 100%;';

        a.insertBefore(b, a.firstChild);  // поместить потомка в цепляющийся блок
        var l = a.childNodes.length;
        for (var i = 1; i < l; i++) {  // переместить во вновь созданного потомка всех остальных потомков плавающего блока (итого: создан потомок-обёртка)
          b.appendChild(a.childNodes[1]);
        }
        a.style.height = b.getBoundingClientRect().height + 'px';  // если под скользящим элементом есть другие блоки, можно своё значение
        //   a.style.height = 'auto'; //своё значение
        a.style.padding = '0';
        a.style.border = '0';  // если элементу присвоен padding или border
      }

      if (true) {
        var screenSize = document.body.clientWidth + 17;
        
      	if (screenSize > 700 && screenSize < 1365) {
          var marginTop = -63;
      	} else if (screenSize > 1366) {
      		 marginTop = 0;
      	} else if (screenSize < 699) {
      		marginTop = 0;
      	}
      };

      if (a.getBoundingClientRect().top <= marginTop) { // elem.getBoundingClientRect() возвращает в px координаты элемента относительно верхнего левого угла области просмотра окна браузера
        b.className = 'sticky';
      } else {
        b.className = '';
      }
      window.addEventListener('resize', function() {
        a.children[0].style.width = getComputedStyle(a, '').width
        a.style.height = b.getBoundingClientRect().height + 'px';  // если под скользящим элементом есть другие блоки, можно своё значение

      }, false);  // если изменить размер окна браузера, измениться ширина элемента
    }
  }
})()
