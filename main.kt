import kotlinx.browser.*
import org.w3c.dom.*

@JsName("run")
fun run(){
  disable()
  disableDecimal()
  disableEqual()
}

fun check(){
  val num = document.getElementById("output")?.innerHTML
  if(num?.length == 0){
    disable()
    disableEqual()
    disableDecimal()
  }else{
    enableEqual()
  }
}

fun checkOp(){
  val numero = document.getElementById("output")?.innerHTML
  if(numero!!.takeLast(1).equals("/") || numero.takeLast(1).equals("+") ||   numero.takeLast(1).equals("*")){
    disable()
    disableDecimal()
  }else if(numero.takeLast(1).equals("-") || numero.takeLast(1).equals(".")){
    disable()
    disableDecimal()
    disableMinus()
  }else{
    enable()
    enableMinus()
    enableDecimal()
  }
  check()
}

@JsName("insert")
fun insert(num: String?){
  val numero = document.getElementById("output")?.innerHTML
  document.getElementById("output")?.innerHTML = numero + num
  checkOp()
}

@JsName("calculate")
fun calculate(){
  val result = document.getElementById("output")?.innerHTML
  if(result != null){
    try{
      document.getElementById("output")?.innerHTML = eval(result)
      if(result.takeLast(2).equals("/0")){
        window.alert("Não é possível dividir por zero.")
        clear()
      }
      checkOp()
    }
    catch(err: dynamic){
      window.alert("Erro: Entrada inválida!")
      clear()
    }
  }
}

@JsName("back")
fun back(){
  val result = document.getElementById("output")!!.innerHTML
  document.getElementById("output")!!.innerHTML = result.substring(0, result.length - 1)
  checkOp()
}

@JsName("clear")
fun clear(){
  document.getElementById("output")!!.innerHTML = ""
  enableMinus()
  check()
}

fun disable(){
  val btn1 = document.getElementById("btn1") as HTMLButtonElement
  btn1.disabled = true
  val btn2 = document.getElementById("btn2") as HTMLButtonElement
  btn2.disabled = true
  val btn4 = document.getElementById("btn4") as HTMLButtonElement
  btn4.disabled = true
}

fun enable(){
  val btn1 = document.getElementById("btn1") as HTMLButtonElement
  btn1.disabled = false
  val btn2 = document.getElementById("btn2") as HTMLButtonElement
  btn2.disabled = false
  val btn4 = document.getElementById("btn4") as HTMLButtonElement
  btn4.disabled = false
}

fun disableMinus(){
  val btn3 = document.getElementById("btn3") as HTMLButtonElement
  btn3.disabled = true
}

fun enableMinus(){
  val btn3 = document.getElementById("btn3") as HTMLButtonElement
  btn3.disabled = false
}

fun disableDecimal(){
  val btn5 = document.getElementById("btn5") as HTMLButtonElement
  btn5.disabled = true
}

fun enableDecimal(){
  val btn5 = document.getElementById("btn5") as HTMLButtonElement
  btn5.disabled = false
}

fun disableEqual(){
  val equal = document.getElementById("equal") as HTMLButtonElement
  equal.disabled = true;
}

fun enableEqual(){
  val equal = document.getElementById("equal") as HTMLButtonElement
  equal.disabled = false;
}