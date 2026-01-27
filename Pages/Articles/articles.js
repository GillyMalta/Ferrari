document.addEventListener("DOMContentLoaded", () => {
//   fetch("../Sidemenu/Sidemenu.HTML")
  fetch("/articles.HTML")
    .then(response => response.text())
    .then(data => {
      document.getElementById("articles").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});