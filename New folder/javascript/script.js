document.getElementById("calctemp").addEventListener("submit", function(event) {
    event.preventDefault(); 
    

    var temperature = parseFloat(document.getElementById("temp").value);
    var unit = document.getElementById("temp_diff").value;
    

    var convertedTemperature;
    if (unit === "cel") {
      convertedTemperature = (temperature * 9/5) + 32;
      document.getElementById("result").textContent = temperature + "°C = (°C-32) * 5/9 = " + convertedTemperature + "°F";
    } else if (unit === "fah") {
      convertedTemperature = (temperature - 32) * 5/9;
      document.getElementById("result").textContent = temperature + "°F = (°F*9/5) + 32 =" + convertedTemperature + "°C";
    }
  });