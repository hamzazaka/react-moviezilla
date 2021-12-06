import React, { useState } from 'react'

export default function Home() {
    const [click,setClick]=useState([
        {
            'name':"hamza zaka",
              'age':18,
              'class':6
        },
         {
            'name':"zaka",
              'age':28,
              'class':16
        },
        {
            'name':"zaka",
              'age':28,
              'class':16
        },
         {
            'name':"zaka",
              'age':28,
              'class':16
        },
    ])
    
    const handleClick=(name,e)=>{
        console.log('hello world ' +name,e.target)
        setClick(name)
    }

    return (
        <div className='home'>
            <h4>{click.map(a=>{
                return(
                    <div>
                    <h4>{a.name}</h4>
                    <p>{a.age}</p>
                    </div>
                )
            })} </h4>
            <button onClick={(e)=>handleClick('hamza',e)}>click me</button>
        </div>
    )
}
