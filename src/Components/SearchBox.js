import React from 'react'

const SearchBox = ({searchField, searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className='f3 pa3 tc ba b--green bg-lightest-blue' 
                type='search' 
                placeholder='search robots' 
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox