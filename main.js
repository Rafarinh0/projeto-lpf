if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'main'.");
}var main = function (_, Kotlin) {
  'use strict';
  var ensureNotNull = Kotlin.ensureNotNull;
  var takeLast = Kotlin.kotlin.text.takeLast_6ic1pp$;
  var equals = Kotlin.equals;
  var toString = Kotlin.toString;
  var throwCCE = Kotlin.throwCCE;
  function check() {
    var tmp$;
    var numero = (tmp$ = document.getElementById('output')) != null ? tmp$.innerHTML : null;
    if ((numero != null ? numero.length : null) === 0) {
      disable();
      disableEqual();
      disableDecimal();
    }}
  function checkOp() {
    var tmp$;
    var numero = (tmp$ = document.getElementById('output')) != null ? tmp$.innerHTML : null;
    if (equals(takeLast(ensureNotNull(numero), 1), '/') || equals(takeLast(numero, 1), '+') || equals(takeLast(numero, 1), '*')) {
      disable();
      disableDecimal();
      disableEqual();
    } else if (equals(takeLast(numero, 1), '-') || equals(takeLast(numero, 1), '.')) {
      disable();
      disableDecimal();
      disableMinus();
      disableEqual();
    } else {
      enable();
      enableMinus();
      enableDecimal();
      enableEqual();
    }
    check();
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
        if (equals(takeLast(result, 2), '/0')) {
          window.alert('N\xE3o \xE9 poss\xEDvel dividir por zero.');
          clear();
        }checkOp();
      } catch (err) {
        window.alert('Erro: Entrada inv\xE1lida!');
        clear();
      }
    }}
  function back() {
    var result = ensureNotNull(document.getElementById('output')).innerHTML;
    var tmp$ = ensureNotNull(document.getElementById('output'));
    var endIndex = result.length - 1 | 0;
    tmp$.innerHTML = result.substring(0, endIndex);
    checkOp();
  }
  function clear() {
    ensureNotNull(document.getElementById('output')).innerHTML = '';
    enableMinus();
    check();
  }
  function disable() {
    var tmp$, tmp$_0, tmp$_1;
    var btndiv = Kotlin.isType(tmp$ = document.getElementById('btndiv'), HTMLButtonElement) ? tmp$ : throwCCE();
    btndiv.disabled = true;
    var btntimes = Kotlin.isType(tmp$_0 = document.getElementById('btntimes'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    btntimes.disabled = true;
    var btnsum = Kotlin.isType(tmp$_1 = document.getElementById('btnsum'), HTMLButtonElement) ? tmp$_1 : throwCCE();
    btnsum.disabled = true;
  }
  function enable() {
    var tmp$, tmp$_0, tmp$_1;
    var btndiv = Kotlin.isType(tmp$ = document.getElementById('btndiv'), HTMLButtonElement) ? tmp$ : throwCCE();
    btndiv.disabled = false;
    var btntimes = Kotlin.isType(tmp$_0 = document.getElementById('btntimes'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    btntimes.disabled = false;
    var btnsum = Kotlin.isType(tmp$_1 = document.getElementById('btnsum'), HTMLButtonElement) ? tmp$_1 : throwCCE();
    btnsum.disabled = false;
  }
  function disableMinus() {
    var tmp$;
    var btnsub = Kotlin.isType(tmp$ = document.getElementById('btnsub'), HTMLButtonElement) ? tmp$ : throwCCE();
    btnsub.disabled = true;
  }
  function enableMinus() {
    var tmp$;
    var btnsub = Kotlin.isType(tmp$ = document.getElementById('btnsub'), HTMLButtonElement) ? tmp$ : throwCCE();
    btnsub.disabled = false;
  }
  function disableDecimal() {
    var tmp$;
    var btndecimal = Kotlin.isType(tmp$ = document.getElementById('btndecimal'), HTMLButtonElement) ? tmp$ : throwCCE();
    btndecimal.disabled = true;
  }
  function enableDecimal() {
    var tmp$;
    var btndecimal = Kotlin.isType(tmp$ = document.getElementById('btndecimal'), HTMLButtonElement) ? tmp$ : throwCCE();
    btndecimal.disabled = false;
  }
  function disableEqual() {
    var tmp$;
    var equal = Kotlin.isType(tmp$ = document.getElementById('equal'), HTMLButtonElement) ? tmp$ : throwCCE();
    equal.disabled = true;
  }
  function enableEqual() {
    var tmp$;
    var equal = Kotlin.isType(tmp$ = document.getElementById('equal'), HTMLButtonElement) ? tmp$ : throwCCE();
    equal.disabled = false;
  }
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
  _.disableEqual = disableEqual;
  _.enableEqual = enableEqual;
  Kotlin.defineModule('main', _);
  return _;
}(typeof main === 'undefined' ? {} : main, kotlin);
