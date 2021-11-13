import logo from './logo.svg';
import { useState, useEffect } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';

function App() {
  const [movies, setmovies] = useState([]);
  const [searchValue,setSearchValue]=useState('');

  const getMovieRequest= async () =>{
   const movie_URL='http://www.omdbapi.com/?s=superman&apikey=7daf5ca7'
    const response=await fetch(movie_URL);
    const data=await response.json()
    console.log(data)
    setmovies(data.Search)

  }

  useEffect(() => {
    getMovieRequest()
  }, [])

  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieListHeading headings='Movies'/>
      </div>
      <div className='row'>
      <MovieList movies={movies} />
      </div>
      
    </div>
  );
}

export default App;
