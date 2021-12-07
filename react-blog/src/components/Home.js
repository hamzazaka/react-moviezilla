import React, { useState } from 'react'
import Blog from './Blog'

export default function Home() {
    const [blogs,setBlogs]=useState([
        {title:"my new webstie",body:'hello htis is my ebsie',author:'hamza',id:1},
        {title:"my birthday party",body:'my birthday party went really well and i really enjoyed working there',author:'noman',id:2},
        {title:"software engineer",body:'I am a Front End engineer',author:'mario',id:3},
    ])
    return (
        <div className='home'>
          <Blog blogs={blogs} title='Old Blogs'/>
          <Blog blogs={blogs} title='New Blogs'/>
        </div>
    )
}
