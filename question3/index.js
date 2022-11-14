const authorInp = document.getElementById("author");
const messageInp = document.getElementById("message");
const sendButton = document.querySelector(".btn");

class Message {
  constructor(author, message) {
    this.author = author;
    this.time = gettime();
    this.message = message;
  }

  toString() {
    return `${this.time} ${this.author}: ${this.message}`;
  }

  toHtml() {
    return `<p>${this.time} ${this.author}: ${this.message}</p></b>`;
  }
}

class Messenger {
  constructor() {
    this.history = [];
    this.historyelement = document.querySelector(`.history`);
  }

  show_history() {
    this.history.forEach((message) => {
      console.log(message.toString());
    });
  }

  send(author, text) {
    const message = new Message(author, text);
    this.history.push(message);
    const p = document.createElement("p");
    p.innerHTML = message.toHtml();
    this.historyelement.appendChild(p);
  }
}

function gettime() {
  let now = new Date();
  return `${now.getHours()}:${now.getMinutes()}`;
}

let messenger = new Messenger("messenger");

sendButton.addEventListener("click", () => {
  const author = authorInp.value;
  const message = messageInp.value;
  authorInp.value = "";
  messageInp.value = "";
  messenger.send(author, message);
});
