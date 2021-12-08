import React, { useState,useEffect } from 'react'
import Blog from './Blog'

export default function Home() {
    const [blogs,setBlogs]=useState([])

    const handleDelete=(id)=>{
        const newBlogs=blogs.filter(a=>a.id!==id)
        setBlogs(newBlogs)
        // console.log(id) 
    }

    const getData= async()=>{
        const blogURL='http://localhost:8000/blogs';
        const response=await fetch(blogURL)
        const data=await response.json()
        console.log(data)
        setBlogs(data)
    }

    useEffect(()=>{
        getData()
    },[])

    return (
        <div className='home'>
        {blogs && <Blog blogs={blogs} title='Old Blogs' handleDelete={handleDelete}/>}
        </div>
    )
}
