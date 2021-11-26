const value = document.getElementById("value");
var count = 0;
var temp;
function checkCount() {
    
    if (count == 0 ){
        value.style.color = "#222";
    } else if (count > 0) {
        value.style.color = "green";
    } else {
        value.style.color = "red"; 
    }

    value.textContent = count.toString();
}

function plus() {
    count++;
    checkCount();
}

function minus() {
    count--;
    checkCount();
}

document.getElementById("inc").addEventListener("click", plus);

document.getElementById("dec").addEventListener("click", minus);

document.getElementById("res").addEventListener("click", function () {
    (temp != null) ? clearInterval(temp) : true ;
    count = 0;
    checkCount();
});

document.getElementById("macroinc").addEventListener("click",  function () {
    macro(plus);
});

document.getElementById("macrodec").addEventListener("click",  function () {
    macro(minus);
});

function macro(func) {
    (temp != null) ? clearInterval(temp) : true ;
    temp = setInterval(func, 200);
}
