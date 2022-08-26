let username=JSON.parse(localStorage.getItem("name"));
console.log(username)
name(username)
function name(username){
    document.getElementById("name").innerText=username
}
