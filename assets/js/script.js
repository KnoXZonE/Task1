// timeline for logo and navbar
var tl = gsap.timeline({
  defaults: { duration: 0.1, ease: Back.easeOut.config(2), opacity: 0 },
});

tl.from(".header__nav-logo", { delay: 0.1 }).from(".header__nav-menu", {
  delay: 0,
});

// // timeline for hero
var tl2 = gsap.timeline({
  defaults: { duration: 0.05, opacity: 0 },
});

const heroText = new SplitType(".hero__section-content-title h1");

tl2
  .from(".char", {
    y: -20,
    stagger: 0.05,
    duration: 0.1,
  })
  .from(".read__more", {
    x: 100,
    delay: 0.1,
    duration: 0.5,
  })
  .from(".hero__section-img", {
    x: 100,
    delat: 0.3,
    duration: 1,
  });

// let scroller = ScrollSmoother.create();
// scroller.effects("section", { lag: 0.5, speed: 1 });

$(function () {
  $(".slickSlider").slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: ".arrow_vertical-prev1",
    nextArrow: ".arrow_vertical-next1",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

const imgs = document.querySelectorAll(".overlay__title a");
const previewImg = document.querySelector(".preview__img img");

previewImg.src = imgs[0].src;

imgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    e.preventDefault;

    console.log();

    previewImg = img.src;
  });
});

// mobile menu toggler
const hamburger = document.querySelector(".hamburger");
const drawer = document.querySelector(".drawer");
const drawerCloser = document.querySelector(".drawer-closer");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");

  if (drawer.classList.contains("active")) {
    drawer.classList.remove("active");
  } else {
    drawer.classList.add("active");
  }
});

drawerCloser.addEventListener("click", () => {
  hamburger.classList.remove("active");
  drawer.classList.remove("active");
});

// scroll to top animation
window.onscroll = function () {
  scrollToTopReveal();
};

var bottomHeight = document.documentElement.clientHeight;
console.log(bottomHeight);

function scrollToTopReveal() {
  const header = document.querySelector(".header");

  if (
    document.body.scrollTop > bottomHeight ||
    document.documentElement.scrollTop > 0
  ) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
