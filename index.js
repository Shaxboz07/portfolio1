const button = document.querySelector(".button");

button.onmouseover = () => {
  console.log("onmouseover me ?");
};

button.addEventListener("mouseout", () => {
  console.log("onmouseout over me");
});