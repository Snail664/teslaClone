import React, {useContext, useRef} from 'react'
import './Hamburger.css'
import { DropDownContext } from "./context"

export default function Hamburger() {
    const [isOpen, setisOpen] = useContext(DropDownContext);

    const burger = useRef()

    function animation() {
        burger.current.classList.toggle('change')
        console.log('Burger clicked!')
        setisOpen(!isOpen)
        console.log(isOpen)
    }
    return (
        <div id='burger' ref={burger} className='hamburger' onClick={animation}>
            <div className='hamburger__top'></div>
            <div className='hamburger__middle'></div>
            <div className='hamburger__bottom'></div>
        </div>
    )
}