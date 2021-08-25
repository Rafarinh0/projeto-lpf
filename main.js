if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'main'.");
}var main = function (_, Kotlin) {
  'use strict';
  var ensureNotNull = Kotlin.ensureNotNull;
  var takeLast = Kotlin.kotlin.text.takeLast_6ic1pp$;
  var equals = Kotlin.equals;
  var toString = Kotlin.toString;
  var throwCCE = Kotlin.throwCCE;
  function run() {
    disable();
    disableDecimal();
  }
  function check() {
    var tmp$;
    var num = (tmp$ = document.getElementById('output')) != null ? tmp$.innerHTML : null;
    if ((num != null ? num.length : null) === 0) {
      disable();
    } else {
      enable();
    }
  }
  function checkOp() {
    var tmp$;
    var numero = (tmp$ = document.getElementById('output')) != null ? tmp$.innerHTML : null;
    if (equals(takeLast(ensureNotNull(numero), 1), '/') || equals(takeLast(numero, 1), '+') || equals(takeLast(numero, 1), '*')) {
      disable();
      disableDecimal();
    } else if (equals(takeLast(numero, 1), '-')) {
      disable();
      disableDecimal();
      disableMinus();
    } else if (equals(takeLast(numero, 2), '/-') || equals(takeLast(numero, 1), '.')) {
      disable();
      disableMinus();
      disableDecimal();
    } else {
      enable();
      enableMinus();
      enableDecimal();
    }
  }
  function insert(num) {
    var tmp$, tmp$_0;
    var numero = (tmp$ = document.getElementById('output')) != null ? tmp$.innerHTML : null;
    (tmp$_0 = document.getElementById('output')) != null ? (tmp$_0.innerHTML = numero + toString(num)) : null;
    checkOp();
  }
  function calculate() {
    var tmp$, tmp$_0;
    var result = (tmp$ = document.getElementById('output')) != null ? tmp$.innerHTML : null;
    if (result != null) {
      try {
        (tmp$_0 = document.getElementById('output')) != null ? (tmp$_0.innerHTML = eval(result)) : null;
        enableMinus();
        enable();
        disableDecimal();
        checkOp();
      } catch (err) {
        window.alert('Erro: Entrada inv\xE1lida!');
      }
    }}
  function back() {
    var result = ensureNotNull(document.getElementById('output')).innerHTML;
    var tmp$ = ensureNotNull(document.getElementById('output'));
    var endIndex = result.length - 1 | 0;
    tmp$.innerHTML = result.substring(0, endIndex);
    check();
  }
  function clear() {
    ensureNotNull(document.getElementById('output')).innerHTML = '';
    enableMinus();
    disable();
    disableDecimal();
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
  function disableDecimal() {
    var tmp$;
    var btn5 = Kotlin.isType(tmp$ = document.getElementById('btn5'), HTMLButtonElement) ? tmp$ : throwCCE();
    btn5.disabled = true;
  }
  function enableDecimal() {
    var tmp$;
    var btn5 = Kotlin.isType(tmp$ = document.getElementById('btn5'), HTMLButtonElement) ? tmp$ : throwCCE();
    btn5.disabled = false;
  }
  _.run = run;
  _.check = check;
  _.checkOp = checkOp;
  _.insert = insert;
  _.calculate = calculate;
  _.back = back;
  _.clear = clear;
  _.disable = disable;
  _.enable = enable;
  _.disableMinus = disableMinus;
  _.enableMinus = enableMinus;
  _.disableDecimal = disableDecimal;
  _.enableDecimal = enableDecimal;
  Kotlin.defineModule('main', _);
  return _;
}(typeof main === 'undefined' ? {} : main, kotlin);
