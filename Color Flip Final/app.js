const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

document.getElementById("btn").addEventListener("click", changeColor);

document.getElementById("btn1").addEventListener("click", function () {
    setInterval(changeColor, 500);
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

function changeColor() {
    const randomNumber = getRandomNumber();

    
    document.body.style.backgroundColor = colors[randomNumber];
    document.getElementById("colr").textContent = colors[randomNumber];
}