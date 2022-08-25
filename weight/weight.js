let button = document.getElementById("vbutton1")
button.addEventListener("click", function(e) {  

    let obj={
        current : document.getElementById("current").value,
        sel_current : document.getElementById("sel_current").value,
        goal : document.getElementById("goal").value,
        sel_goal : document.getElementById("sel_goal").value,

    }

    if(obj.current === "" || obj.goal === ""){

    let altermsg= document.getElementById("alertmsg")
    altermsg.innerText ="This is an unsupported weight."
    altermsg.style.color="red"
    }else{
        localStorage.setItem("loseit",JSON.stringify(obj))
        let altermsg= document.getElementById("alertmsg")
        altermsg.innerText =""
    }
    // console.log(sel_current, sel_goal, current, goal);

  

  } );    

let dataLS= JSON.parse(localStorage.getItem("weightData"));

  let heading = document.querySelector(".vheading")
  if(dataLS=="Yes"){
    heading.innerText = "You know the deal! Follow your calorie budget to eat less than you burn and lose weight."
  }else{
heading.innerText="Calorie counting comes down to simple math. Just follow a calorie budget to eat less than you burn and lose weight. Let's find your calorie budget now."
  }
 

let backpage=()=>{

window.location.href="../before/before.html"



}