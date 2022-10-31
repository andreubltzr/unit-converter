/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const numberEl = document.getElementById("convert-num");
const convertBtn = document.getElementById("convert-btn");

const lengthResEl = document.getElementById("length-result");
const volumeResEl = document.getElementById("volume-result");
const massResEl = document.getElementById("mass-result");

function calcUnits(input) {
  let lengToMeters = input / 3.281;
  let lengToFeet = input * 3.281;
  let volToGallons = input * 0.264;
  let volToLiters = input / 0.264;
  let massToPounds = input * 2.204;
  let massToKilos = input / 2.204;

  //   prettier-ignore
  lengthResEl.textContent = `${input} meters = ${lengToFeet.toFixed(3)} feet | ${input} feet = ${lengToMeters.toFixed(3)} meters`;
  //   prettier-ignore
  volumeResEl.textContent = `${input} liters = ${volToGallons.toFixed(3)} gallons | ${input} gallons = ${volToLiters.toFixed(3)} liters`;
  //   prettier-ignore
  massResEl.textContent = `${input} kilos = ${massToPounds.toFixed(3)} pounds | ${input} feet = ${massToKilos.toFixed(3)} kilos`;
}

convertBtn.addEventListener("click", () => {
  calcUnits(numberEl.value);
});
