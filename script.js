const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

var tl = gsap.timeline();
tl.to(".sidebar", {
  left: "0%",
  // duration: 1,
});

// tl.to(".sidebar div", {
//   x: 100,
//   stagger: true,
// });

tl.pause();

menu.addEventListener("click", function () {
  tl.play();
});
close.addEventListener("click", function () {
  tl.reverse();
});

gsap.to(".p4-elem", {
  transform: "translate(-100%)",
  duration: 5,
  repeat: -1,
  ease: "none",
});
