import kotlinx.browser.*
import org.w3c.dom.*

@JsName("run")
fun run(){
  disable();
}

fun check(){
  val num = document.getElementById("output")?.innerHTML;
  if(num?.length == 0){
    disable();
  }else{
    enable();
  }
}

fun checkOp(){
  val numero = document.getElementById("output")?.innerHTML;
  if(numero!!.takeLast(1).equals("/") || numero.takeLast(1).equals("+") || numero.takeLast(1).equals("*")){
    disable();
  }else if(numero.takeLast(2).equals("/-")){
    disable();
    disableMinus();
  }else if(numero.takeLast(2).equals("--")){
    disable();
    disableMinus();
    document.getElementById("output")!!.innerHTML = numero.substring(0, numero.length - 1)
  }else{
    enable();
    enableMinus();
  }
}

@JsName("insert")
fun insert(num: String?){
  val numero = document.getElementById("output")?.innerHTML;
  document.getElementById("output")?.innerHTML = numero + num;
  checkOp();  
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
  disable();
}

@JsName("back")
fun back(){
  val result = document.getElementById("output")!!.innerHTML;
  document.getElementById("output")!!.innerHTML = result.substring(0, result.length - 1)
  check();
}

@JsName("clear")
fun clear(){
  document.getElementById("output")!!.innerHTML = "";
  enableMinus();
  disable();
}

fun disable(){
  val btn1 = document.getElementById("btn1") as HTMLButtonElement
  btn1.disabled = true;
   
  val btn2 = document.getElementById("btn2") as HTMLButtonElement
  btn2.disabled = true;
   
  val btn4 = document.getElementById("btn4") as HTMLButtonElement
  btn4.disabled = true;

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