// enum Theme {
//   Light = "LIGHT_MODE",
//   Dark = "DARK_MODE",
//   HighContrast = "HIGH_CONTRAST",
// }

// // Get all the human-readable keys
// const themeOptions = Object.keys(Theme);
// console.log(themeOptions);

// themeOptions.forEach((key) => {
//   console.log(`Option: ${key}`);
// });

// // Output:
// // "Option: Light"
// // "Option: Dark"
// // "Option: HighContrast"

enum Days {
  monday = 1,
  tuesday,
  wednesday,
  thursday,
  friday,
}
function dayCheck(days: Days) {
  switch (days) {
    case Days.wednesday:
    case Days.friday:
      return "this is one of good days";
      break;
    default:
      return "this is one of good days";
      break;
  }
}
console.log(dayCheck());
