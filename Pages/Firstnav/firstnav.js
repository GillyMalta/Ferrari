document.addEventListener("DOMContentLoaded", () => {
//   fetch("../Sidemenu/Sidemenu.HTML")
  fetch("./Pages/Firstnav/firstnav.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("firstNav").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});