import React, { useState } from 'react'

export default function Home() {
    
    const handleClick=(name,e)=>{
        console.log('hello world ' +name,e.target)
        

    }

    return (
        <div className='home'>
            <h2>Home page </h2>
            <button onClick={(e)=>handleClick('hamza',e)}>click me</button>
        </div>
    )
}
