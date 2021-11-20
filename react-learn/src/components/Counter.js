import React, { useState } from 'react'

export default function Counter() {
    const [click,setClick]=useState(1);
    const[random,setRandom]=useState(1)
    const num=[1,2,3,4,5];

     const newnum = num.join(' ');
     console.log(newnum)
    let hello= Math.trunc(Math.random()*4)

    const clickime=()=>{
        if(hello===0) return 10
        setRandom(hello)
        setClick(click*hello)
    }
      

    return (
        <div>
            <h1>this is my counter</h1>
            <p onClick={()=>setRandom(hello)} >{random}</p>
            <p>The count right now is <span>{click}</span></p>
            <button onClick={()=>setClick(clickime)} >increase me</button>
            <button onClick={()=>setClick(click===0?click:click-1)} >decrease me</button>

        </div>
    )
}
