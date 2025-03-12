//  burger menu

const burger = document.querySelector(".burger__menu");
const headerA = document.querySelector(".header__action");
burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  headerA.classList.toggle("open");
});

module.exports = {
  theme: {
    extend: {
      animation: {
        fadeInEase: "fadeInEase 1s ease-in forwards",
      },
      keyframes: {
        fadeInEase: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
};
