(function ziroCross() {

  let fractions = document.querySelectorAll(".fraction");
  let outer = document.querySelector(".outer");
  let p = document.querySelector(".p");
  let cliner = document.querySelector(".cliner");
  let play = document.querySelector(".play");
  let lines = document.querySelector(".lines");

  let newStack = [
    "circle",
    "cross",
    "circle",
    "cross",
    "circle",
    "cross",
    "circle",
    "cross",
    "circle",
  ];

  let obj = {
    topRow: [],
    midRow: [],
    bottomRow: [],
    leftCol: [],
    midCol: [],
    rightCol: [],
    firstCross: [],
    secondCross: [],
  };

  let winStackLine = new Map(Object.entries(obj));
  let stack = [...newStack];

  play.addEventListener("click", () => {
    cliner.style.display = "none";
    stack = [...newStack];
    winStackLine = new Map(Object.entries(obj));
    p.textContent = "Goes first";
    outer.children[0].textContent = "";
    outer.children[0].className = stack[0];
    lines.childNodes.forEach((line) => {
      if (line.className) line.style.display = "none";
    });
    fractions.forEach((item) => {
      if (item.firstChild) {
        item.removeChild(item.firstChild);
      }
    });
  });

  fractions.forEach((item) => {
    let subject = document.createElement("div");
    item.addEventListener("click", function start() {
      if (!stack.length) return;
      if (item.children.length) return;
      outer.children[0].className = stack[1];
      p.textContent = "Now";
      subject.className = stack[0];
      stack.shift();
      item.append(subject);
      if (item.children[0].className === "circle")
        item.children[0].setAttribute("data", "0");
      if (item.children[0].className === "cross")
        item.children[0].setAttribute("data", "1");
      if (item.id === "0") {
        winStackLine.set("topRow", [
          ...winStackLine.get("topRow"),
          item.children[0].getAttribute("data"),
        ]);
        winStackLine.set("leftCol", [
          ...winStackLine.get("leftCol"),
          item.children[0].getAttribute("data"),
        ]);
        winStackLine.set("firstCross", [
          ...winStackLine.get("firstCross"),
          item.children[0].getAttribute("data"),
        ]);
      }
      if (item.id === "1") {
        winStackLine.set("topRow", [
          ...winStackLine.get("topRow"),
          item.children[0].getAttribute("data"),
        ]);
        winStackLine.set("midCol", [
          ...winStackLine.get("midCol"),
          item.children[0].getAttribute("data"),
        ]);
      }
      if (item.id === "2") {
        winStackLine.set("topRow", [
          ...winStackLine.get("topRow"),
          item.children[0].getAttribute("data"),
        ]);
        winStackLine.set("rightCol", [
          ...winStackLine.get("rightCol"),
          item.children[0].getAttribute("data"),
        ]);
        winStackLine.set("secondCross", [
          ...winStackLine.get("secondCross"),
          item.children[0].getAttribute("data"),
        ]);
      }
      if (item.id === "3") {
        winStackLine.set("leftCol", [
          ...winStackLine.get("leftCol"),
          item.children[0].getAttribute("data"),
        ]);
        winStackLine.set("midRow", [
          ...winStackLine.get("midRow"),
          item.children[0].getAttribute("data"),
        ]);
      }
      if (item.id === "4") {
        winStackLine.set("midCol", [
          ...winStackLine.get("midCol"),
          item.children[0].getAttribute("data"),
        ]);
        winStackLine.set("midRow", [
          ...winStackLine.get("midRow"),
          item.children[0].getAttribute("data"),
        ]);
        winStackLine.set("secondCross", [
          ...winStackLine.get("secondCross"),
          item.children[0].getAttribute("data"),
        ]);
        winStackLine.set("firstCross", [
          ...winStackLine.get("firstCross"),
          item.children[0].getAttribute("data"),
        ]);
      }
      if (item.id === "5") {
        winStackLine.set("midRow", [
          ...winStackLine.get("midRow"),
          item.children[0].getAttribute("data"),
        ]);
        winStackLine.set("rightCol", [
          ...winStackLine.get("rightCol"),
          item.children[0].getAttribute("data"),
        ]);
      }
      if (item.id === "6") {
        winStackLine.set("bottomRow", [
          ...winStackLine.get("bottomRow"),
          item.children[0].getAttribute("data"),
        ]);
        winStackLine.set("leftCol", [
          ...winStackLine.get("leftCol"),
          item.children[0].getAttribute("data"),
        ]);
        winStackLine.set("secondCross", [
          ...winStackLine.get("secondCross"),
          item.children[0].getAttribute("data"),
        ]);
      }
      if (item.id === "7") {
        winStackLine.set("bottomRow", [
          ...winStackLine.get("bottomRow"),
          item.children[0].getAttribute("data"),
        ]);
        winStackLine.set("midCol", [
          ...winStackLine.get("midCol"),
          item.children[0].getAttribute("data"),
        ]);
      }
      if (item.id === "8") {
        winStackLine.set("bottomRow", [
          ...winStackLine.get("bottomRow"),
          item.children[0].getAttribute("data"),
        ]);
        winStackLine.set("rightCol", [
          ...winStackLine.get("rightCol"),
          item.children[0].getAttribute("data"),
        ]);
        winStackLine.set("firstCross", [
          ...winStackLine.get("firstCross"),
          item.children[0].getAttribute("data"),
        ]);
      }

      winStackLine.forEach((value, key) => {
        if (
          value.length === 3 &&
          value.reduce((prev, item) => Number(prev) + Number(item)) === 3
        ) {
          p.textContent = "won!";
          outer.children[0].className = "cross";
          cliner.style.display = "block";
          lines.childNodes.forEach((item) => {
            if (key === item.className) {
              item.style.display = "block";
            }
          });
          return;
        }

        if (
          value.length === 3 &&
          value.reduce((prev, item) => Number(prev) + Number(item)) === 0
        ) {
          p.textContent = "won!";
          outer.children[0].className = "circle";
          cliner.style.display = "block";
          lines.childNodes.forEach((item) => {
            if (key === item.className) {
              item.style.display = "block";
            }
          });
          return;
        }
      });
      if (!stack.length && p.textContent !== "won!") {
        outer.children[0].textContent = "Omg";
        p.textContent = "";
        cliner.style.display = "block";
        return;
      }
    });
  });

  window.addEventListener("orientationChange", (e) => {
    e.preventDefault();
  });
})()

