import { compose, pipe } from "lodash/fp";
import "./App.css";

const person = {
    name: "Siraj",
    address: {
        city: "Mannar",
        country: "Sri Lanka",
    },
};

const updated = { ...person, name: "Ahamed",
address : {
  ...person.address, country: 'Malaysia'
} };

// updated.address.country = "Dubai";

console.log("person", person);
console.log("updated", updated);
















// let input = "   Subcribe  ";

// const trim = (str) => str.trim();
// const toLowerCase = (str) => str.toLowerCase();
// const wrapCustomize = (type) => (str) => `<${type}>${str}<${type}/>`;

// const transform = pipe(trim, toLowerCase, wrapCustomize("span"));
// console.log(transform(input));

function App() {}

export default App;
