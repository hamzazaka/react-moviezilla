import React, { useEffect } from 'react'

export default function Pokemons() {

    const callPokemon = async()=>{
        const URL= 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200'
        const response=await fetch(URL);
        const data= await response.json()
        console.log(data)

    }
    useEffect(()=>{
        callPokemon()
    },[])
    return (
        <div>
            
        </div>
    )
}
