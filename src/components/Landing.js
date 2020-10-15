import React, { useEffect } from 'react'

import '../css/landing.css'

import logo_main from '../assets/logo_main.png'


export default function Landing() {
    useEffect(() => {
        setTimeout(() => {
            window.location.replace('/quiz')
        }, 2000)
        //eslint-disable-next-line
    }, [])
    return (
        <div className='landing-wrapper'>
            <div className='landing-inner'>
                <img src={logo_main} alt='' />
            </div>
        </div>
    )
}