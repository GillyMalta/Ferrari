setInterval(() => {
  const now = new Date();
  const time = now.toLocaleTimeString("en-GB", { hour12: false });

  output.innerText = time;
}, 1000);

const toggleAll = document.getElementById("master");

toggleAll.addEventListener("change", () => {

    if (toggleAll.checked) {
        document.getElementById("firstNav")       .style.display = "block";
        document.getElementById("secondNav")      .style.display = "flex";
        document.getElementById("header")         .style.display = "block";
        document.getElementById("slideshow")      .style.display = "block";
        document.getElementById("showcaseText")   .style.display = "block"
        document.getElementById("aside")          .style.display = "flex"
        document.getElementById("showcase")       .style.display = "block"
        document.getElementById("mainContainer")  .style.display = "block"
        document.getElementById("footer")         .style.display = "grid"
        document.getElementById("disclaimer")     .style.display = "block"
        document.getElementById("copyright")      .style.display = "flex"
       
    } else {
      document.getElementById("firstNav")         .style.display = "none"
      document.getElementById("secondNav")        .style.display = "none"
      document.getElementById("header")           .style.display = "none"
      document.getElementById("slideshow")        .style.display = "none"
      document.getElementById("showcaseText")     .style.display = "none"
      document.getElementById("aside")            .style.display = "none"
      document.getElementById("showcase")         .style.display = "none"
      document.getElementById("mainContainer")    .style.display = "none"
      document.getElementById("footer")           .style.display = "none"
      document.getElementById("disclaimer")       .style.display = "none"
      document.getElementById("copyright")        .style.display = "none"
    };

}); 

const switch1 = document.getElementById("nav1");

switch1.addEventListener("change", () => {

    if (switch1.checked) {
        document.getElementById("firstNav").style.display = "block";

    } else {
      document.getElementById("firstNav").style.display = "none"
    };

}); 

const switch2 = document.getElementById("nav2");

switch2.addEventListener("change", () => {

    if (switch2.checked) {
        document.getElementById("secondNav").style.display = "flex";

    } else {
      document.getElementById("secondNav").style.display = "none"
    };

});


const switch3 = document.getElementById("nav3");

switch3.addEventListener("change", () => {

    if (switch3.checked) {
        document.getElementById("header").style.display = "block";

    } else {
      document.getElementById("header").style.display = "none"
    };

});

const switch4 = document.getElementById("nav4");

switch4.addEventListener("change", () => {

    if (switch4.checked) {
        document.getElementById("slideshow").style.display = "block";

    } else {
      document.getElementById("slideshow").style.display = "none"
    };

});

const switch5 = document.getElementById("nav5");

switch5.addEventListener("change", () => {

    if (switch5.checked) {
        document.getElementById("showcaseText").style.display = "block"
        document.getElementById("aside").style.display = "flex"
        document.getElementById("showcase").style.display = "block"

    } else {
      document.getElementById("showcaseText").style.display = "none"
      document.getElementById("aside").style.display = "none"
      document.getElementById("showcase").style.display = "none"
    };

});

const switch6 = document.getElementById("nav6");

switch6.addEventListener("change", () => {

    if (switch6.checked) {
        document.getElementById("mainContainer").style.display = "block"

    } else {
      document.getElementById("mainContainer").style.display = "none"
    };

});

const switch7 = document.getElementById("nav7");

switch7.addEventListener("change", () => {

    if (switch7.checked) {
        document.getElementById("footer").style.display = "grid"

    } else {
      document.getElementById("footer").style.display = "none"
    };

});

const switch8 = document.getElementById("nav8");

switch8.addEventListener("change", () => {

    if (switch8.checked) {
        document.getElementById("disclaimer").style.display = "block"

    } else {
      document.getElementById("disclaimer").style.display = "none"
    };

});

const switch9 = document.getElementById("nav9");

switch9.addEventListener("change", () => {

    if (switch9.checked) {
        document.getElementById("copyright").style.display = "flex"

    } else {
      document.getElementById("copyright").style.display = "none"
    };

});