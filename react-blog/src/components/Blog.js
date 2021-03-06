import React from 'react'

export default function blog({blogs,title}) {
    return (
        <div className='blog-list'>
            
            <h2 >{title}</h2>
              {blogs.map((a)=>(
                <div className="blog-preview" key={a.id}>
                    <h2>{a.title}</h2>
                    <p>Written by {a.author}</p>
                </div>
            ))}
        </div>
    )
}
