// canvas element를 가져와서 context를 2d로 설정
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn");

// css에 canvas의 크기를 정의한만큼 js에도 정의
canvas.width = 800;
canvas.height = 800;
ctx.lineCap = "round";

// const colors = [
//   "#1abc9c",
// ];

ctx.lineWidth = lineWidth.value;
let isPainting = false;
function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting(event) {
  isPainting = true;
}
function cancelPainting(event) {
  isPainting = false;
  ctx.beginPath();
}
function onCanvasClick(event) {
  if (isFilling) {
    ctx.fillRect(0, 0, 800, 800);
  }
}
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);

function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
}
lineWidth.addEventListener("change", onLineWidthChange);

function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}
color.addEventListener("change", onColorChange);

function onColorClick(event) {
  ctx.strokeStyle = event.target.dataset.color;
  ctx.fillStyle = event.target.dataset.color;
  color.value = event.target.dataset.color;
}
colorOptions.forEach((color) => color.addEventListener("click", onColorClick));

let isFilling = false;
function onModeClick(event) {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "Draw";
  }
}
modeBtn.addEventListener("click", onModeClick);

function onDestroyClick(event) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 800, 800);
}
destroyBtn.addEventListener("click", onDestroyClick);

function onEraserClick(event) {
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "Fill";
}
eraserBtn.addEventListener("click", onEraserClick);

const fileInput = document.getElementById("file");

function onFileChange(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, 800, 800);
    fileInput.value = null;
  };
}
fileInput.addEventListener("change", onFileChange);

const textInput = document.getElementById("text");
function onDoubleClick(event) {
  const text = textInput.value;
  if (text !== "") {
    ctx.save();
    ctx.lineWidth = 1;
    ctx.font = "68px serif";
    ctx.fillText(text, event.offsetX, event.offsetY);
    ctx.restore();
  }
}
canvas.addEventListener("dblclick", onDoubleClick);

const save = document.getElementById("save");

function onSaveClick() {
  const url = canvas.toDataURL();
  const a = document.createElement("a");
  a.href = url;
  a.download = "myDrawing.png";
  a.click();
}
save.addEventListener("click", onSaveClick);
//////////////////////////////////////
// function onClick(event) {
//   ctx.beginPath();
//   ctx.moveTo(0, 0);
//   const color = colors[Math.floor(Math.random() * colors.length)];
//   ctx.strokeStyle = color;
//   ctx.lineTo(event.offsetX, event.offsetY);
//   ctx.stroke();
// }
// canvas.addEventListener("mousemove", onClick);
//////////////////////////////////////
// ctx.rect(50, 50, 100, 100);
// ctx.fill();

// ctx.beginPath(); // 새로운 경로를 설정
// ctx.rect(150, 150, 100, 100);
// ctx.fillStyle = "red";
// ctx.fill();
//////////////////////////////////////
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 50);
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// ctx.fill();
//////////////////////////////////////
// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth = 2;
// ctx.fillRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);

// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fill();
//////////////////////////////////////
// ctx.arc(x,y,radius,startAngle,endAngle) : endAngle이 2*Math.PI인 경우 한바퀴를 돌아 원을 생성
//////////////////////////////////////
