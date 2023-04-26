//element를 ID로 가져오기
//const title = document.getElementById("title");

//element를 css방식으로 검색
const h1 = document.querySelector(".title h1");
const title2 = document.querySelectorAll(".title h1");

//event listener1
// h1.addEventListener("mouseenter", handleTitleClick);

function handleTitleClick() {
  //   if (h1.style.color !== "blue") {
  //     h1.style.color = "blue";
  //   } else {
  //     h1.style.color = "tomato";
  //   }
  /////////////////////////////////////
  //   const clickedClass = "clicked";
  //   if (h1.classList.contains(clickedClass)) {
  //     h1.classList.remove(clickedClass);
  //   } else {
  //     h1.className.add(clickedClass);
  //   } //css에서 받아오는 방법
  /////////////////////////////////////
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);

//event listener window
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
  alert("copier!");
}
function handleWindowOffline() {
  alert("SOS no WIFI");
}
function handleWindowOnline() {
  alert("All GOOD");
}
// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);
