class Message {
  constructor(author, message) {
    this.author = author;
    this.message = message;
    this.time = getTime();
  }

  toString() {
    return `${this.time} ${this.author}: ${this.message}`;
  }
}

class Messenger {
  constructor() {
    this.history = [];
  }

  show_history() {
    this.history.forEach((message) => {
      console.log(message.toString());
    });
  }

  send(author, text) {
    if (!author || !text) {
      console.error("Author and text should not be empty.");
      return;
    }
    const message = new Message(author, text);
    this.history.push(message);
  }
}

function getTime() {
  let now = new Date();
  return `${now.getHours()}:${now.getMinutes()}`;
}

let messenger = new Messenger();
messenger.send("Hafiz", "First message");
messenger.send("Mark", "Second message");
messenger.show_history();
