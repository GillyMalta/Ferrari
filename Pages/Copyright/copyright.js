document.addEventListener("DOMContentLoaded", () => {
//   fetch("../Sidemenu/Sidemenu.HTML")
  fetch("/Pages/Copyright/copyright.HTML")
    .then(response => response.text())
    .then(data => {
      document.getElementById("copyright").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});