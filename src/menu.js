import belgianWaff from "./assets/belgianWaff.jpg";
import benny from "./assets/benny.jpg";
import breakfastWaff from "./assets/breakfastWaffle.jpeg";
import chickWaff from "./assets/chickWaff.jpg";
import cinnBun from "./assets/cinnBun.jpg";
import frenchT from "./assets/frenchToast.jpg";
import huevos from "./assets/huevos.jpg";
import pulledPork from "./assets/pulledPorkHash.jpg";
import veganSausage from "./assets/veganSausageTofu.jpg";

const menu = () => {
  const content = document.getElementById("content");
  const head = document.createElement("h1");

  head.textContent = "Food";
  content.appendChild(head);

  return content;
};

export { menu };
