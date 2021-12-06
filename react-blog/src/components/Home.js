import React, { useState } from 'react'

export default function Home() {
    const [click,setClick]=useState('')
    const handleClick=()=>{
        console.log('hello world')
        setClick('hamza')

    }

    return (
        <div className='home'>
            <h2>Home page {click}</h2>
            <form action="" onSubmit={handleClick}>
                <input type="text" placeholder='type your name' id="" />
                <button >Click</button>
            </form>
        </div>
    )
}
