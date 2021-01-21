import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import '../css/question.css'

import logo from '../assets/logo.svg'
import arrow from '../assets/arrow.svg'

export default function Question(props) {
    const [clicked, setClicked] = useState()
    

    function updateCount() {
        if(localStorage.scores) {
            let parsed = JSON.parse(localStorage.scores)
            if (clicked === 'yes') {
                parsed[props.id] = props.yes
                localStorage.scores = JSON.stringify(parsed)
            } else if (clicked === 'no') {
                parsed[props.id] = props.no
                localStorage.scores = JSON.stringify(parsed)
            }
            console.log(localStorage.scores)
        }
    }
    return (
        <div className='question-wrapper'>
            <div className='question-header'>
                <img src={logo} alt='' />
            </div>
            <div className='question-inner'>
                <div className='question'>
                    <h2>{props.question}</h2>
                </div>

                <button className={`answer ${clicked === 'yes' && 'active'}`} onClick={() => setClicked('yes')}>
                    yes
                </button>
                <button className={`answer ${clicked === 'no' && 'active'}`} onClick={() => setClicked('no')}>
                    no
                </button>

                <div className='next-wrapper'>
                    {clicked && <Link to={props.next} >
                        <button className='next' onClick={() => {
                            updateCount()
                        }}>
                            <img src={arrow} alt='' />
                            <span className='innerText'>NEXT</span>
                        </button>
                    </Link>}
                </div>
            </div>
        </div>
    )
}