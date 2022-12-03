document.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll(".itc-slider__btn");

  for (let btn of btns) {
    btn.addEventListener("click", (e) => {
      if (e.target.classList.contains("itc-slider__btn_hide")) {
        console.log(e);
      }
    });
  }

  const burger = document.querySelector(".burger");
  const burgerToggle = document.querySelector(".burger__toggle");
  const body = document.querySelector("body");
  burgerToggle.addEventListener("click", (e) => {
    e.target.stopPropagation();
    burger.classList.toggle("active");
    body.classList.toggle("active");
  });
  burger.addEventListener("click", (e) => {
    burger.classList.toggle("active");
    body.classList.toggle("active");
  });
});

const form = document.querySelector(".form");
const inputs = form.querySelectorAll(".form__input");
const submit = form.querySelector(".form__btn");
const modalClose = form.querySelector(".modal-close");
const token = "5718758078:AAH1OWJmqfFS5OqAK4Ut-wKefQCGlQDNrRw";
const chat_id = "5684639400";
let msg = "";

submit.addEventListener("click", (e) => {
  let stack = [];
  e.preventDefault();
  for (let i = 0; i < inputs.length; i++) {
    stack[i] = inputs[i].value;
    inputs[i].value = "";
  }
  msg = `Name: ${stack[0]} Phone: ${stack[1]} Email: ${stack[2]} Message: ${stack[3]}`;
  form.classList.add("active");
  fetch(
    `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${msg}`
  );
});
modalClose.addEventListener("click", () => {
  form.classList.remove("active");
});
