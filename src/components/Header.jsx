import Btn from "./btn/Btn";

export default function Header({ setRender, search, setSearch }) {
  return (
    <header className="flex">
      <h1>Famous Actresses and Actors</h1>
      <div className="selectContainer flex">
        <div className="btnContainer flex">
          <Btn
            label="Show Only Actresses"
            value="actresses"
            setRender={setRender}
          />
          <Btn label="Show Only Actors" value="actors" setRender={setRender} />
          <Btn
            label="Show Both Actors and Actresses"
            value="both"
            setRender={setRender}
          />
        </div>
        <input
          className="input"
          type="text"
          placeholder="Search by Name Here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </header>
  );
}
