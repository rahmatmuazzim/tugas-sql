function convertToCelsius() {
    const fahrenheitInput = document.getElementById('fahrenheit').value;
    const celsiusOutput = (fahrenheitInput - 32) * 5 / 9;
    document.getElementById('celsius').value = celsiusOutput.toFixed(2);
}

function convertToFahrenheit() {
    const celsiusInput = document.getElementById('celsius').value;
    const fahrenheitOutput = (celsiusInput * 9 / 5) + 32;
    document.getElementById('fahrenheit').value = fahrenheitOutput.toFixed(2);
}