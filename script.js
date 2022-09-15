function scrollUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

function toggleNav() {
    const nav = document.querySelector(".nav");
    nav.classList.toggle("hide");
}