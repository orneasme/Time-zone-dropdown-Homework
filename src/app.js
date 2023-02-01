function showCityTime(event) {
  let formattedDateAU = moment()
    .tz("Australia/Sydney")
    .format("dddd, MMMM D, YYYY, hh:mm A");
  let formattedDateZU = moment()
    .tz("Zurich")
    .format("dddd, MMMM D, YYYY, hh:mm A ");
  let formattedDateBA = moment()
    .tz("America/Buenos_Aires")
    .format("dddd, MMMM D, YYYY, hh:mm A ");

  if (event.target.value === "Sydney") {
    alert(`It is ${formattedDateAU} in Sydney`);
  }
  if (event.target.value === "Zürich") {
    alert(`It is  ${formattedDateZU} in Zürich`);
  }
  if (event.target.value === "Buenos Aires") {
    alert(`It is ${formattedDateBA} in Buenos Aires`);
  }
}

let citiesElement = document.querySelector("#cities");
citiesElement.addEventListener("change", showCityTime);
