setInterval(() => {
  const now = new Date();
  const time = now.toLocaleTimeString("en-GB", { hour12: false });

  output.innerText = time;
}, 1000);