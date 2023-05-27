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

  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  const div4 = document.createElement("div");

  const image1 = document.createElement("img");
  const image2 = document.createElement("img");
  const image3 = document.createElement("img");
  const image4 = document.createElement("img");

  const label1 = document.createElement("h2");
  label1.innerHTML = "Sorrowful Rice";
  label1.classList.add("label");

  const label2 = document.createElement("h2");
  label2.innerHTML = "Cart Noodle";
  label2.classList.add("label");

  const label3 = document.createElement("h2");
  label3.innerHTML = "Exploding Beef Balls";
  label3.classList.add("label");

  const label4 = document.createElement("h2");
  label4.innerHTML = "Heart";
  label4.classList.add("label");

  image1.classList.add("menu-image");
  image2.classList.add("menu-image");
  image3.classList.add("menu-image");
  image4.classList.add("menu-image");

  image1.src = "./images/image1.jpg";
  image2.src = "./images/image2.jpeg";
  image3.src = "./images/image3.jpg";
  image4.src = "./images/image4.jpg";

  content.appendChild(tabContent);
  tabContent.appendChild(title);
  tabContent.appendChild(menu);

  menu.appendChild(div1);
  menu.appendChild(div2);
  menu.appendChild(div3);
  menu.appendChild(div4);

  div1.appendChild(image1);
  div1.appendChild(label1);
  div2.appendChild(image2);
  div2.appendChild(label2);
  div3.appendChild(image3);
  div3.appendChild(label3);
  div4.appendChild(image4);
  div4.appendChild(label4);
}

export default createMenu;
