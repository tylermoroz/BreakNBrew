import Cafe from "./cafe.jpg";

const pageLoad = () => {
  const content = document.getElementById("content");
  const headline = document.createElement("h1");
  const cafeImg = new Image();
  const copy = document.createElement("p");

  headline.textContent = "Welcome to Break N' Brew";
  cafeImg.src = Cafe;
  copy.textContent = "Break N' Brew is a wonderful place to dine!";

  content.appendChild(headline);
  content.appendChild(cafeImg);
  content.appendChild(copy);

  return content;
};

export { pageLoad };
