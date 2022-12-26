"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Player =
/*#__PURE__*/
function () {
  function Player(x, y, angle) {
    _classCallCheck(this, Player);

    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 400;
    this.angle = angle;
    this.image = loadImage("assets/player.png");
  }

  _createClass(Player, [{
    key: "display",
    value: function display() {
      imageMode(CENTER);
      image(this.image, 300, 350, this.width, this.height);
    }
  }]);

  return Player;
}();