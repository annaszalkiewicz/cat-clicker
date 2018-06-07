'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var container = document.getElementById('container');
var catImages = document.getElementsByClassName('image');

var Cat = function () {
  function Cat() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var image = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    var count = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var container = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
    var clicks = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';

    _classCallCheck(this, Cat);

    this.id = id;
    this.name = name;
    this.image = image;
    this.count = count;
    this.container = container;
    this.clicks = clicks;
  }

  _createClass(Cat, [{
    key: 'createCatContainer',
    value: function createCatContainer() {

      var div = document.createElement('div');

      container.appendChild(div);
      div.classList.add('cat-container');
      div.setAttribute('id', this.container);
      this.giveName();
    }
  }, {
    key: 'giveName',
    value: function giveName() {

      var newHeading = document.createElement('h2');
      var catContainer = document.getElementById(this.container);

      catContainer.appendChild(newHeading);
      newHeading.classList.add('cat-name');
      newHeading.innerHTML = this.name;
      this.createImage();
    }
  }, {
    key: 'createImage',
    value: function createImage() {

      var img = document.createElement('img');
      var source = './img/' + this.image + '.jpg';
      var catContainer = document.getElementById(this.container);

      catContainer.appendChild(img);
      img.classList.add('image');
      img.setAttribute('src', source);
      img.setAttribute('alt', this.name);
      img.setAttribute('id', this.clicks);
      this.createCaption();
    }
  }, {
    key: 'createCaption',
    value: function createCaption() {

      var p = document.createElement('p');
      var catContainer = document.getElementById(this.container);
      var img = document.getElementsByTagName('img');

      catContainer.appendChild(p);
      p.classList.add('caption');

      this.clickerCount();
    }
  }, {
    key: 'clickerCount',
    value: function clickerCount() {

      var cats = document.getElementsByClassName('image');

      for (var i = 0; i < cats.length; i++) {
        var cat = cats[i];

        cat.addEventListener('click', function (catCopy) {
          var count = 0;
          return function () {
            var p = catCopy.nextElementSibling;
            count += 1;
            if (count === 1) {
              p.textContent = 'You clicked cat ' + count + ' time.';
            } else if (count >= 2) {
              p.textContent = 'You clicked cat ' + count + ' times.';
            }
          };
        }(cat));
      }
    }
  }]);

  return Cat;
}();

var cat1 = new Cat('Garfield', 'Garfield', 'garfield', 0, 'cat1', 'cat1Image');
var cat2 = new Cat('Nermal', 'Nermal', 'nermal', 0, 'cat2', 'cat2Image');
var cat3 = new Cat('Arlene', 'Arlene', 'arlene', 0, 'cat3', 'cat2Image');

cat1.createCatContainer();
cat2.createCatContainer();
cat3.createCatContainer();