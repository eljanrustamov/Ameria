let body = document.body;
let switchButton = body.querySelector(".clicker");
let map = body.querySelector(".map");

switchButton.addEventListener("click", toggler);

function toggler() {
    map.classList.toggle("active-block");
    body.querySelector(".map span").classList.toggle("active-block");
    body.querySelector(".map iframe").classList.toggle("active-block");

}