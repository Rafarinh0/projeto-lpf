if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'main'.");
}var main = function (_, Kotlin) {
  'use strict';
  var toString = Kotlin.toString;
  var ensureNotNull = Kotlin.ensureNotNull;
  var takeLast = Kotlin.kotlin.text.takeLast_6ic1pp$;
  var equals = Kotlin.equals;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var throwCCE = Kotlin.throwCCE;
  function run() {
    disable();
  }
  function insert(num) {
    var tmp$, tmp$_0, tmp$_1;
    var numero = (tmp$ = document.getElementById('output')) != null ? tmp$.innerHTML : null;
    (tmp$_0 = document.getElementById('output')) != null ? (tmp$_0.innerHTML = numero + toString(num)) : null;
    if (equals(takeLast(ensureNotNull(numero), 2), '//') || equals(takeLast(numero, 3), '***') || equals(takeLast(numero, 2), '++') || equals(takeLast(numero, 2), '/*') || equals(takeLast(numero, 2), '*/') || equals(takeLast(numero, 2), '+/') || equals(takeLast(numero, 2), '/+') || equals(takeLast(numero, 2), '-/') || equals(takeLast(numero, 2), '-+')) {
      disable();
      var tmp$_2 = ensureNotNull(document.getElementById('output'));
      var endIndex = numero.length - 1 | 0;
      tmp$_2.innerHTML = numero.substring(0, endIndex);
    } else if (equals(takeLast(numero, 2), '--')) {
      disableMinus();
      var tmp$_3 = ensureNotNull(document.getElementById('output'));
      var endIndex_0 = numero.length - 1 | 0;
      tmp$_3.innerHTML = numero.substring(0, endIndex_0);
    } else {
      enable();
      enableMinus();
      (tmp$_1 = document.getElementById('output')) != null ? (tmp$_1.innerHTML = numero + num) : null;
    }
  }
  function calculate() {
    var tmp$, tmp$_0;
    var result = (tmp$ = document.getElementById('output')) != null ? tmp$.innerHTML : null;
    if (result != null) {
      try {
        (tmp$_0 = document.getElementById('output')) != null ? (tmp$_0.innerHTML = eval(result)) : null;
      } catch (err) {
        enable();
        enableMinus();
        println('Entrada invalida!');
      }
    }run();
  }
  function back() {
    var resultado = ensureNotNull(document.getElementById('output')).innerHTML;
    var tmp$ = ensureNotNull(document.getElementById('output'));
    var endIndex = resultado.length - 1 | 0;
    tmp$.innerHTML = resultado.substring(0, endIndex);
    if (resultado.length === 0) {
      run();
    } else {
      enable();
      enableMinus();
    }
  }
  function clear() {
    ensureNotNull(document.getElementById('output')).innerHTML = '';
    enableMinus();
    run();
  }
  function disable() {
    var tmp$, tmp$_0, tmp$_1;
    var btn1 = Kotlin.isType(tmp$ = document.getElementById('btn1'), HTMLButtonElement) ? tmp$ : throwCCE();
    btn1.disabled = true;
    var btn2 = Kotlin.isType(tmp$_0 = document.getElementById('btn2'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    btn2.disabled = true;
    var btn4 = Kotlin.isType(tmp$_1 = document.getElementById('btn4'), HTMLButtonElement) ? tmp$_1 : throwCCE();
    btn4.disabled = true;
  }
  function enable() {
    var tmp$, tmp$_0, tmp$_1;
    var btn1 = Kotlin.isType(tmp$ = document.getElementById('btn1'), HTMLButtonElement) ? tmp$ : throwCCE();
    btn1.disabled = false;
    var btn2 = Kotlin.isType(tmp$_0 = document.getElementById('btn2'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    btn2.disabled = false;
    var btn4 = Kotlin.isType(tmp$_1 = document.getElementById('btn4'), HTMLButtonElement) ? tmp$_1 : throwCCE();
    btn4.disabled = false;
  }
  function disableMinus() {
    var tmp$;
    var btn3 = Kotlin.isType(tmp$ = document.getElementById('btn3'), HTMLButtonElement) ? tmp$ : throwCCE();
    btn3.disabled = true;
  }
  function enableMinus() {
    var tmp$;
    var btn3 = Kotlin.isType(tmp$ = document.getElementById('btn3'), HTMLButtonElement) ? tmp$ : throwCCE();
    btn3.disabled = false;
  }
  _.run = run;
  _.insert = insert;
  _.calculate = calculate;
  _.back = back;
  _.clear = clear;
  _.disable = disable;
  _.enable = enable;
  _.disableMinus = disableMinus;
  _.enableMinus = enableMinus;
  Kotlin.defineModule('main', _);
  return _;
}(typeof main === 'undefined' ? {} : main, kotlin);
