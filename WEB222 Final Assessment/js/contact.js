window.onload= function(){
    var form = document.getElementById('form');
    form.addEventListener("submit", (e) => {
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const error = document.getElementById("error-email");
        let email = document.getElementById("email");
        if (!email.value.match(regex)) {
            e.preventDefault();
            error.style.visibility = "visible";
        }
        else if(email.value.match(regex)) {
            error.style.visibility = "hidden";
        }
    })
}
function option(value) {
    let rate = document.getElementById("rate-container");
    let required = document.getElementById("radio3");
    if (value == 0) {
        rate.style.display = "none";
        required.removeAttribute("required");
    }
    else if (value == 1) {
        rate.style.display = "block";
        required.setAttribute("required");
    }
};