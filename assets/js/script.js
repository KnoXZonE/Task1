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
