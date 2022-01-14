const slds = document.querySelectorAll(".slide");
const nxtBtn = document.querySelector(".nextBtn");
const prvBtn = document.querySelector(".prevBtn");

slds.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nxtBtn.addEventListener("click", function () {
  counter++;
  main();
});

prvBtn.addEventListener("click", function () {
  counter--;
  main();
});

function main() {

  if (counter < slds.length - 1) {
    nxtBtn.style.display = "block";
  } else {
    nxtBtn.style.display = "none";
  }
  if (counter > 0) {
    prvBtn.style.display = "block";
  } else {
    prvBtn.style.display = "none";
  }
  slds.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

main();