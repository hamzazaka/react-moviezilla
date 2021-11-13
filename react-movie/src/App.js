import logo from './logo.svg';
import { useState, useEffect } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFav from './components/AddFav';

function App() {
  const [movies, setmovies] = useState([]);
  const [searchValue,setSearchValue]=useState('');
  const [fav,setFav]=useState('')

  const getMovieRequest= async (searchValue) =>{
   const movie_URL=`http://www.omdbapi.com/?s=${searchValue}&apikey=7daf5ca7`
    const response=await fetch(movie_URL);
    const data=await response.json()
    if(data.Search){
    setmovies(data.Search)
    }

  }

  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue])

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading headings='Movies'/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='row'>
      <MovieList movies={movies} FavComponent={AddFav} />
      </div>
      
    </div>
  );
}

export default App;
