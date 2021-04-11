import React, { useState, useContext, useEffect, useRef } from 'react'
import './SideBar.css'
import {Link} from 'react-router-dom'
import {DropDownContext} from './context'

const optionSetOne = [['1', 'USED INVENTORY'], ['2', 'TRADE-IN'], ['3', 'CYBERTRUCK'], ['4', 'ROADSTER'], ['5', 'SEMI'], ['6', 'POWERWALL'], ['7', 'COMMERCIAL SOLAR'], ['8', 'TEST DRIVE'], ['9', 'CHARGING'], ['10', 'SUPPORT'], ['11', 'UNITED STATES']]
const optionSetTwo = [['1', 'MODEL S'], ['2', 'MODEL 3'], ['3', 'MODEL X'], ['4', 'MODEL Y'], ['5', 'SOLAR ROOF'], ['6', 'SOLAR PANELS'], ['7', 'SHOP'], ['more', 'MORE >'], ['9', 'TESLA ACCOUNT']]
const optionSetThree = [['more', 'MORE >'], ['3', 'CYBERTRUCK'], ['4', 'ROADSTER'], ['5', 'SEMI']]

export default function SideBar(props) {
    const [activeOptionSet, setActiveOptionSet] = useState(optionSetTwo)
    
    const [isOpen, setisOpen] = useContext(DropDownContext)

    function handleResize() {
        setisOpen(false)
        if (window.innerWidth > 1150) {
            setActiveOptionSet(optionSetOne)
        } else {
            setActiveOptionSet(optionSetTwo)
        }
    }
    window.addEventListener('resize', handleResize)

    function clicky(e) {
        if ( e.target.id === 'more') {
            if (activeOptionSet == optionSetTwo) {
                setActiveOptionSet(optionSetThree)
            } else {
                setActiveOptionSet(optionSetTwo)
            }
        }
    }

    if (isOpen) {
        return (
            <div id='SideBar' className="sidebar">
                <div className='sidebar__overlay'></div>
                <div className='sidebar__content'>
                <div className='sidebar__header'></div>
        <div id='sideBarBody' className='sidebar__body'>{ activeOptionSet.map(option => {return <Link id={option[0]} onClick={clicky} className='sidebar__option'>{option[1]}</Link>})}</div>
                </div>
            </div>
        )
    } else {
        return <div></div>
    }
    
}