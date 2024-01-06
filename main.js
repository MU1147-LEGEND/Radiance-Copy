function preLoader() {
  const loader = document.getElementById("loader");
  window.addEventListener("load", () => {
    loader.style.display = "none";
  });
}
preLoader();

function sliderActive() {
  const slider = document.querySelectorAll(".cdl");
  slider.forEach((slides) => {
    slides.addEventListener("click", () => {
      document.querySelector(".active")?.classList.remove("active");
      slides.classList.add("active");
    });
  });
}
sliderActive();

function faqs() {
  const qtitle = document.querySelectorAll(".qtitle");
  const qdescription = document.querySelectorAll(".qdescription");
  qtitle.forEach((ques, i) => {
    ques.addEventListener("click", () => {
      const isActive = document.querySelector(".qactive"); // closes the others opened sections
      if (isActive && !qdescription[i].classList.contains("qactive")) {
        isActive.classList.remove("qactive");
      }
      qdescription[i].classList.toggle("qactive");
      setTimeout(()=>{
        qtitle[i].childNodes[1].classList.toggle("fa-circle-chevron-right");
        qtitle[i].childNodes[1].classList.toggle("fa-circle-chevron-down");
    },300);
    });
  });
}
faqs();

function footerDate(){
  const year = document.getElementById('year');
  let date = new Date();
  year.innerText = date.getFullYear();
}
footerDate();

function testimonial(){
  const card1 = document.getElementById('card1');
  const card2 = document.getElementById('card2');
  const card3 = document.getElementById('card3');
  card1.firstElementChild.style.display = "none";
  card2.firstElementChild.style.display = "none";
  card3.firstElementChild.style.display = "none";
  card1.firstElementChild.nextElementSibling.style.display = "none";
  card2.firstElementChild.nextElementSibling.style.display = "none";
  card3.firstElementChild.nextElementSibling.style.display = "none";
}
function testimonialCall(){
  if(screen.width < 480){
    testimonial();
  }
}
testimonialCall();

