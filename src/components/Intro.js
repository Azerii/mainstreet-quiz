import React, { useEffect, useState } from 'react'

import '../css/intro.css'

import logo from '../assets/logo.svg'
import laptop from '../assets/laptop.png'
import arrow from '../assets/arrow.svg'
import Landing from './Landing'


export default function Intro() {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        //eslint-disable-next-line
    }, [])
    
    if (loading) {
        setTimeout(() => {
        setLoading(false)
        }, 3000)
        return <Landing />;
    }     
        
    return (
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
        
    )
}