function createContact() {
  let content = document.getElementById("content");
  const tabContent = document.createElement("div");
  tabContent.classList.add("tabcontent");

  const title = document.createElement("h1");
  title.innerHTML = "CONTACT";
  title.classList.add("heading");

  const phoneDiv = document.createElement("div");
  phoneDiv.classList.add("phone");

  const image = document.createElement("img");
  image.src = "./images/phone-dial.svg";
  image.classList.add("phoneImg");

  const para = document.createElement("p");
  para.innerHTML = "0123456789";
  para.classList.add("phoneNum");

  const map = document.createElement("img");
  map.src = "./images/manchester.png";
  map.classList.add("map");

  content.appendChild(tabContent);
  tabContent.appendChild(title);
  tabContent.appendChild(map);
  tabContent.appendChild(phoneDiv);
  phoneDiv.appendChild(image);
  phoneDiv.appendChild(para);
}

export default createContact;
