document.addEventListener("DOMContentLoaded", () => {
//   fetch("../Sidemenu/Sidemenu.HTML")
  fetch("/slideshow.HTML")
    .then(response => response.text())
    .then(data => {
      document.getElementById("slideshow").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});