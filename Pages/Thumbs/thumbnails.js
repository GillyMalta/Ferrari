document.querySelectorAll("aside .thumb").forEach(thumb => {
  thumb.addEventListener("click", () => {
    showcase.innerHTML = "";

    const img = document.createElement("img");
    img.src = thumb.dataset.large;
    showcase.appendChild(img);
  });
});
