function createMenu() {
  const content = document.getElementById("content");
  const tabContent = document.createElement("div");
  tabContent.classList.add("tabcontent");
  tabContent.id = "menu";

  const title = document.createElement("h1");
  title.innerHTML = "MENU";
  title.classList.add("about");

  content.appendChild(tabContent);
  tabContent.appendChild(title);
}

export default createMenu;
