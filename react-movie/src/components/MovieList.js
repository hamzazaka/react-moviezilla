import React from 'react'

export default function MovieList({movies}) {
    return (
        <div>
            {movies.map((movie,index)=>{
                return(
                    <img src={movie.Poster} alt="movie" />
                )
            })}
        </div>
    )
}
