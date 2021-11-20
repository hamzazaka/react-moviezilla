import React, { useState } from 'react'

export default function Counter() {
    const [click,setClick]=useState(1)

    return (
        <div>
            <h1>this is my counter</h1>
            <p>The count right now is <span>{click}</span></p>
            <button onClick={()=>setClick(click+1)} >increase me</button>
            <button onClick={()=>setClick(click===0?click:click-1)} >decrease me</button>

        </div>
    )
}
