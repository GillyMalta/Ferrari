document.addEventListener("DOMContentLoaded", () => {
//   fetch("../Sidemenu/Sidemenu.HTML")
  fetch("./Pages/Disclaimer/disclaimer.HTML")
    .then(response => response.text())
    .then(data => {
      document.getElementById("disclaimer").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});