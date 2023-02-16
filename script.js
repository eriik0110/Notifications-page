const readBtn = document.getElementById("read");
const num = document.getElementById("num");
const dot = document.querySelectorAll(".unseen span");

readBtn.addEventListener("click", () => {
  num.textContent = 0;

  document.querySelectorAll(".single-box").forEach((e) => {
    console.log(e);
    console.log(e.classList);

    e.classList.remove("unseen");
  });

  dot.forEach((e) => e.remove());
});
