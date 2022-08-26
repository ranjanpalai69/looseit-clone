let saveddata=JSON.parse(localStorage.getItem("user"))
console.log(saveddata);
// let logindata=[]
document.getElementById("login").addEventListener("click",final)
function final(){
    event.preventDefault()
    let email1=document.getElementById("email").value;
    let pass1=document.getElementById("password").value;
    
    // let obj={
    //     email:email1,
        
    // }


   for(let i=0;i<saveddata.length;i++){
    if(saveddata[0].email===email1&&saveddata[0].password===pass1){
        alert("Login success");
        localStorage.setItem("name",JSON.stringify(saveddata[0].name))
    }else{
        alert("Either email or password is incorrect")
    }
   }
}
function entry(){
    window.location.href="result.html"
}
document.getElementById("signup").addEventListener("click",function(){
    window.location.href="signup.html"
})