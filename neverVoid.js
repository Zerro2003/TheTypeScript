// function logMessage(msg: string): void {
//   return msg;
// }
// const result = logMessage("Hello!");
// console.log(result);
// type Status = "success" | "error" | "loading" | "whatever";
// function handleStatus(status: Status): string {
//   switch (status) {
//     case "success":
//       return "Data loaded!";
//     case "error":
//       return "Something went wrong.";
//     case "loading":
//       return "Loading...";
//     default:
//       const neverStatus: never = status;
//       return neverStatus;
//   }
// }
// console.log(handleStatus("success"));
// console.log(handleStatus("error"));
// console.log(handleStatus("loading"));
var Status;
(function (Status) {
    Status[Status["Active"] = 0] = "Active";
    Status[Status["Inactive"] = 1] = "Inactive";
})(Status || (Status = {}));
console.log(Status[0]);
