let btn = document.getElementById("btn");
let twoDiv = document.getElementById("twoDiv")
let title = twoDiv.querySelector("p")


let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")



btn.addEventListener("click" , addBtn)

let clickBtn = 0;


let back = document.createElement("button")
back.id = "backButton";
back.textContent="Back"

function addBtn() {
  clickBtn++
  
  if ( clickBtn == 1 ){
    btn.textContent="Submit description"

    two.classList.add("active");
    two.querySelector("span").classList.add("sactive")
  
    title.textContent = " Choose description content"

    if (!document.getElementById("backButton")) {
  
    twoDiv.appendChild(back)
    }
  }else if (clickBtn == 2){
    title.textContent = "Are you happy now ? "
    btn.textContent = "Yes , go ahead"
    three.classList.add("active");
    three.querySelector("span").classList.add("sactive")
    back.textContent = "No , go back"
  }
  else if (clickBtn == 3 ){
    title.textContent = " OK , we're done . Thanks for  sending us your  data ! "
    btn.remove()
    back.remove()
  }

}



back.addEventListener("click", () => {
  if (clickBtn == 2) {
    three.classList.remove("active");
    three.querySelector("span").classList.remove("sactive")
    title.textContent = "Choose description content"
    btn.textContent = "Submit description"
    clickBtn = 1;
  } else if (clickBtn == 1) {
    two.classList.remove("active");
    two.querySelector("span").classList.remove("sactive")
    title.textContent = "Choose title"
    btn.textContent = "Submit title"
    back.remove()
    clickBtn = 0;
  }
});