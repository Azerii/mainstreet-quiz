import React from 'react'

import '../css/landing.css'

import logo from '../assets/logo.svg'


export default function Landing() {
    return (
        <div className='landing-wrapper'>
            <div className='landing-inner'>
                <img src={logo} alt='' />
            </div>
        </div>
    )
}