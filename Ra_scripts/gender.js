  
let userData=JSON.parse(localStorage.getItem('loseit'));

  function gender(){
    event.preventDefault();
    let gender=event.target.innerText;
    userData["gender"]=gender;
    localStorage.setItem('loseit', JSON.stringify(userData));
    window.location.href="../Ra_HTML/dob.html"
  }