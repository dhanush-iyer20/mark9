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

export default function App() {
  return (
    <div className="App">
      {types.map((x) => {
        return (
          <span>
            <button
              onClick={() => {
                books.map((y) => {
                  if (y.type == x) {
                    return (
                      <div>
                        <h2>{y.name}</h2>
                        <h2>{y.rating}</h2>
                      </div>
                    );
                  }
                });
              }}
              name={x}
              className="button"
            >
              {x}
            </button>
          </span>
        );
      })}
      {}
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
