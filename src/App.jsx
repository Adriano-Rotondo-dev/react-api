import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [actresses, setActresses] = useState([]);

  useEffect(() => {
    axios
      .get("https://lanciweb.github.io/demo/api/actresses/")
      .then((res) => setActresses(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="content flex">
        <h1>Famous Actresses</h1>
        <div className="row flex">
          {actresses.map((actress) => (
            <div key={actress.id} className="col">
              <div className="card">
                <div className="cardHead">
                  <p>{actress.name}</p>
                  <p>{actress.birth_year}</p>
                  <p>{actress.nationality}</p>
                  <p>{actress.biography}</p>
                </div>
                <div className="cardBody">
                  <img src={actress.image} alt={`img of ${actress.name}`} />
                  <p>{actress.awards}</p>
                  <p>{actress.most_famous_movies}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
