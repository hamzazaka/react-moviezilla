import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [movies, setmovies] = useState([
     {
            "Title": "Hello World",
            "Year": "2019",
            "imdbID": "tt9418812",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOGIwYjZlOTctZTNhOC00OTdiLWI5ZWItOTdiMWRjMjUwMDlhXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Hello World:)",
            "Year": "2013",
            "imdbID": "tt3106806",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTcyODc5NzAzNV5BMl5BanBnXkFtZTgwMTQzMzAxMzE@._V1_SX300.jpg"
        },
        {
            "Title": "Hello World",
            "Year": "2016–",
            "imdbID": "tt5759248",
            "Type": "series",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOGRlNmMzY2ItNTEzYi00MmVkLWEzZTctNzJkY2VmZmQzM2EyXkEyXkFqcGdeQXVyNjczODE4OTA@._V1_SX300.jpg"
        },
      }
  return (
    <div className="">
      <h1>hello world</h1>
    </div>
  );
}

export default App;