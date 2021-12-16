const reviews = [
    {
      name: "susan smith",
      job: "Flight Attendant",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I loved my time at Air Canada! Our Training was extensive and the passengers are especially nice compared to other arilines I've worked with with. If I was in the job market again I would definitely look for Air Canada.",
    },
    {
      name: "anna johnson",
      job: "Pilot",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "My pilot training was easily accepted at Air Canada. The hiring staff were very accepting and comfortingly unformal. The work environment is always relaxed, which is appreciated since my job as a pilot demands alot from me on the daily.",
    },
    {
      name: "peter jones",
      job: "On-flight Chef",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "When I originally graduated culinary school, I never imagined cooking on an airplane, but when I entered the job market, Air Canada offered amazing rates and an even better work environment. I can say that I defnitely don't regret my decision all those years ago.",
    },
    {
      name: "bill anderson",
      job: "Intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Interning is never a pleasant thing... Or so I thought. Air Canada changed my mind in this respect with their friendly work environment and friendly management. I would certainly recommend the internship to others as long as I won't be fired for it.",
    },
];
 
const hot = [
    {
        flight:"YVR to LAX",
        place:'California', 
        price:'CAD 1,218'
    },
    {
        flight:"YYZ to AUA",
        place:'Aruba', 
        price:'CAD 1,927'
    },
    {
        flight:"YOW to GIG",
        place:'Rio De Janeiro', 
        price:'CAD 2,197'
    },
];
const cold = [
    {
        flight:"YVR to ORY",
        place:'Paris', 
        price:'CAD 1,112'
    },
    {
        flight:"YYC to YKS",
        place:'Yakutsk', 
        price:'CAD 879'
    },
    {
        flight:"YWG to KTM",
        place:'Nepal', 
        price:'CAD 3,320'
    },
];
const exotic = [
    {
        flight:"YVR to OSA",
        place:'Japan', 
        price:'CAD 2,109'
    },
    {
        flight:"YEY to PAC",
        place:'Panama', 
        price:'CAD 1,987'
    },
    {
        flight:"YBC to BWN",
        place:'Brunei', 
        price:'CAD 3,380'
    },
];
const closeToHome = [
    {
        flight:"YXX to JFK",
        place:'New York City', 
        price:'CAD 412'
    },
    {
        flight:"YVR to YQB",
        place:'Quebec', 
        price:'CAD 912'
    },
    {
        flight:"YVR to JNU",
        place:'Alaska', 
        price:'CAD 423'
    },
];

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let mnuopnr = document.getElementById("airplane");
const links = document.querySelector(".links");
let select = document.querySelector("#input");

mnuopnr.addEventListener("click", function (){
    links.classList.toggle("linksfinal");
});

const img = document.querySelector("#imgy") ;
const text = document.querySelector("#text");
const job = document.querySelector("#job");
const auth = document.querySelector("#name");

const cont = document.querySelector("#counter");

const change = document.querySelector("#chg");
const change2 = document.querySelector(".chg2");

const selc = document.querySelector("#input");
const place = document.querySelector("#place");
const price = document.querySelector("#price");

const lftbtn = document.querySelector("#left-button");
const rgtbtn = document.querySelector("#right-button");
const probbtn = document.querySelector("#prob-button");

const incbtn = document.querySelector("#inc-button");
const decbtn = document.querySelector("#dec-button");
const resbtn = document.querySelector("#res-button");

const colbtn = document.querySelector("#clr-button");

const recbtn = document.querySelector("#recy");

let idx = 0;

drawChanges();

function drawChanges() {
  img.src = reviews[idx].img;
  text.textContent = reviews[idx].text;
  job.textContent = reviews[idx].job;
  auth.textContent= reviews[idx].name;
}

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
function getRandom3() {
    return Math.floor(Math.random() * 3);
}
function getRandomColor() {
    let hexcode = "#";
    for(let i = 0; i < 6; i++ ){
        hexcode += hex[getRandomNumber()].toString();
    }
    return hexcode;
}
rgtbtn.addEventListener("click", function (){
    (idx > 2 ? idx = 0 : idx++);
  drawChanges();
});
lftbtn.addEventListener("click", function (){
    (idx < 1 ? idx = 3: idx --);
  drawChanges();
});
probbtn.addEventListener("click", function (){
    idx = Math.floor(Math.random() * 4);
  drawChanges();
});

colbtn.addEventListener("click", function(){
     let x = getRandomColor();
     change.style.backgroundColor = x;
     change2.style.backgroundColor = x;
});

let cnt = Math.floor(Math.random() * 20000) - 10000;
colorCheck();
function colorCheck() {
    if (cnt == 0) {
        cont.style.color = "#e2e0e0";
    } else if (cnt > 0) {
        cont.style.color = "red";
    } else{
        cont.style.color = "black";
    }
    cont.innerHTML = cnt.toString();
}
incbtn.addEventListener("click", function(){
    cnt++;
    colorCheck();
});
decbtn.addEventListener("click", function(){
    cnt--;
    colorCheck();
});
resbtn.addEventListener("click", function(){
    cnt = 0;
    colorCheck();
});

recbtn.addEventListener("click", function (){
    if (selc.value != "null"){
        place.style.display = "block";
        price.style.display = "block";
        let rand = getRandom3();
        switch(selc.value){
            case "hot":
                console.log("hi");
                price.textContent = hot[rand].price;
                place.textContent = hot[rand].flight + ", " + hot[rand].place;
                break;
            case "cold":
                price.textContent = cold[rand].price;
                place.textContent = cold[rand].flight + ", " + cold[rand].place;
                break;
            case "exotic":
                price.textContent = exotic[rand].price;
                place.textContent = exotic[rand].flight + ", " + exotic[rand].place;
                break;
            case "homely":
                price.textContent = closeToHome[rand].price;
                place.textContent = closeToHome[rand].flight + ", " + closeToHome[rand].place;
                break;
            default:
                console.log("how?")
        }
    } else{
        alert("Select an option before pressing the button");
    }
});



