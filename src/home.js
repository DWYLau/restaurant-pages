function createHeader() {
  const content = document.getElementById("content");
  const header = document.createElement("header");
  header.classList.add("header");

  const title = document.createElement("h1");
  title.innerHTML = "HO FAT";
  title.classList.add("title");

  const list = document.createElement("ul");
  const home = document.createElement("li");
  const menu = document.createElement("li");
  const contact = document.createElement("li");
  home.innerHTML = "HOME";
  menu.innerHTML = "MENU";
  contact.innerHTML = "CONTACT";

  list.appendChild(home);
  list.appendChild(menu);
  list.appendChild(contact);

  content.appendChild(header);
  header.appendChild(title);
  header.appendChild(list);
}

function createHome() {
  const content = document.getElementById("content");
  const box = document.createElement("div");
  box.classList.add("box");

  const title = document.createElement("h1");
  title.innerHTML = "ABOUT";
  title.classList.add("about");

  content.appendChild(box);
  box.appendChild(title);
}

function loadHome() {
  createHeader();
  createHome();
}

export default loadHome;
