if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'main'.");
}var main = function (_, Kotlin) {
  'use strict';
  var toString = Kotlin.toString;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function insert(num) {
    var tmp$, tmp$_0;
    var numero = (tmp$ = document.getElementById('output')) != null ? tmp$.innerHTML : null;
    (tmp$_0 = document.getElementById('output')) != null ? (tmp$_0.innerHTML = numero + toString(num)) : null;
  }
  function clear() {
    var tmp$;
    (tmp$ = document.getElementById('output')) != null ? (tmp$.innerHTML = '') : null;
  }
  function back() {
    var tmp$, tmp$_0;
    var output = (tmp$ = document.getElementById('output')) != null ? tmp$.innerHTML : null;
    if (output != null) {
      if ((tmp$_0 = document.getElementById('output')) != null) {
        var endIndex = output.length - 1 | 0;
        tmp$_0.innerHTML = output.substring(0, endIndex);
      }}}
  function calculate() {
    var tmp$, tmp$_0;
    var result = (tmp$ = document.getElementById('output')) != null ? tmp$.innerHTML : null;
    if (result != null) {
      try {
        (tmp$_0 = document.getElementById('output')) != null ? (tmp$_0.innerHTML = eval(result)) : null;
      } catch (err) {
        clear();
        println('Entrada invalida!');
      }
    }}
  _.insert = insert;
  _.clear = clear;
  _.back = back;
  _.calculate = calculate;
  Kotlin.defineModule('main', _);
  return _;
}(typeof main === 'undefined' ? {} : main, kotlin);
