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
  const [newMovieTitle, setNewMovieTitle] = useState('');
  const [newMovieGenre, setNewMovieGenre] = useState('');


  useEffect(() => {

    console.log("Changed genre!", genre);
    setFilteredFilms(films.filter(film => (film.genre.toLowerCase() === genre.toLowerCase() || genre === '') && (film.title.toLowerCase().includes(search.toLowerCase()))));
  }, [genre, search, films]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submit pressed", newMovieTitle, newMovieGenre);

    if (!(newMovieTitle && newMovieGenre)) {
      alert('Make sure to insert genre and title of your movie!');
    } else {

      const newMovie = {
        title: newMovieTitle,
        genre: newMovieGenre
      }

      setFilms([...films, newMovie]);
      setNewMovieTitle('');
    }
  }


  //return here
  return (
    <>
      <header className="bg-warning py-3">
        <h1 className="text-center">Choose a Movie!</h1>
      </header>

      <div className="container text-center py-3">

        <section>

          <div id="navbar" className="d-flex align-items-center justify-content-between gap-5">

            <select onChange={(e) => setGenre(e.target.value)} className="border-2 border-warning my-3 p-1" name="genre" id="genre">
              <option value="">Select a genre</option>
              <option value="Thriller">Thriller</option>
              <option value="Fantascienza">Fantascienza</option>
              <option value="Romantico">Romantico</option>
              <option value="Azione">Azione</option>
            </select>

            <input type="text"
              className="form-control w-25 border-2 border-warning"
              name="title"
              id="title"
              aria-describedby="titleHelper"
              placeholder="Search movie here..." value={search} onChange={(e) => setSearch(e.target.value)} />

          </div>

          <div className="row d-flex row-gap-3">
            {
              filteredFilms.map(film => (
                <div key={film.title} className="col-4">
                  <div className="card border-2 border-warning p-3">
                    <h3 className="m-0">{film.title}</h3>
                    <p className="m-0">{film.genre}</p>
                  </div>
                </div>
              ))
            }
          </div>

          <div id="add" className="mt-5">
            <div className="card border-2 border-warning">

              <h5 className="m-0 p-3">Add a new movie!</h5>

              <div className="mb-3">

                <form onSubmit={handleSubmit} className="d-flex align-items-center justify-content-center gap-3">
                  <input type="text"
                    className="form-control w-50 border-2 border-warning"
                    name="title"
                    id="title"
                    aria-describedby="titleHelper"
                    placeholder="Insert title here..."
                    value={newMovieTitle}
                    onChange={(e) => setNewMovieTitle(e.target.value)} />

                  <select onChange={(e) => setNewMovieGenre(e.target.value)} className="border-2 border-warning my-3 p-1" name="genre" id="genre">
                    <option value="">Select a genre</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Fantascienza">Fantascienza</option>
                    <option value="Romantico">Romantico</option>
                    <option value="Azione">Azione</option>
                  </select>

                  <button className="btn btn-warning" type="submit">Add Movie</button>
                </form>
              </div>

            </div>
          </div>

        </section>

      </div >
    </>
  )
}

export default App;