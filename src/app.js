function showCityTime(event) {
  let formattedDate = "H:mm";
  if (event.target.value === "Sydney") {
    alert(
      moment().tz("Australia/Sydney").format(`it is ${formattedDate} in Sydney`)
    );
  }
  if (event.target.value === "Zürich") {
    alert(moment().tz("Europe/Zurich").format("dddd, MMMM D, YYYY H:mm "));
  }
  if (event.target.value === "Buenos Aires") {
    alert(
      moment().tz("America/Buenos_Aires").format("dddd, MMMM D, YYYY H:mm ")
    );
  }
}

let citiesElement = document.querySelector("#cities");
citiesElement.addEventListener("change", showCityTime);
