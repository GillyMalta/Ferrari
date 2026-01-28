document.addEventListener("DOMContentLoaded", () => {
//   fetch("../Sidemenu/Sidemenu.HTML")
  fetch("/Pages/Contactme/contactme.HTML")
    .then(response => response.text())
    .then(data => {
      document.getElementById("contact-form").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});