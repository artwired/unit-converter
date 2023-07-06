const convertBtn = document.getElementById("convert-btn");
const unitInputField = document.getElementById("num-input-field");
const conversionCard = document.getElementById("conversions-section");

let conversionObjects = [
  {
    title: "Length (Meters/Feet)",
    baseMeasurement: 3.281,
    idTag: "length-container",
    unitOne: "meters",
    unitTwo: "feet",
  },
  {
    title: "Volume (Liters/Gallons)",
    baseMeasurement: 0.264,
    idTag: "volume-container",
    unitOne: "liters",
    unitTwo: "gallons",
  },
  {
    title: "Mass (Kilograms/Pounds)",
    baseMeasurement: 2.204,
    idTag: "mass-container",
    unitOne: "kilos",
    unitTwo: "pounds",
  },
];

convertBtn.addEventListener("click", function () {
  const unitInputValue = unitInputField.value;
  let cards = "";

  for (let i = 0; i < conversionObjects.length; i++) {
    cards += `<div id=${conversionObjects[i].idTag} class="unit-container">
                <h3>${conversionObjects[i].title}</h3>
                <p class="conversions">${unitInputValue} ${
      conversionObjects[i].unitOne
    } = ${(conversionObjects[i].baseMeasurement * unitInputValue).toFixed(3)} ${
      conversionObjects[i].unitTwo
    } | ${unitInputValue} ${conversionObjects[i].unitTwo} = ${(
      unitInputValue / conversionObjects[i].baseMeasurement
    ).toFixed(3)} ${conversionObjects[i].unitOne}</p>
            </div>`;
  }

  conversionCard.innerHTML = cards;
});
