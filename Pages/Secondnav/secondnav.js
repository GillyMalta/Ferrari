document.addEventListener("DOMContentLoaded", () => {
//   fetch("../Sidemenu/Sidemenu.HTML")
  fetch("./Pages/Secondnav/secondnav.HTML")
    .then(response => response.text())
    .then(data => {
      document.getElementById("secondNav").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});