import { compose, pipe } from "lodash/fp";
import "./App.css";

let input = "  Subscribe  ";
let output = "<div>" + input.trim() + "</div>";
// console.log(output);

const trim = (str) => str.trim();

// function trim(str) {
//     str.trim();
// }
const wrapInDiv = (str) => `<div>${str}</div>`;

const toLowerCase = (str) => str.toLowerCase();
const result = wrapInDiv(toLowerCase(trim(input)));
// console.log("=>", result);

// const transform = compose(wrapInDiv, toLowerCase, trim)
// transform(input)

const transform = pipe(trim,toLowerCase, wrapInDiv);
console.log(transform(input));

function App() {}

export default App;
