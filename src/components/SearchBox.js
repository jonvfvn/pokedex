import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--grey bg-white br3 mb3 shadow-5'
                type='search' 
                placeholder='search pokémon by name'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;