import { useState } from "react";
import "./styles.css";

var types = ["all", "js", "business", "fiction"];

var books = [
  {
    name: "Never Split the Difference",
    rating: "3.5/5",
    type: "business",
  },
  {
    name: "Loonshots",
    rating: "5/5",
    type: "business",
  },
  {
    name: "Shiva Trilogy",
    rating: "5/5",
    type: "fiction",
  },
  {
    name: "Harry Potter and the Sorcerer's Stone",
    rating: "4.5/5",
    type: "fiction",
  },
  {
    name: "Eloquent JavaScript",
    rating: "4/5",
    type: "js",
  },
  {
    name: "You Don't Know JS",
    rating: "3.5/5",
    type: "js",
  },
];

const [bookstate, useBookstate] = useState([]);

export default function App() {
  return (
    <div className="App">
      <h1>Library</h1>
      {types.map((x) => {
        return <button className="button">{x}</button>;
      })}
    </div>
  );
}

// types.map((x) => {
//                   return (
//                     <div>
//
//                     </div>
//                   );
//                 });
