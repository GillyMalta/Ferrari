document.addEventListener("DOMContentLoaded", () => {
//   fetch(".Pages/Sidemenu/Sidemenu.HTML")
  fetch("Pages/Sidemenu/sidemenu.HTML")
    .then(response => response.text())
    .then(data => {
      document.getElementById("leftSideMenu").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});