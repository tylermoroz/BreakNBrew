import Cafe from "./assets/cafe.jpg";

const homePage = () => {
  const content = document.getElementById("content");
  const homeDiv = document.createElement("div");
  const headline = document.createElement("h1");
  const cafeImg = new Image();
  const copy = document.createElement("p");
  const hours = document.createElement("div");
  const hoursHead = document.createElement("h2");
  const sundayHours = document.createElement("p");
  const mondayHours = document.createElement("p");
  const tuesdayHours = document.createElement("p");
  const wednesdayHours = document.createElement("p");
  const thursdayHours = document.createElement("p");
  const fridayHours = document.createElement("p");
  const saturdayHours = document.createElement("p");
  const locationDiv = document.createElement("div");
  const locationHead = document.createElement("h2");
  const address = document.createElement("p");

  headline.textContent = "Welcome to Break N' Brew";
  cafeImg.src = Cafe;
  copy.textContent = "Break N' Brew, Edmonton's premier rustic diner!";
  hoursHead.textContent = "Hours";
  sundayHours.textContent = "Sunday: 8am - 4pm";
  mondayHours.textContent = "Monday: 8am - 11pm";
  tuesdayHours.textContent = "Tuesday: 8am - 11pm";
  wednesdayHours.textContent = "Wednesday: 8am - 11pm";
  thursdayHours.textContent = "Thursday: 8am - 11pm";
  fridayHours.textContent = "Friday: 8am - 1am";
  saturdayHours.textContent = "Saturday: 8am - 1am";
  locationHead.textContent = "Location";
  address.textContent = "12345 200 Street, Edmonton, Alberta";

  content.appendChild(homeDiv);
  homeDiv.appendChild(headline);
  homeDiv.appendChild(cafeImg);
  homeDiv.appendChild(copy);
  homeDiv.appendChild(hours);
  homeDiv.appendChild(locationDiv);
  hours.appendChild(hoursHead);
  hours.appendChild(sundayHours);
  hours.appendChild(mondayHours);
  hours.appendChild(tuesdayHours);
  hours.appendChild(wednesdayHours);
  hours.appendChild(thursdayHours);
  hours.appendChild(fridayHours);
  hours.appendChild(saturdayHours);
  locationDiv.appendChild(locationHead);
  locationDiv.appendChild(address);

  return content;
};

export { homePage };
