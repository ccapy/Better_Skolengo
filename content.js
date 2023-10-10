fetch("style.css")
  .then(response => response.text())
  .then(css => {
    var style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
  });

  console.log("Thanks4Using!🥰")