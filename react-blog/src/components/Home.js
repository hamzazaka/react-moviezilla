import React, { useState,useEffect } from 'react'
import Blog from './Blog'

export default function Home() {

    const [blogs,setBlogs]=useState([])
    const [isPending,setisPending]=useState(true);

    const getData= async()=>{
        const blogURL='http://localhost:8000/blogs';
        const response=await fetch(blogURL)
        const data=await response.json()
        console.log(data)
        setBlogs(data)
        setisPending(false)
    }

    useEffect(()=>{
        getData()
    },[])

    return (
        <div className='home'>
            {isPending && <div>Loading ....</div>}
        {blogs && <Blog blogs={blogs} title='Old Blogs'/>}
        </div>
    )
}
