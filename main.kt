import kotlinx.browser.*
import org.w3c.dom.*

@JsName("insert")
fun insert(num: String?){
  val numero = document.getElementById("output")?.innerHTML;
  document.getElementById("output")?.innerHTML = numero + num;
  
  if(numero!!.takeLast(2).equals("//") || numero.takeLast(3).equals("***") || numero.takeLast(2).equals("++")){
    disable();
    document.getElementById("output")!!.innerHTML = numero.substring(0, numero.length - 1)
  }else if(numero.takeLast(2).equals("--")){
    disableMinus();
      document.getElementById("output")!!.innerHTML = numero.substring(0, numero.length - 1)
  } else{
    enable();
    enableMinus();
    document.getElementById("output")?.innerHTML = numero + num;
    }
}

@JsName("calculate")
fun calculate(){
  val result = document.getElementById("output")?.innerHTML;
  if(result != null){
    try{
      document.getElementById("output")?.innerHTML = eval(result)
    }
    catch(err: dynamic){
      enable();
      enableMinus();
      println("Entrada invalida!")
    }
  }
}

@JsName("back")
fun back(){
  val resultado = document.getElementById("output")!!.innerHTML;
  document.getElementById("output")!!.innerHTML = resultado.substring(0, resultado.length - 1)
  enable();
  enableMinus();
}

@JsName("clear")
fun clear(){
  document.getElementById("output")!!.innerHTML = "";
  enable();
  enableMinus();
}

fun disable(){
  val btn1 = document.getElementById("btn1") as HTMLButtonElement
  btn1.disabled = true;
   
  val btn2 = document.getElementById("btn2") as HTMLButtonElement
  btn2.disabled = true;
   
  val btn3 = document.getElementById("btn3") as HTMLButtonElement
  btn3.disabled = true;

}

fun enable(){
  val btn1 = document.getElementById("btn1") as HTMLButtonElement
  btn1.disabled = false;

  val btn2 = document.getElementById("btn2") as HTMLButtonElement
  btn2.disabled = false;

  val btn4 = document.getElementById("btn4") as HTMLButtonElement
  btn4.disabled = false;
}

fun disableMinus(){
  val btn3 = document.getElementById("btn3") as HTMLButtonElement

  btn3.disabled = true;
}

fun enableMinus(){
  val btn3 = document.getElementById("btn3") as HTMLButtonElement

  btn3.disabled = false;
}