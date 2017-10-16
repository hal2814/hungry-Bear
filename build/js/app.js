(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HungryBear = exports.HungryBear = function () {
  //constructor holds the class variables used in class functions
  function HungryBear(name) {
    _classCallCheck(this, HungryBear);

    this.name = name;
    this.foodLevel = 10;
    this.moodLevel = 10;
    this.sleepLevel = 10;
    this.timer = 0;
  }

  _createClass(HungryBear, [{
    key: "masterTimer",
    value: function masterTimer() {
      if (this.foodLevel > 0) {
        --this.foodLevel;
      } else if (this.moodLevel > 0) {
        --this.moodLevel;
      }
    }
  }, {
    key: "setHunger",
    value: function setHunger(difficulty) {
      var _this = this;

      if (difficulty === 1) {
        this.timer = setInterval(function () {
          _this.masterTimer();
        }, 1000);
      }
      if (difficulty === 2) {
        this.timer = setInterval(function () {
          _this.masterTimer();
        }, 500);
      }
    }
  }, {
    key: "stopTimer",
    value: function stopTimer() {
      clearInterval(this.timer);
    }

    // setMood() {
    //   if(this.foodLevel <= 0){
    //     this.timer = setInterval(() => {
    //       this.moodLevel--;
    //     }, 1000);
    //   }
    // }

  }, {
    key: "didYouGetEaten",
    value: function didYouGetEaten() {
      if (this.foodLevel > 0) {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: "feed",
    value: function feed(food) {
      if (this.didYouGetEaten()) {
        return false;
      } else {
        this.foodLevel = food;
        return true;
      }
    }
  }]);

  return HungryBear;
}();

var Food = exports.Food = function Food() {
  _classCallCheck(this, Food);

  this.apple = 2;
  this.salmon = 10;
  this.berries = 3;
};

// let bear = new Object;
// bear.name = "Fuzzy Wuzzy";
//
// bear.introduction = function() {
//   console.log("Name in the outer function: " + this.name);
//   let doThis = () => {
//     console.log("Name in the inner function: " + this.name);
//     return `My name is ${this.name}`
//   }
//   return doThis()
// }
// bear.introduction();

},{}],2:[function(require,module,exports){
"use strict";

var _hungrybear = require("./../js/hungrybear.js");

$(document).ready(function () {
  // $('#bear-form').submit(function(event) {
  //   event.preventDefault();
  // });
  var theBear = new _hungrybear.HungryBear("Bucko the Bear");
  theBear.setHunger(1);
  setInterval(function () {
    console.log("food: " + theBear.foodLevel);
    console.log("mood: " + theBear.moodLevel);
    $('#output').text(theBear.foodLevel);
    if (theBear.foodLevel === 0) {
      $('#angry').show();
      $('#calm').hide();
    }
    if (theBear.moodLevel === 0) {
      $('#ate').show();
      $('#angry').hide();
    }
  });
});

},{"./../js/hungrybear.js":1}]},{},[2]);
