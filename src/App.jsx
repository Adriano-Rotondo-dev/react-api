import { useState, useEffect } from "react";
import axios from "axios";

//* importo i componenti
import Header from "./components/Header";
import ActressesMap from "./components/ActressesMap";
import ActorsMap from "./components/ActorsMap";

function App() {
  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    //* axios request per ottenere i dati delle attrici
    axios
      .get("https://lanciweb.github.io/demo/api/actresses/")
      .then((res) => setActresses(res.data))
      .catch((err) => console.error(err));

    //* axios request per ottenere i dati degli attori
    axios
      .get("https://lanciweb.github.io/demo/api/actors/")
      .then((res) => setActors(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header />
      <div className="container flex">
        {/* //todo button prototype to switch between actors and actresses */}
        {/* <button>Press to Switch to Actors</button> */}
        {/* //todo button prototype to see both */}
        {/* <button>Press to See both </button> */}
        <div className="row flex">
          <ActressesMap actresses={actresses} />
        </div>
        {/* //? dividere entrambi in due row parallele per rendering più fluido?  */}
        <div className="row flex">
          <ActorsMap actors={actors} />
        </div>
      </div>
    </>
  );
}

export default App;
