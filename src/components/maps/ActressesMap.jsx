export default function ActressesMap({ actresses }) {
  return (
    <>
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
    </>
  );
}
