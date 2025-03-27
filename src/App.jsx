const films = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
];

function App() {

  return (
    <>
      <div className="container text-center py-3">

        <h1>React Movie Filter</h1>

        <section>

          <select className="my-3" name="genre" id="genre">
            <option value="">Select a genre</option>
            <option value="Thriller">Thriller</option>
            <option value="Fantascienza">Fantascienza</option>
            <option value="Romantico">Romantico</option>
            <option value="Azione">Azione</option>
          </select>

          <div className="row d-flex row-gap-3">

            {
              films.map(film => (
                <div className="col-4">
                  <div className="card p-3">
                    <h3 className="m-0">{film.title}</h3>
                    <p className="m-0">{film.genre}</p>
                  </div>
                </div>
              ))
            }



          </div>

        </section>

      </div>
    </>
  )
}

export default App;