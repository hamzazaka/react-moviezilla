import React, { useState } from 'react'

export default function Home() {
    const [blogs,setBlogs]=useState([
        {title:"my new webstie",body:'hello htis is my ebsie',author:'hamza',id:1},
        {title:"my birthday party",body:'my birthday party went really well and i really enjoyed working there',author:'noman',id:2},
        {title:"software engineer",body:'I am a Front End engineer',author:'mario',id:3},
    ])
    return (
        <div className='home'>
            {blogs.map((a)=>(
                <div className="blog-preview" key={a.id}>
                    <h2>{a.title}</h2>
                    <p>Written by {a.author}</p>
                </div>
            ))}
        </div>
    )
}
