let openSearch = async () => {
  try {
    let search = document.getElementById("search").value;
    let res = await fetch(
      `https://api.edamam.com/api/food-database/v2/parser?app_id=7a63a756&app_key=3849c2feb230196b1cb2edf329aa64f5&ingr=${search}&nutrition-type=cooking`
    );

    let data = await res.json();
    data = data.hints[0].food;
    console.log(data);
    appendData(data)
  } catch (e) {
    console.log("error");
    container.innerHTML=null;
    alert("Sorry for inconvenice, this item is not available ☹")
    container.style.display="none"
  }
};

let container = document.getElementById("container");

function appendData({category,label,image,nutrients: { CHOCDF, ENERC_KCAL, FAT, FIBTG, PROCNT }}){
// console.log(data)
container.innerHTML=null;


let div = document.createElement("div");
let amt=document.createElement("p")
amt.innerHTML="Amount Per 100 grams/ml"
amt.style.color="red"
let cat = document.createElement("h4");
cat.innerText = category;
// console.log(cat)
let img = document.createElement("img");
img.src = image;
let lab = document.createElement("h4");
lab.innerText = label;
let nut = document.createElement("p");
nut.innerText = `Carbohydrate - ${CHOCDF} g`;
let nut1 = document.createElement("p");
nut1.innerText = `Energy - ${ENERC_KCAL} J`;
let nut2 = document.createElement("p");
nut2.innerText = `Fat - ${FAT} g`;
let nut3 = document.createElement("p");
nut3.innerText = `Fiber - ${FIBTG} g`;
let nut4 = document.createElement("p");
nut4.innerText = `Protein - ${PROCNT} %`;

div.append(amt,img,cat, lab, nut, nut1, nut2, nut3, nut4);
container.append(div);
container.style.display="inline"

}


// <<<<<<< HEAD
let dataLS= JSON.parse(localStorage.getItem("loseit"))
console.log(dataLS)


let para= document.getElementById("plan_daily_budget")
para.innerText=dataLS.finalDetails.daily_calorie_budget+"  Calories"

let para1=document.getElementById("plan_total_weight_loss")
para1.innerText=dataLS.finalDetails.total_weight_loss+"  kilograms"
if(dataLS.finalDetails.total_weight_loss==""){
  document.getElementById("weight_loss").innerHTML=null;
}


let para2=document.getElementById("plan_weekly_weight_loss")
para2.innerText=dataLS.finalDetails.weekly_weight_loss

let para3=document.getElementById("plan_goal_date")
para3.innerText=dataLS.finalDetails.goal_date

// =======
let signout=document.getElementById("signout");
signout.addEventListener("click",logout);
function logout(){
  window.location.href="../landing page2.2/landing.html"
  
}
// >>>>>>> 84108aa3f05a51d13924bd0e397219553d2e2b30



let goal=()=>{
  window.location.href="../before/before.html"
}

let cummn=()=>{

  window.location.href="../sudipa/nutrition-fitness.html"
}

let chal=()=>{

  window.location.href="../sudipa/lose.html"
}

let rece=()=>{
  window.location.href="../sudipa/loseit-recipes.html"

}


let dataname= JSON.parse(localStorage.getItem("name"))
let name=document.getElementById("name")
name.innerText=dataname
name.style.color=" #f7941d"