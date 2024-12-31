const btnSi = document.querySelector("#si-btn");
const btnNo = document.querySelector("#rand");

let tamañoSi = 1;  
let tamañoNo = 1;  

function agrandarSi() {
    tamañoSi += 0.1; 
    btnSi.style.transform = `scale(${tamañoSi})`; 
    btnSi.style.transition = "transform 0.3s ease";
}

function achicarNo() {
    tamañoNo -= 0.1; 
    btnNo.style.transform = `scale(${tamañoNo})`; 
    btnNo.style.transition = "transform 0.3s ease"; 
}

btnNo.addEventListener("click", function (e) {
    e.preventDefault(); 
    agrandarSi();
    achicarNo(); 
});