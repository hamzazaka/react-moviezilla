import logo from './logo.svg';
import { useState, useEffect } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFav from './components/AddFav';
import RemoveFav from './components/RemoveFav';

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

  useEffect(()=>{
    const movieFav=JSON.parse(localStorage.getItem('react-movie-app-favourite'))

    setFav(movieFav)
  },[])

  const saveToLocalStorage=(items)=>{
    localStorage.setItem('react-movie-app-favourite',JSON.stringify(items))
  }

  const AddFavMovie=(movie)=>{
    const newFavList=[...fav,movie]
    setFav(newFavList)
    saveToLocalStorage(newFavList)
  }

  const removeFavMovie=(movie)=>{
    const newFavList=fav.filter(f=>f.imdbID !==movie.imdbID);
    setFav(newFavList)
  }

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading headings='Movies'/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='row'>
      <MovieList movies={movies} FavComponent={AddFav} handleFavouriteClick={AddFavMovie} />
      </div>
          <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading headings='Favourites'/>
      </div>
      <div className="row">
     {fav&& <MovieList movies={fav} FavComponent={RemoveFav} handleFavouriteClick={removeFavMovie} />}

      </div>
      
    </div>
  );
}

export default App;
