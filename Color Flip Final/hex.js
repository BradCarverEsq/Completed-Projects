const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


document.getElementById("btn2").addEventListener("click", changeColor);

document.getElementById("btn3").addEventListener("click", function () {
    setInterval(changeColor, 500);
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

function changeColor() {
    let hexcode = "#";
    for(let i = 0; i < 6; i++ ){
        hexcode += hex[getRandomNumber()].toString();
    }
    document.body.style.backgroundColor = hexcode;
    document.getElementById("colr1").textContent = hexcode;
}