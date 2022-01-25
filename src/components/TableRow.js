import React, { useState } from 'react';

const TableRow = ({ img, name, num, id, type, nextEvolution, prevEvolution, height, weight, weaknesses}) => {
    
    const [show, toggleShow] = useState(false);
    
    return (
        <>
        <tr className='' onClick={() => toggleShow(!show)}>
            <td>
                <img
                src={`${img}`}
                alt={`pokemon${id}`}
                height='75px'
                width='75px' />
            </td>
            <td>{num}</td>
            <td>{name}</td>
            <td>{type}</td>
            <td>{show ? 'Less -' : 'More +'}</td>
        </tr>
        {
        show && 
        <tr>
            <td colSpan={5}>
                <div className='hidden'>
                    <div className='card-container bg-white br3 shadow-5 pa3'>
                        <div className='card-inner card-inner-left pa3'>
                            <div className='card-inner-info'>
                                <h3>{name}</h3>     
                                <img src={`${img}`} alt={`pokemon${id}`} />
                            </div>
                            <div className='card-inner-info'>
                                <h4>Evolves into</h4>
                                <p>{nextEvolution}</p>
                                <h4>Evolved from</h4>
                                <p>{prevEvolution}</p>
                            </div>
                        </div>
                        
                        <div className='card-inner card-inner-right br3 shadow-5 pa3'>
                            <div className='card-inner-info'>
                                <h4>Height</h4>
                                <p>{height}</p>
                                <h4>Weight</h4>
                                <p>{weight}</p>
                            </div>
                            <div className='card-inner-info'>
                                <h4>Type</h4>
                                <p>{type}</p>
                                <h4>Weaknesses</h4>
                                <p>{weaknesses}</p>
                            </div> 
                        </div>
                    </div>
                 </div>
            </td>
        </tr>
        }
        </>
    )
}

export default TableRow;