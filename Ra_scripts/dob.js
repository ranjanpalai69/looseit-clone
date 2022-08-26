let Ls=JSON.parse(localStorage.getItem("loseit")) || {};
 
function dob(){
    event.preventDefault();
    let inpDate=document.getElementById("date").value ;
   let dateArr=inpDate.split("-").map(Number);
   let dobYear=dateArr[0];
   let dobMonth=dateArr[1];
   let dobDay=dateArr[2];
   console.log(dobYear,dobMonth,dobDay)
   if(dobYear<1900 || dobMonth<1 || dobMonth>12 || dobDay<1 || dobDay>31){
    document.getElementById("msg").innerText="This is an invalid birthday.";
    return ;
    
   }
   else if(dobYear===undefined || dobMonth===undefined || dobDay===undefined){
    document.getElementById("msg").innerText="This is an invalid birthday.";
    return ;
   }

let birth_date=new Date(inpDate);
let birthDate_day=birth_date.getDate();
let birthDate_month=birth_date.getMonth();
var birthDate_year=birth_date.getFullYear();

var curr_date=new Date();
var curr_day=curr_date.getDay();
var curr_month=curr_date.getMonth();
var curr_year=curr_date.getFullYear();


let calc_age=0;

if(curr_month>birthDate_month){
    calc_age=curr_year-birthDate_year;
}
else if(curr_month===birthDate_month){
    if(curr_day>=birthDate_day){
        calc_age=curr_year-birthDate_year;
    }
    else{
        calc_age=curr_year-birthDate_year-1;
    }
}
else{
    calc_age=curr_year-birthDate_year-1;
}

if(calc_age<18){
    document.getElementById("msg").innerText="You must be at least 18 years old to use Lose It!";
}
else{
   let ageDetails={
    birth_date,
    curr_date,
    calc_age
   }
   Ls["ageDetails"]=ageDetails;
   localStorage.setItem("loseit",JSON.stringify(Ls));
   window.location.href="../Ra_HTML/loosePlan.html"
}

}


