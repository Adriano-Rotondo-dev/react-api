import Btn from "./btn/Btn";

export default function Header({ setRender }) {
  return (
    <header className="flex">
      <h1>Famous Actresses and Actors</h1>
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
    </header>
  );
}
