import React from 'react'

function Result({ result }) {
    return (
        <div className="result">
            <a href ={result.html_url} target = "_blank" rel="noopener noreferrer">
            <img src={result.avatar_url} alt="avatar" ></img>
            </a>
            <div className="middle">
            <div className='text'> Click to visit github profile</div>
            </div>
            <h3>{result.login}</h3>
        </div>
    )
}

export default Result
