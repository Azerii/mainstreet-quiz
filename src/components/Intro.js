import React, { useEffect, useState } from 'react'

import '../css/intro.css'

import logo from '../assets/favicon.svg'
import laptop from '../assets/laptop.png'
import arrow from '../assets/arrow.svg'
import Landing from './Landing'


export default function Intro() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
        //eslint-disable-next-line
    }, [])
    
   
        
    return (
        <>
        {loading ? <Landing /> :
        <div className='intro-wrapper'>
            <div className='intro-inner'>
                <div className='intro-header'>
                    <img src={logo} alt='' />
                </div>

                <div className='laptop'>
                    <img src={laptop} alt='' />
                </div>

                <div className='title'>
                    <h3>How safe are you on the internet?</h3>
                </div>

                

                <div className='prompt'>
                    <a href='/quiz/q1'>TAKE THIS QUIZ TO FIND OUT NOW <img src={arrow} alt='' /></a>
                </div>
                
            </div>
        </div>
        }
        </>
        
    )
}