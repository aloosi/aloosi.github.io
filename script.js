// Mobile nav toggle (used by all non-home pages)
(() => {
  const togglebtn = document.querySelector(".togglebtn");
  const nav = document.querySelector(".navlinks");

  if (!togglebtn || !nav) return;

  togglebtn.addEventListener("click", function () {
    this.classList.toggle("click");
    nav.classList.toggle("open");
  });
})();

