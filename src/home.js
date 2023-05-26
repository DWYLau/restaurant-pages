function createHome() {
  let content = document.getElementById("content");
  const tabContent = document.createElement("div");
  tabContent.classList.add("tabcontent");

  const title = document.createElement("h1");
  title.innerHTML = "ABOUT";
  title.classList.add("heading");

  const image = document.createElement("img");
  image.src = "./images/cooking.jpg";
  image.classList.add("image");

  const text = document.createElement("p");
  text.innerHTML =
    "Ho Fat is an authentic chinese takeaway shop located in Manchester. We are here to deliver the best chinese food to your doorstep!";
  text.classList.add("text");

  content.appendChild(tabContent);
  tabContent.appendChild(title);
  tabContent.appendChild(image);
  tabContent.appendChild(text);

  return tabContent;
}

export default createHome;
