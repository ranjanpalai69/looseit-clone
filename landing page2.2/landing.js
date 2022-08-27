var left=1;
var right=3
function show(){
  for(i=left; i<=right; i++){ 
  document.getElementById("c"+i).style.display="inline-block"
}
}
function moveLeft(){
if(left<=3&&right<=7){
document.getElementById('c'+left).style.display="none";
left+=1;
right+=1;

for(i=left; i<=right; i++){ 
  document.getElementById("c"+i).style.display="inline-block"
}
}
else
   return
}

function moveRight(){
if(left>=2&&right>=3){
document.getElementById('c'+right).style.display="none";
left-=1;
right-=1;

for(i=left; i<=right; i++){ 
  document.getElementById("c"+i).style.display="inline-block"
}
}
else
   return
}

let javed=()=>{
window.location.href="../sudipa/lose.html"


}