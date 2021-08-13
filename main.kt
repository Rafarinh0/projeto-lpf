import kotlinx.browser.*
import org.w3c.dom.*  

@JsName("insert")
fun insert(num:String?){
  val numero = document.getElementById("output")?.innerHTML

  document.getElementById("output")?.innerHTML = numero + num
}

@JsName("clear")
fun clear(){
  document.getElementById("output")?.innerHTML = ""
}

@JsName("back")
fun back(){
  val output = document.getElementById("output")?.innerHTML
  if(output!=null){
    document.getElementById("output")?.innerHTML = output.substring(0, output.length-1)
  }
  
}

@JsName("calculate")
fun calculate(){
    val result = document.getElementById("output")?.innerHTML
    if(result != null){
      try{
        document.getElementById("output")?.innerHTML = eval(result)
      }
      catch(err: dynamic){
          clear()
          println("Entrada invalida!")
      }
    }

}

