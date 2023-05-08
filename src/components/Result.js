import React from 'react'

function Result({ result }) {
    return (
        <div className="result">
            
            <img src={result.avatar_url} alt="avatar" ></img>
            
            <div className="middle">
            <div className='text'> 
            <a href ={result.html_url} target = "_blank" rel="noopener noreferrer">

            Click to visit github profile
            </a>
            </div>
            </div>
            <h3>{result.login}</h3>

        </div>
    )
}

export default Result
