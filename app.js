// set initial count
let count = 0;

// Select value and button

const value = document.querySelector("#value");
const btn = document.querySelectorAll(".btn");
const heading = document.querySelector("h1");

btn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "white";
      document.body.style.backgroundColor = "green";
      heading.style.color = "white";
    } else if (count < 0) {
      value.style.color = "white";
      document.body.style.backgroundColor = "red";
      heading.style.color = "white";
    } else {
      value.style.color = "#222";
      document.body.style.backgroundColor = "white";
      heading.style.color = "black";
    }
    value.textContent = count;
  });
});
