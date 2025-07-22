import { useState, useEffect } from "react";
import axios from "axios";

//* importo i componenti
import Header from "./components/Header";
import ActressesMap from "./components/maps/ActressesMap";
import ActorsMap from "./components/maps/ActorsMap";

function App() {
  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);
  const [render, setRender] = useState("both");
  const [search, setSearch] = useState("");

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

  const filterActresses = actresses.filter((a) =>
    a.name.toLowerCase().includes(search.toLowerCase())
  );

  const filterActors = actors.filter((a) =>
    a.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header setRender={setRender} search={search} setSearch={setSearch} />
      <div className="container flex">
        <div className="row flex">
          {(render == "actresses" || render === "both") && (
            <div className="row flex">
              <ActressesMap actresses={filterActresses} />
            </div>
          )}
        </div>
        <div className="row flex">
          {(render == "actors" || render === "both") && (
            <ActorsMap actors={filterActors} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
