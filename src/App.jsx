import { useEffect, useState } from "react";

const data = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
];

function App() {

  //logic here
  const [films, setFilms] = useState(data);
  const [genre, setGenre] = useState('');
  const [filteredFilms, setFilteredFilms] = useState(films);
  const [search, setSearch] = useState('');

  useEffect(() => {

    console.log("Changed genre!", genre);
    setFilteredFilms(films.filter(film => (film.genre.toLowerCase() === genre.toLowerCase() || genre === '') && (film.title.toLowerCase().includes(search.toLowerCase()))));

  }, [genre, search]);


  //return here
  return (
    <>
      <div className="container text-center py-3">

        <h1>Choose a Movie!</h1>

        <section>

          <div className="d-flex align-items-center justify-content-between gap-5">

            <select onChange={(e) => setGenre(e.target.value)} className="my-3 p-1" name="genre" id="genre">
              <option value="">Select a genre</option>
              <option value="Thriller">Thriller</option>
              <option value="Fantascienza">Fantascienza</option>
              <option value="Romantico">Romantico</option>
              <option value="Azione">Azione</option>
            </select>

            <input className="ps-2" type="text" placeholder="Search a movie..." value={search} onChange={(e) => setSearch(e.target.value)} />

          </div>

          <div className="row d-flex row-gap-3">
            {
              filteredFilms.map(film => (
                <div key={film.title} className="col-4">
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