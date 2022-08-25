// let buttons = document.getElementById("button1")
// buttons.addEventListener("click",function(){

// window.location.href="../weight/weight.html"


// })
// let buttons1 = document.getElementById("button2")
// buttons1.addEventListener("click",function(){

// window.location.href="../weight/weight.html"


// })

let nextpage=()=>{
    // let buttons = document.getElementById("button1")
    // let buttons1 = document.getElementById("button2")

let value1 = event.target.innerText
localStorage.setItem("weightData",JSON.stringify(value1));
window.location.href="../weight/weight.html"
console.log(value1)

}
