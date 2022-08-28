let dataStore = JSON.parse(localStorage.getItem("loseit"))


let button = document.getElementById("vbutton1")
button.addEventListener("click", function (e) {


    let height = document.getElementById("height").value
    let sel_height = document.getElementById("sel_height").value


    if (height === "") {

        let altermsg = document.getElementById("alertmsg")
        altermsg.innerText = "This is an invalid height."
        altermsg.style.color = "red"
    } else {
        dataStore["height"] = height
        dataStore["sel_height"] = sel_height
        localStorage.setItem("loseit", JSON.stringify(dataStore))
        let altermsg = document.getElementById("alertmsg")
        altermsg.innerText = "";
        window.location.href="../Ranjan/Ra_HTML/gender.html"
    }

});




let backpage = () => {

    window.location.href = "../weight/weight.html"



}