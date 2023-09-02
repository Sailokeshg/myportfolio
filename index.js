document.querySelector(".mode").addEventListener("click", function () {
  var curr = document.querySelector(".style-link").getAttribute("href");
  if (curr == "css/style.css") {
    document
      .querySelector(".mode")
      .setAttribute(
        "src",
        "https://cdn-icons-png.flaticon.com/512/2261/2261170.png"
      );
    document
      .querySelector(".style-link")
      .setAttribute("href", "css/style2.css");
  } else {
    document
      .querySelector(".mode")
      .setAttribute(
        "src",
        "https://cdn-icons-png.flaticon.com/128/2925/2925464.png"
      );
    document.querySelector(".style-link").setAttribute("href", "css/style.css");
  }
});
