import React from 'react'

import '../css/landing.css'

import logo_main from '../assets/logo_main.png'


export default function Landing() {
    return (
        <div className='landing-wrapper'>
            <div className='landing-inner'>
                <img src={logo_main} alt='' />
            </div>
        </div>
    )
}