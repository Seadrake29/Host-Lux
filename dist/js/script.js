//  burger menu

const burger = document.querySelector(".burger__menu");
const headerA = document.querySelector(".header__action");
burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  headerA.classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", () => {
  const contactImage = document.querySelector(".contactUs__img");

  if (contactImage) {
    contactImage.style.animation = "zoomInUp 1s ease-out 0.25s 1";
  }

  // Inject keyframes into the first available stylesheet
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(
    `
    @keyframes zoomInUp {
      0% {
        opacity: 0;
        transform: scale3d(0.3, 0.3, 0.3) translate3d(0, 100%, 0);
      }
      80% {
        opacity: 0.8;
        transform: scale3d(1.1, 1.1, 1.1);
      }
      100% {
        opacity: 1;
        transform: translate3d(0, 0%, 0);
      }
    }
  `,
    styleSheet.cssRules.length
  );
});

const accordion = document.getElementsByClassName("accordion__item");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

const cursor = document.querySelector(".cursor");
let mouseX = 0,
  mouseY = 0;
let posX = 0,
  posY = 0;
const delay = 0.1; // Adjust this for more or less delay (0.1 = slow, 1 = fast)

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  posX += (mouseX - posX) * delay;
  posY += (mouseY - posY) * delay;

  cursor.style.left = `${posX}px`;
  cursor.style.top = `${posY}px`;

  requestAnimationFrame(animateCursor);
}

animateCursor();

document.addEventListener("DOMContentLoaded", () => {
  const scrollToTopBtn = document.getElementById("scrollToTop");
  const progressCircle = document.getElementById("progressCircle");

  const totalScrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    // Show button after scrolling 100px
    if (scrollY > 100) {
      scrollToTopBtn.classList.add("opacity-100");
    } else {
      scrollToTopBtn.classList.remove("opacity-100");
    }

    // Ensure full progress at bottom
    let scrollPercentage = Math.min((scrollY / totalScrollHeight) * 283, 283);
    progressCircle.style.strokeDashoffset = 283 - scrollPercentage;
  });

  // Scroll to top when button is clicked
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

var slider1 = tns({
  container: ".slider__wrapper",
  items: 1,
  slideBy: 1,
  autoplay: true,
  controls: false,
  loop: true,
  axis: "horizontal",
});

var navDots1 = document.querySelectorAll(".slider__nav i");

function updateActiveDot1(index) {
  navDots1.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("open");
    } else {
      dot.classList.remove("open");
    }
  });
}

navDots1.forEach(function (dot, index) {
  dot.addEventListener("click", function () {
    slider1.goTo(index);
    updateActiveDot1(index);
  });
});

slider1.events.on("indexChanged", function (info) {
  updateActiveDot1(info.index);
});

updateActiveDot1(0);

// SLIDER 2
var slider2 = tns({
  container: ".slider__desktop__wrapper",
  items: 3,
  slideBy: 1,
  autoplay: false,
  controls: false,
  loop: true,
  axis: "horizontal",
});

var navDots2 = document.querySelectorAll(".slider__desktop__nav i"); // Make sure this selector is correct

function updateActiveDot2(index) {
  navDots2.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("open");
    } else {
      dot.classList.remove("open");
    }
  });
}

navDots2.forEach(function (dot, index) {
  dot.addEventListener("click", function () {
    slider2.goTo(index);
    updateActiveDot2(index);
  });
});

slider2.events.on("indexChanged", function (info) {
  updateActiveDot2(info.index);
});

updateActiveDot2(0);

// SLIDER 3

var slider = tns({
  container: ".brand__wrapper",
  items: 1,
  slideBy: 1,
  autoplay: false,
  controls: true,
  nav: true,
  mouseDrag: true,
  speed: 800,
  loop: true, // ✅ Makes the last slide go directly to the first one
  rewind: false,
  responsive: {
    768: {
      items: 4,
    },
  },
});

const cards = document.querySelectorAll(".brand__contents");
let startX = 0;
let endX = 0;

cards.forEach((card) => {
  card.addEventListener("mousedown", (e) => {
    startX = e.clientX;
  });

  card.addEventListener("mouseup", (e) => {
    endX = e.clientX;
    handleSwipe();
  });

  card.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  card.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
  });
});

function handleSwipe() {
  if (startX - endX > 50) {
    slider.goTo("next");
  } else if (endX - startX > 50) {
    slider.goTo("prev");
  }
}
