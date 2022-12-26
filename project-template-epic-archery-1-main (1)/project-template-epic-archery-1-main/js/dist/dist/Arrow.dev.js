"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Aroor =
/*#__PURE__*/
function () {
  function Aroor(x, y, width, height, angle) {
    _classCallCheck(this, Aroor);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.image = loadImage("assets/archery-arrow-png-black-13.png");
  }

  _createClass(Aroor, [{
    key: "display",
    value: function display() {
      if (keyIsDown(UP_ARROW) && this.angle > -0.5453981633974481) {
        this.angle -= 0.02;
      }

      if (keyIsDown(DOWN_ARROW) && this.angle < 0.100) {
        this.angle += 0.04;
      }

      push();
      translate(this.x, this.y);
      rotate(this.angle);
      console.log(this.angle);
      imageMode(CENTER);
      image(this.image, 150, 50, 100, 200);
      pop();
    }
  }]);

  return Aroor;
}();