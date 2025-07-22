export default function ActorsMap({ actors }) {
  return (
    <>
      {actors.map((actor) => (
        <div key={actor.id} className="col">
          <div className="card">
            <div className="cardHead">
              <p>{actor.name}</p>
              <p>{actor.birth_year}</p>
              <p>{actor.nationality}</p>
              <p>{actor.biography}</p>
            </div>
            <div className="cardBody">
              <img src={actor.image} alt={`img of ${actor.name}`} />
              <p>{actor.awards}</p>
              <p>{actor.most_famous_movies}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
