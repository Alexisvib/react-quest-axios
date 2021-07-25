import React from 'react';

function DisplayQuote({ quoteChar }) {
    return (
       <div className='DisplayQuote'>
            <img src={quoteChar.image} alt={quoteChar.character} />
            <ul>
                <li>
                    Name: {quoteChar.character}
                </li>
                <li>Quote : {quoteChar.quote}</li>
            </ul>
       </div>

    );
}

export default DisplayQuote;