document.body.addEventListener("pointermove", (e) => {
  const { currentTarget: el, clientX: x, clientY: y } = e;
  const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
  el.style.setProperty('--posX', x - l - w / 2);
  el.style.setProperty('--posY', y - t - h / 2);
})


var hamburgerdiv = document.querySelector(".hamburger");
var mobileLinks = document.querySelector(".mobile-link-holder")
var mybackdrop = document.querySelector(".backdrop")

function dosomething() {
  hamburgerdiv.classList.toggle("showburger")
  mobileLinks.classList.toggle("show-mobile-link-holder")
  mybackdrop.classList.toggle("show-backdrop")
}
