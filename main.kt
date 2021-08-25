import kotlinx.browser.*
import org.w3c.dom.*

@JsName("run")
fun run(){
  disable()
  disableDecimal()
}

fun check(){
  val num = document.getElementById("output")?.innerHTML;
  if(num?.length == 0){
    disable()
  }else{
    enable()
  }
}

fun checkOp(){
  val numero = document.getElementById("output")?.innerHTML
  if(numero!!.takeLast(1).equals("/") || numero.takeLast(1).equals("+") || numero.takeLast(1).equals("*")){
    disable()
    disableDecimal()
  }else if(numero.takeLast(1).equals("-")){
    disable()
    disableDecimal()
    disableMinus()
  }else if(numero.takeLast(2).equals("/-") || numero.takeLast(1).equals(".")){
    disable()
    disableMinus()
    disableDecimal()
  }else{
    enable()
    enableMinus()
    enableDecimal()
  }
}

@JsName("insert")
fun insert(num: String?){
  val numero = document.getElementById("output")?.innerHTML
  document.getElementById("output")?.innerHTML = numero + num;
  checkOp()
}

@JsName("calculate")
fun calculate(){
  val result = document.getElementById("output")?.innerHTML;
  if(result != null){
    try{
      document.getElementById("output")?.innerHTML = eval(result)
      enableMinus()
      enable()
      disableDecimal()
      checkOp()
    }
    catch(err: dynamic){
      window.alert("Erro: Entrada inválida!")
    }
  }
}

@JsName("back")
fun back(){
  val result = document.getElementById("output")!!.innerHTML
  document.getElementById("output")!!.innerHTML = result.substring(0, result.length - 1)
  check()
}

@JsName("clear")
fun clear(){
  document.getElementById("output")!!.innerHTML = ""
  enableMinus()
  disable()
  disableDecimal()
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
