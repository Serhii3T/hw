// const content = document.getElementById("content");
// const cont = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const divs = document.getElementsByTagName("div");
// const divByClass = document.getElementsByClassName("content");
// const text = document.createElement("p");
// text.textContent = "Test Test Test";
// content.appendChild(text);

// const createList = arr => {
//   const list = document.createElement("ul");
//   list.classList.add("list");
//   for (let i in arr) {
//     const item = document.createElement("li");
//     item.textContent = arr[i];
//     item.classList.add("list__item");
//     list.appendChild(item);
//   }
//   return list;
// };

// const newList = createList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// content.appendChild(newList);

// const content = document.getElementById("content");
// const errorBtn = document.getElementById("showError");
// const text = [
//   "User pending action",
//   "User has to be admin",
//   "Internal Server Error",
//   "Updated members status"
// ];

// const status = ["Info", "Warning", "Error", "Success"];
// const createMessage = (t, s) => {
//   const elem = document.createElement("span");
//   elem.textContent = "close";
//   const alertMessage = document.createElement("div");
//   alertMessage.className = "message";

//   let messageClass;
//   switch (s) {
//     case "Info":
//       messageClass = "message--info";
//       break;
//     case "Warning":
//       messageClass = "message--warning";
//       break;
//     case "Error":
//       messageClass = "message--error";
//       break;
//     case "Success":
//       messageClass = "message--success";
//       break;
//     default:
//       messageClass = "";
//       break;
//   }

//   alertMessage.classList.add(messageClass);
//   alertMessage.innerHTML = `<p> <strong>${s}:</strong> ${s} </p>`;

//   const closeEl = document.createElement("span");
//   closeEl.className = "message__close";
//   closeEl.classList.add("additional");
//   closeEl.textContent = "close";
//   closeEl.addEventListener("click", e => closeEl.parentElement.remove());

//   alertMessage.append(closeEl);
//   return alertMessage;
// };

// const showMessage = (t, s) => {
//   const newMessage = createMessage(t, s);
//   content.appendChild(newMessage);
//   //setTimeout(() => newMessage.remove(), 3000);
// };

// errorBtn.addEventListener("click", event => showMessage(text[0], status[0]));
// errorBtn.addEventListener("click", event => showMessage(text[1], status[1]));
// errorBtn.addEventListener("click", event => showMessage(text[2], status[2]));
// errorBtn.addEventListener("click", event => showMessage(text[3], status[3]));

// content.append(errorBtn);

//Создать страницу, которая выводит нумерованный список песен:

var playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN"
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY"
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD"
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER"
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER"
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK"
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU"
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN"
  }
];
const ul = document.createElement("ul");
const mainDiv = document.getElementById("content");
mainDiv.append(ul);
for (let i in playList) {
  const li = document.createElement("li");
  const pBtn = document.createElement("p");
  pBtn.append(playList[i].author);
  pBtn.append(" : ");
  pBtn.append(playList[i].song);
  li.append(pBtn);
  ul.append(li);
}
//2. Создать HTML-страницу с кнопкой "Открыть"
// и модальным окном. На модальном окне должен быть
// текст и кнопка "Закрыть". Изначально модальное
// окно не отображается. При клике на кнопку
// "Открыть" появляется модальное окно, на
// кнопку "Закрыть" – исчезает.

const btn = document.createElement("button");
const p = document.createElement("p");
p.textContent = "Open";
btn.append(p);
mainDiv.append(btn);
btn.addEventListener("click", () => {
  const div = document.createElement("div");
  div.setAttribute("id", "modal__div");
  const p = document.createElement("p");
  p.textContent = "Noting to read here, just close it";
  div.append(p);
  const innerBtn = document.createElement("button");
  const innerBtnP = document.createElement("p");
  innerBtnP.textContent = "Close";
  innerBtn.append(innerBtnP);
  div.append(innerBtn);
  mainDiv.append(div);
  btn.disabled = true;
  innerBtn.addEventListener("click", () => {
    div.remove();
    btn.disabled = false;
  });
});
// Создать HTML-страницу со светофором и кнопкой,
// которая переключает светофор на следующий цвет.
const trafficLights = document.querySelector("div.traffic__light");

const redlight = document.getElementById("red");
const yellowlight = document.getElementById("yellow");
const greenlight = document.getElementById("green");
const butn = document.getElementById("btn");

butn.addEventListener("click", function() {
  if (redlight.classList.contains("traffic__red")) {
    redlight.classList.remove("traffic__red");
    yellowlight.classList.add("traffic__yellow");
  } else if (yellowlight.classList.contains("traffic__yellow")) {
    yellowlight.classList.remove("traffic__yellow");
    greenlight.classList.add("traffic__green");
  } else if (greenlight.classList.contains("traffic__green")) {
    greenlight.classList.remove("traffic__green");
    redlight.classList.add("traffic__red");
  }
});