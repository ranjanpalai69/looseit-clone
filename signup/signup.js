let btn=document.querySelector("#submit-btn");
btn.addEventListener("click",savedata)
let data=[];
function savedata(){
    event.preventDefault();
   let obj={
    name:document.getElementById("first_name").value,
    email:document.getElementById("email_address").value,
    password:document.getElementById("password").value,
    cpassword:document.getElementById("confirm_password").value,
   }
   if(obj.name==""||obj.email==""||obj.password==""||obj.cpassword==""){
    alert("Fill credentials")
   }else if(obj.password!==obj.cpassword){
    alert("Password not matched")
   }
   else{
    data.push(obj);
    console.log(data);
    localStorage.setItem("user",JSON.stringify(data))
   }
  
}