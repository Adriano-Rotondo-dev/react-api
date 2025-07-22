export default function ActorsMap({ actors }) {
  return (
    <>
      {actors.map((actor) => (
        <div key={actor.id} className="col">
          <div className="card">
            <div className="cardHead">
              <h3>{actor.name}</h3>
              <p>Year of Birth {actor.birth_year}</p>
              <p>{actor.nationality}</p>
              <p>{actor.biography}</p>
            </div>
            <div className="cardBody">
              <img src={actor.image} alt={`img of ${actor.name}`} />
              <div className="filmography">
                <p>{actor.known_for.join(", ")}</p>
                <p>{actor.awards.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
