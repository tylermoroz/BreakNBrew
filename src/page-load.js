const pageLoad = () => {
  const content = document.getElementById("content");
  const headline = document.createElement("p");

  headline.textContent = "Welcome to Break N' Brew";

  content.appendChild(headline);

  return content;
};

export { pageLoad };
