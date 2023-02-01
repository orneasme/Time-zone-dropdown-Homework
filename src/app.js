function showCityTime(event) {
  if (event.target.value === "Sydney") {
    alert(moment().tz("Australia/Sydney").format("dddd, MMMM D, YYYY h:m A"));
  }
}

let citiesElement = document.querySelector("#cities");
citiesElement.addEventListener("change", showCityTime);
