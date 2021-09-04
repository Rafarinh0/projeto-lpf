import kotlinx.browser.*
import org.w3c.dom.*

@JsName("check")
fun check(){
  val numero = document.getElementById("output")?.innerHTML
  if(numero?.length == 0){
    disable()
    disableEqual()
    disableDecimal()
  }
}

fun checkOp(){
  val numero = document.getElementById("output")?.innerHTML
  if(numero!!.takeLast(1).equals("/") || numero.takeLast(1).equals("+") || numero.takeLast(1).equals("*")){
    disable()
    disableDecimal()
    disableEqual()
  }else if(numero.takeLast(1).equals("-") || numero.takeLast(1).equals(".")){
    disable()
    disableDecimal()
    disableMinus()
    disableEqual()
  }else{
    enable()
    enableMinus()
    enableDecimal()
    enableEqual()
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
  val btndiv = document.getElementById("btndiv") as HTMLButtonElement
  btndiv.disabled = true
  val btntimes = document.getElementById("btntimes") as HTMLButtonElement
  btntimes.disabled = true
  val btnsum = document.getElementById("btnsum") as HTMLButtonElement
  btnsum.disabled = true
}

fun enable(){
  val btndiv = document.getElementById("btndiv") as HTMLButtonElement
  btndiv.disabled = false
  val btntimes = document.getElementById("btntimes") as HTMLButtonElement
  btntimes.disabled = false
  val btnsum = document.getElementById("btnsum") as HTMLButtonElement
  btnsum.disabled = false
}

fun disableMinus(){
  val btnsub = document.getElementById("btnsub") as HTMLButtonElement
  btnsub.disabled = true
}

fun enableMinus(){
  val btnsub = document.getElementById("btnsub") as HTMLButtonElement
  btnsub.disabled = false
}

fun disableDecimal(){
  val btndecimal = document.getElementById("btndecimal") as HTMLButtonElement
  btndecimal.disabled = true
}

fun enableDecimal(){
  val btndecimal = document.getElementById("btndecimal") as HTMLButtonElement
  btndecimal.disabled = false
}

fun disableEqual(){
  val equal = document.getElementById("equal") as HTMLButtonElement
  equal.disabled = true
}

fun enableEqual(){
  val equal = document.getElementById("equal") as HTMLButtonElement
  equal.disabled = false
}