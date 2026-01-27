document.addEventListener("DOMContentLoaded", () => {
//   fetch("../Sidemenu/Sidemenu.HTML")
  fetch("/Pages/Aboutme/aboutme.HTML")
    .then(response => response.text())
    .then(data => {
      document.getElementById("aboutMe").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});