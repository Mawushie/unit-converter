function getInput() {
  let userInput = prompt("Enter number to be converted");
  let lengthFeet = userInput * 3.281;
  let lengthMeters = userInput / 3.281;
  let lengthMessage =
    userInput +
    " meters = " +
    lengthFeet.toFixed(3) +
    " feet | " +
    userInput +
    " feet = " +
    lengthMeters.toFixed(3) +
    " meters";

  let volumeGallon = userInput * 0.264172;
  let volumeLitres = userInput / 0.264172;
  let volumeMessage =
    userInput +
    " litres = " +
    volumeGallon.toFixed(3) +
    " gallons | " +
    userInput +
    " gallons = " +
    volumeLitres.toFixed(3) +
    " litres";

  let massPounds = userInput * 2.20462;
  let massKilos = userInput / 2.20462;
  let massMessage =
    userInput +
    " kilos = " +
    massPounds.toFixed(3) +
    " pounds | " +
    userInput +
    " pounds = " +
    massKilos.toFixed(3) +
    " kilos";
  if (userInput != null) {
    document.getElementById("inputValue").textContent = userInput;
  } else {
    userInput = 0;
    document.getElementById("inputValue").textContent = userInput;
  }

  document.getElementById("length").textContent = lengthMessage;
  document.getElementById("volume").textContent = volumeMessage;
  document.getElementById("mass").textContent = massMessage;
}
