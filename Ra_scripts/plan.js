let lsData=JSON.parse(localStorage.getItem("loseit")) || {};

let perDayWeightLoss=Math.floor(eval(3/4*1000/7));  //per day weight loss 107 gram 

console.log(perDayWeightLoss);
console.log(lsData);

let daily_calorie_budget=document.getElementById("plan_daily_budget");

let total_weight_loss=document.getElementById("plan_total_weight_loss");

let weekly_weight_loss=document.getElementById("plan_weekly_weight_loss");

let goal_date=document.getElementById("plan_goal_date");

let finalDetails={};

// if user is male 

if(lsData.gender==="Male"){

    let val=Math.floor(eval(`10*${lsData.current}+6.25*${lsData.height}-5*${lsData.ageDetails.calc_age}+5`));
    daily_calorie_budget.innerText=`${val} calories`  ;
     
    if(+(lsData.current) <= +(lsData.goal )){
        document.getElementById("weight_loss").style.display="none";

        weekly_weight_loss.innerText="Maintain";

        goal_date.innerText=new Date().toDateString() ;

        // updating localStorage 

        finalDetails["daily_calorie_budget"]=val;
        finalDetails["total_weight_loss"]="";
        finalDetails["weekly_weight_loss"]="Maintain";
        finalDetails["goal_date"]=new Date().toDateString() ;
        lsData["finalDetails"]=finalDetails;
        localStorage.setItem("loseit",JSON.stringify(lsData));

    }

    else{

    //    for total weight loss 

        let lossTotal=lsData.current-lsData.goal;
       
        total_weight_loss.innerText=`${lossTotal} kilograms`;
      
        // for weekly weight loss 

        weekly_weight_loss.innerText="4/3 kilograms" ; 

        // for estimated date 

        let totalDay=Math.floor(eval(lossTotal*1000/perDayWeightLoss));

        console.log(totalDay)
        
var today=new Date(); //Today's Date
var requiredDate=new Date(today.getFullYear(),today.getMonth(),today.getDate()+totalDay);

requiredDate=requiredDate.toDateString();

goal_date.innerText=requiredDate;

// updating localStorage 

finalDetails["daily_calorie_budget"]=val;
        finalDetails["total_weight_loss"]=lossTotal;
        finalDetails["weekly_weight_loss"]="4/3 kilograms";
        finalDetails["goal_date"]= requiredDate;
        lsData["finalDetails"]=finalDetails;
        localStorage.setItem("loseit",JSON.stringify(lsData));


    }
   

}


// if user is female 

if(lsData.gender==="Female"){

    let val=Math.floor(eval(`10*${lsData.current}+6.25*${lsData.height}-5*${lsData.ageDetails.calc_age}-161`));
    daily_calorie_budget.innerText=`${val} calories`  ;
     
    if(+(lsData.current)<= +(lsData.goal)){
        document.getElementById("weight_loss").style.display="none";

        weekly_weight_loss.innerText="Maintain";

        goal_date.innerText=new Date().toDateString() ;

        // updating localStorage 

        finalDetails["daily_calorie_budget"]=val;
        finalDetails["total_weight_loss"]="";
        finalDetails["weekly_weight_loss"]="Maintain";
        finalDetails["goal_date"]=new Date().toDateString() ;
        lsData["finalDetails"]=finalDetails;
        localStorage.setItem("loseit",JSON.stringify(lsData));

    }

    else{

    //    for total weight loss 

        let lossTotal=lsData.current-lsData.goal;
       
        total_weight_loss.innerText=`${lossTotal} kilograms`;
      
        // for weekly weight loss 

        weekly_weight_loss.innerText="4/3 kilograms" ; 

        // for estimated date 

        let totalDay=Math.floor(eval(lossTotal*1000/perDayWeightLoss));

        console.log(totalDay)
        
var today=new Date(); //Today's Date
var requiredDate=new Date(today.getFullYear(),today.getMonth(),today.getDate()+totalDay);

requiredDate=requiredDate.toDateString();

goal_date.innerText=requiredDate;

// updating localStorage 

finalDetails["daily_calorie_budget"]=val;
        finalDetails["total_weight_loss"]=lossTotal;
        finalDetails["weekly_weight_loss"]="4/3 kilograms";
        finalDetails["goal_date"]= requiredDate;
        lsData["finalDetails"]=finalDetails;
        localStorage.setItem("loseit",JSON.stringify(lsData));


    }
   

}


function forward(){
    event.preventDefault();
    window.location.href="http://127.0.0.1:5500/malicious-thrill-8470/signup/signup.html";
}