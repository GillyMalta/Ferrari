document.addEventListener("DOMContentLoaded", () => {
//   fetch("../Sidemenu/Sidemenu.HTML")
  fetch("/aside.HTML")
    .then(response => response.text())
    .then(data => {
      document.getElementById("aside").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});