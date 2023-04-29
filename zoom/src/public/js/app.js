const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");

room.hidden = true;

let roomName;

function showRoom() {
  room.hidden = false;
  welcome.hidden = true;
  const h3 = document.querySelector("h3");
  h3.innerText = `Room ${roomName}`;
}
function handleRoomSubmit(event) {
  event.preventDefault();
  const input = form.querySelector("input");
  socket.emit("enter_room", input.value, showRoom);
  roomName = input.value;
  input.value = "  ";
}
form.addEventListener("submit", handleRoomSubmit);

// const socket = new WebSocket("ws://" + window.location.host);
// const messageList = document.querySelector("ul");
// const messageForm = document.querySelector("#message");
// const nickFrom = document.querySelector("#nick");

// function makeMessae(type, payload) {
//   const msg = { type, payload };
//   return JSON.stringify(msg);
// }

// socket.addEventListener("open", () => {
//   console.log("Connected to Server ✅");
// });

// socket.addEventListener("message", (message) => {
//   const li = document.createElement("li");
//   li.innerText = message.data;
//   messageList.append(li);
//   console.log("New message: ", message.data);
// });

// socket.addEventListener("close", () => {
//   console.log("Disconnected to Server ❌");
// });

// function handleSubmit(event) {
//   event.preventDefault();
//   const input = messageForm.querySelector("input");
//   socket.send(makeMessae("new_message", input.value)); //Front에서 Back으로 메시지를 보냄
//   input.value = "";
// }
// messageForm.addEventListener("submit", handleSubmit);

// function handleNickSubmit(event) {
//   event.preventDefault();
//   const input = nickFrom.querySelector("input");
//   socket.send(makeMessae("nickname", input.value));
//   input.value = "";
// }
// nickFrom.addEventListener("submit", handleNickSubmit);
