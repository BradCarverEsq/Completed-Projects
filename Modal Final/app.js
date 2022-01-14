// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay


let mdlBtn = document.querySelector(".modal-btn");
let mdl = document.querySelector(".modal-overlay");
let clsBtn = document.querySelector(".close-btn");

mdlBtn.addEventListener("click", function () {
    mdl.classList.add("open-modal");
});

clsBtn.addEventListener("click", function () {
    mdl.classList.remove("open-modal");
});