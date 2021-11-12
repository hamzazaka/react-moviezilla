import React from 'react'

export default function MovieList({movies}) {
    return (
       <div>
           {movies.map((movie,index)=>(
               <div className='d-flex justify-content-start m-3'>
               <img src={movie.Poster} alt="" />
               </div>
               
           ))}
       </div>
    )
}
