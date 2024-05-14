document.getElementById("outer").addEventListener(
  "click",
  function () {
    console.log("Outer div click event - Bubbling phase");
  },
  false
);

document.getElementById("outer").addEventListener(
  "click",
  function () {
    console.log("Outer div click event - Capturing phase");
  },
  true
);

document.getElementById("inner").addEventListener(
  "click",
  function (event) {
    console.log("Inner div click event - Bubbling phase");
  },
  false
);

document.getElementById("inner").addEventListener(
  "click",
  function (event) {
    console.log("Inner div click event - Capturing phase");
  },
  true
);
