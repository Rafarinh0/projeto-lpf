if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'main'.");
}var main = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main() {
    var firstoutput = document.querySelector('.first-output');
    var secondoutput = document.querySelector('.second-output');
    var btns = document.querySelectorAll('.btn');
    var equal = document.querySelector('.equal');
    var clear = document.querySelector('.clear');
    var clearEntry = document.querySelector('.clear-entry');
    println(btns);
  }
  _.main = main;
  main();
  Kotlin.defineModule('main', _);
  return _;
}(typeof main === 'undefined' ? {} : main, kotlin);
