function createMenu() {
  const content = document.getElementById("content");
  const box = document.createElement("div");
  box.classList.add("box");

  const title = document.createElement("h1");
  title.innerHTML = "MENU";
  title.classList.add("about");

  content.appendChild(box);
  box.appendChild(title);
}

export default createMenu;
