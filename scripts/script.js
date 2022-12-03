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
