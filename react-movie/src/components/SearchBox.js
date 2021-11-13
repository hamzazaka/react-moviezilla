import React from 'react'

export default function SearchBox({value,  setSearchValue}) {
    return (
        <div className='col col-sm-4'>
            <input type="text" value={value} onChange={(e)=>setSearchValue(e.target.value)} className='form-control' placeholder='type to Search' />
        </div>
    )
}
