function createMenu() {
  let content = document.getElementById("content");
  const tabContent = document.createElement("div");
  tabContent.classList.add("tabcontent");
  tabContent.setAttribute("id", "menu");

  const title = document.createElement("h1");
  title.innerHTML = "MENU";
  title.classList.add("heading");

  const menu = document.createElement("div");
  menu.classList.add("menu-container");

  const imageOne = document.createElement("img");
  const imageTwo = document.createElement("img");
  const imageThree = document.createElement("img");
  const imageFour = document.createElement("img");

  imageOne.classList.add("menu-image");
  imageTwo.classList.add("menu-image");
  imageThree.classList.add("menu-image");
  imageFour.classList.add("menu-image");

  imageOne.src = "./images/image1.jpg";
  imageTwo.src = "./images/image2.jpeg";
  imageThree.src = "./images/image3.jpg";
  imageFour.src = "./images/image4.jpg";

  content.appendChild(tabContent);
  tabContent.appendChild(title);
  tabContent.appendChild(menu);

  menu.appendChild(imageOne);

  menu.appendChild(imageTwo);
  menu.appendChild(imageThree);
  menu.appendChild(imageFour);
}

export default createMenu;
