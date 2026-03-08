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
var Days;
(function (Days) {
    Days[Days["monday"] = 1] = "monday";
    Days[Days["tuesday"] = 2] = "tuesday";
    Days[Days["wednesday"] = 3] = "wednesday";
    Days[Days["thursday"] = 4] = "thursday";
    Days[Days["friday"] = 5] = "friday";
})(Days || (Days = {}));
function dayCheck(days) {
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
console.log(dayCheck(9));
