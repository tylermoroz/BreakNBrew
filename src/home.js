import cafe from './cafe.jpg';

export default function home() {
    const content = document.getElementById('content');
    const homeDiv = document.createElement('div');
    const header = document.createElement('h1');
    const cafeImg = new Image();
    const copy = document.createElement('p');
    const locationDiv = document.createElement('div');
    const locationHead = document.createElement('h3');
    const location = document.createElement('p');
    const hours = document.createElement('p');

    header.textContent = "Break & Brew";
    cafeImg.src = cafe;
    copy.textContent = "Welcome to Break & Brew, we serve breakfast and brewed beverages 24 hours a day. All of our meals come with organic locally sourced ingredients with a wide range of beverages including coffee any way you like it or some of our favorite craft beer and sodas.";

    locationHead.textContent = "Location";
    location.textContent = "321 Hungry Avenue, Hungrytown, Alberta";
    hours.textContent = "Open 24/7 (Holiday hours may differ)";

    locationDiv.appendChild(locationHead);
    locationDiv.appendChild(location);
    locationDiv.appendChild(hours);

    homeDiv.setAttribute('id', 'home-div');
    header.setAttribute('id', 'header');
    cafeImg.setAttribute('id', 'cafe');
    copy.setAttribute('id', 'copy');
    locationDiv.setAttribute('id', 'location');

    cafeImg.classList.add("home");
    header.classList.add("home");
    copy.classList.add("home");
    locationDiv.classList.add("home");

    homeDiv.appendChild(header);
    homeDiv.appendChild(cafeImg);
    homeDiv.appendChild(copy);
    homeDiv.appendChild(locationDiv);
    content.appendChild(homeDiv);

    return content;
};