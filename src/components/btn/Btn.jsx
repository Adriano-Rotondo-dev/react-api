export default function Btn({ setRender, value, label }) {
  return (
    <>
      <button onClick={() => setRender(value)}>{label}</button>
    </>
  );
}
