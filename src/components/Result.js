import React, { useEffect } from 'react'

import '../css/result.css'

import logo from '../assets/favicon.svg'
import good from '../assets/good.svg'
import okay from '../assets/okay.svg'
import bad from '../assets/bad.svg'

export default function Result() {
    const parsed = JSON.parse(localStorage.scores)
    const scores = Object.values(parsed)

    const result = scores.reduce((a, b) => a + b)
        
    return (
        <div className='result-wrapper'>
            <div className='result-inner'>
                <div className='result-header'>
                    <img src={logo} alt='' />
                </div>
                <div className='title'>
                    <h3>Results</h3>
                    <div className='divider'></div>
                    <p>you got</p>

                    <h1 className='score'>{result}</h1>
                </div>

                {result >= 7 && <div className='conclusion'>
                    <img src={good} alt='' />
                    <p>Not even the most sophisticated hacker can nab you!</p>
                </div>}
                {result >= 5 && result < 7 && <div className='conclusion'>
                    <img src={okay} alt='' />
                    <p>You're quite security-conscious but you should do better!</p>
                </div>}
                {result >= 0 && result < 5 && <div className='conclusion'>
                    <img src={bad} alt='' />
                    <p>One of these days you just might wake up to your entire life savings gone because you've chosen to live on the digital edge!</p>
                </div>}
            </div>
        </div>
    )
}