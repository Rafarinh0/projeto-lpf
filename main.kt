import kotlinx.browser.*
import org.w3c.dom.*  

fun main(){
  val firstoutput = document.querySelector(".first-output")
  val secondoutput = document.querySelector(".second-output")
  val btns = document.querySelectorAll(".btn")
  val equal = document.querySelector(".equal")
  val clear = document.querySelector(".clear")
  val clearentry = document.querySelector(".clear-entry")
    
  for(btn in btns){
    btn.addEventListener("click", {
      val content = btn.getAttribute("data-num")
      secondoutput?.textContent = content
    })
  }

  clearentry?.addEventListener("click", {
    firstoutput?.textContent = ""
    secondoutput?.textContent = ""
  })
}
  