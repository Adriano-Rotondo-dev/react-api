export default function ActressesMap({ actresses }) {
  return (
    <>
      {actresses.map((actress) => (
        <div key={actress.id} className="col">
          <div className="card">
            <div className="cardHead">
              <p>
                <h3>{actress.name}</h3>
              </p>
              <p>Year of Birth {actress.birth_year}</p>
              <p>{actress.nationality}</p>
              <p>{actress.biography}</p>
            </div>
            <div className="cardBody">
              <img src={actress.image} alt={`img of ${actress.name}`} />
              <div className="filmography">
                <p>{actress.most_famous_movies.join(", ")}</p>
                <p>{actress.awards}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
