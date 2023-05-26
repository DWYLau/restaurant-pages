function createMenu() {
  let content = document.getElementById("content");
  const tabContent = document.createElement("div");
  tabContent.classList.add("tabcontent");
  tabContent.setAttribute("id", "menu");

  const title = document.createElement("h1");
  title.innerHTML = "MENU";
  title.classList.add("heading");

  content.appendChild(tabContent);
  tabContent.appendChild(title);
}

export default createMenu;
