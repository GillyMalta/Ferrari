setInterval(() => {
  const now = new Date();
  const time = now.toLocaleTimeString("en-GB", { hour12: false });

  output.innerText = time;
}, 1000);

const switch1 = document.getElementById("nav1");

switch1.addEventListener("change", () => {
  console.log(switch1.checked ? "on" : "off");

    if (switch1.checked) {
      console.log("IT IS ON!!")
        document.getElementById("firstNav").style.display = "block";

    } else {
      console.log("IT IS OFF!!")
      document.getElementById("firstNav").style.display = "none"
    };

}); 

const switch2 = document.getElementById("nav2");

switch2.addEventListener("change", () => {
  console.log(switch2.checked ? "on" : "off");

    if (switch2.checked) {
      console.log("IT IS ON!!")
        document.getElementById("secondNav").style.display = "flex";

    } else {
      console.log("IT IS OFF!!")
      document.getElementById("secondNav").style.display = "none"
    };

});


const switch3 = document.getElementById("nav3");

switch3.addEventListener("change", () => {
  console.log(switch1.checked ? "on" : "off");

    if (switch3.checked) {
      console.log("IT IS ON!!")
        document.getElementById("header").style.display = "block";

    } else {
      console.log("IT IS OFF!!")
      document.getElementById("header").style.display = "none"
    };

});

const switch4 = document.getElementById("nav4");

switch4.addEventListener("change", () => {
  console.log(switch4.checked ? "on" : "off");

    if (switch4.checked) {
      console.log("IT IS ON!!")
        document.getElementById("slideshow").style.display = "block";

    } else {
      console.log("IT IS OFF!!")
      document.getElementById("slideshow").style.display = "none"
    };

});

const switch5 = document.getElementById("nav5");

switch5.addEventListener("change", () => {
  console.log(switch5.checked ? "on" : "off");

    if (switch5.checked) {
      console.log("IT IS ON!!")
        document.getElementById("showcaseText").style.display = "block"
        document.getElementById("aside").style.display = "flex"
        document.getElementById("showcase").style.display = "block"

    } else {
      console.log("IT IS OFF!!")
      document.getElementById("showcaseText").style.display = "none"
      document.getElementById("aside").style.display = "none"
      document.getElementById("showcase").style.display = "none"
    };

});

const switch6 = document.getElementById("nav6");

switch6.addEventListener("change", () => {
  console.log(switch5.checked ? "on" : "off");

    if (switch6.checked) {
      console.log("IT IS ON!!")
        document.getElementById("mainContainer").style.display = "block"

    } else {
      console.log("IT IS OFF!!")
      document.getElementById("mainContainer").style.display = "none"
    };

});

const switch7 = document.getElementById("nav7");

switch7.addEventListener("change", () => {
  console.log(switch5.checked ? "on" : "off");

    if (switch7.checked) {
      console.log("IT IS ON!!")
        document.getElementById("footer").style.display = "grid"

    } else {
      console.log("IT IS OFF!!")
      document.getElementById("footer").style.display = "none"
    };

});

const switch8 = document.getElementById("nav8");

switch8.addEventListener("change", () => {
  console.log(switch5.checked ? "on" : "off");

    if (switch8.checked) {
      console.log("IT IS ON!!")
        document.getElementById("disclaimer").style.display = "block"

    } else {
      console.log("IT IS OFF!!")
      document.getElementById("disclaimer").style.display = "none"
    };

});

const switch9 = document.getElementById("nav9");

switch9.addEventListener("change", () => {
  console.log(switch5.checked ? "on" : "off");

    if (switch9.checked) {
      console.log("IT IS ON!!")
        document.getElementById("copyright").style.display = "flex"

    } else {
      console.log("IT IS OFF!!")
      document.getElementById("copyright").style.display = "none"
    };

});