enum Theme {
  Light = "LIGHT_MODE",
  Dark = "DARK_MODE",
  HighContrast = "HIGH_CONTRAST",
}

// Get all the human-readable keys
const themeOptions = Object.keys(Theme);
console.log(themeOptions);

themeOptions.forEach((key) => {
  console.log(`Option: ${key}`);
});

// Output:
// "Option: Light"
// "Option: Dark"
// "Option: HighContrast"
