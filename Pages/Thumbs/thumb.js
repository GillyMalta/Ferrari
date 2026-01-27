const thumb = document.getElementById("thumb");
const largeImg = document.getElementById("largeImg");

thumb.addEventListener("click", () => {
  largeImg.src = thumb.dataset.large;
});
