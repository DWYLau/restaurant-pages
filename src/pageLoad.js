import createHome from "./home.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";

function createHeader() {
  let body = document.querySelector(".body");
  let header = document.createElement("header");
  header.classList.add("header");

  let title = document.createElement("h1");
  title.classList.add("title");
  title.innerHTML = "HO FAT";

  let list = document.createElement("ul");
  let home = document.createElement("li");
  let menu = document.createElement("li");
  let contact = document.createElement("li");
  home.innerHTML = "HOME";
  menu.innerHTML = "MENU";
  contact.innerHTML = "CONTACT";

  home.classList.add("tablink");
  menu.classList.add("tablink");
  contact.classList.add("tablink");

  list.appendChild(home);
  list.appendChild(menu);
  list.appendChild(contact);
  header.appendChild(title);
  header.appendChild(list);
  body.appendChild(header);

  home.addEventListener("click", function () {
    removeContent();
    createHome();
  });

  menu.addEventListener("click", function () {
    removeContent();
    createMenu();
  });

  contact.addEventListener("click", function () {
    removeContent();
    createContact();
  });
}

function removeContent() {
  let tabcontent = document.querySelector(".tabcontent");
  if (tabcontent.parentNode) {
    tabcontent.parentNode.removeChild(tabcontent);
  }
}

function initialLoad() {
  createHeader();
  createHome(); // default load
}

export { initialLoad };
