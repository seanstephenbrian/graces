function scrollUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

function toggleNav() {
    const nav = document.querySelector(".nav");
    nav.classList.toggle("hide");
}

// set min body height to inner window height:

// addEventListener('resize', () => {
//   if (window.innerWidth < 600) {
//     const windowHeight = window.innerHeight + "px";
//     document.body.style.minHeight = windowHeight;
//   } else {
//     document.body.style.minHeight = '100vh';
//   }
// });

function setBodyHeight() {
  const windowHeight = window.innerHeight + "px";
  document.body.style.minHeight = windowHeight;
}

setBodyHeight();

addEventListener('resize', () => {
  setBodyHeight();
});