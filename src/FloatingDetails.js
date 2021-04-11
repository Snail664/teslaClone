import React, { useState } from 'react'
import './FloatingDetails.css'
import {Link} from 'react-router-dom'

function FloatingDetails(props) {
    var ratio = window.scrollY/window.innerHeight;

    window.addEventListener('scroll', () => {
        ratio = window.scrollY/window.innerHeight
        const title = document.querySelector('.details__title')
        const buttonOne = document.querySelector('.buttonOne')
        const buttonTwo = document.querySelector('.buttonTwo')
        const left = document.querySelector('.subTitle__left')
        const right = document.querySelector('.subTitle__right')

        if (0 <= ratio < 3.5) {
            if (0 <= ratio && ratio < 0.5) {
                title.innerHTML = 'Model Y'
                buttonOne.innerHTML = 'CUSTOM ORDER'
                buttonTwo.innerHTML = 'LEARN MORE'
                left.innerHTML = 'Order Online for '
                right.innerHTML = 'Touchless Delivery'
                document.getElementById('lol').style.opacity = -2 * ratio + 1
            } else if (0.5 <= ratio && ratio < 0.6) {
                document.getElementById('lol').style.opacity = 0
            } else if (0.6 <= ratio && ratio < 1){
                title.innerHTML = 'Model X'
                buttonOne.innerHTML = 'CUSTOM ORDER'
                buttonTwo.innerHTML = 'EXISTING INVENTORY'
                document.getElementById('lol').style.opacity = 2.5 * ratio - 1.5
            } else if (1 <= ratio && ratio < 1.5) {
                title.innerHTML = 'Model X'
                buttonOne.innerHTML = 'CUSTOM ORDER'
                buttonTwo.innerHTML = 'EXISTING INVENTORY'
                document.getElementById('lol').style.opacity = -2 * (ratio - 1) + 1
            } else if (1.5 <= ratio && ratio < 1.6) {
                document.getElementById('lol').style.opacity = 0
            } else if (1.6 <= ratio && ratio < 2){
                title.innerHTML = 'Model 3'
                buttonOne.innerHTML = 'CUSTOM ORDER'
                buttonTwo.innerHTML = 'EXISTING INVENTORY'
                document.getElementById('lol').style.opacity = 2.5 * (ratio - 1) - 1.5
            }
    
            else if (2 <= ratio && ratio < 2.5) {
                title.innerHTML = 'Model 3'
                buttonOne.innerHTML = 'CUSTOM ORDER'
                buttonTwo.innerHTML = 'EXISTING INVENTORY'
                document.getElementById('lol').style.opacity = -2 * (ratio - 2) + 1
            } else if (2.5 <= ratio && ratio < 2.6) {
                document.getElementById('lol').style.opacity = 0
            } else if (2.6 <= ratio && ratio < 3){
                title.innerHTML = 'Model S'
                buttonOne.innerHTML = 'CUSTOM ORDER'
                buttonTwo.innerHTML = 'EXISTING INVENTORY'
                document.getElementById('lol').style.opacity = 2.5 * (ratio - 2) - 1.5
            }
    
            else if (3 <= ratio && ratio < 3.5) {
                title.innerHTML = 'Model S'
                buttonOne.innerHTML = 'CUSTOM ORDER'
                buttonTwo.innerHTML = 'EXISTING INVENTORY'
                left.innerHTML = 'Order Online for '
                right.innerHTML = 'Touchless Delivery'
                document.getElementById('lol').style.opacity = -2 * (ratio - 3) + 1
        }
        
        } 
        if (3.5 <= ratio) {
            if (3.5 <= ratio && ratio < 3.6) {
                left.innerHTML = 'Order Online for '
                right.innerHTML = 'Touchless Delivery'
                document.getElementById('lol').style.opacity = 0
            } else if (3.6 <= ratio && ratio < 4){
                title.innerHTML = 'Only $1.49/Watt for Solar on Existing Roofs'
                buttonOne.innerHTML = 'ORDER NOW'
                buttonTwo.innerHTML = 'LEARN MORE'
                left.innerHTML = 'Lowest Cost in America - Money-back guarantee'
                right.innerHTML = ''
                document.getElementById('lol').style.opacity = 2.5 * (ratio - 3) - 1.5
            }
    
            else if (4 <= ratio && ratio < 4.5) {
                title.innerHTML = 'Only $1.49/Watt for Solar on Existing Roofs'
                buttonOne.innerHTML = 'ORDER NOW'
                buttonTwo.innerHTML = 'LEARN MORE'
                left.innerHTML = 'Lowest Cost in America - Money-back guarantee'
                right.innerHTML = ''
                document.getElementById('lol').style.opacity = -2 * (ratio - 4) + 1
            } else if (4.5 <= ratio && ratio < 4.6) {
                document.getElementById('lol').style.opacity = 0
            } else if (4.6 <= ratio && ratio < 5){
                title.innerHTML = 'Solar for New Roofs'
                buttonOne.innerHTML = 'ORDER NOW'
                buttonTwo.innerHTML = 'LEARN MORE'
                left.innerHTML = 'Solar Roof Costs Less Than a New Roof Plus Solar Panels'
                right.innerHTML = ''
                document.getElementById('lol').style.opacity = 2.5 * (ratio - 4) - 1.5
            }
    
            else if (5 <= ratio && ratio < 5.5) {
                title.innerHTML = 'Solar for New Roofs'
                buttonOne.innerHTML = 'ORDER NOW'
                buttonOne.style.marginLeft = '0px'
                buttonTwo.style.display = 'block'
                buttonTwo.innerHTML = 'LEARN MORE'
                left.innerHTML = 'Solar Roof Costs Less Than a New Roof Plus Solar Panels'
                right.innerHTML = ''
                document.getElementById('lol').style.opacity = -2 * (ratio - 5) + 1
            } else if (5.5 <= ratio && ratio < 5.6) {
                buttonOne.style.marginLeft = '130px'
                buttonTwo.style.display = 'none'
                left.innerHTML = ''
                right.innerHTML = ''
                document.getElementById('lol').style.opacity = 0
            } else if (5.6 <= ratio){
                title.innerHTML = 'Accessories'
                buttonOne.innerHTML = 'SHOP NOW'
                buttonOne.style.marginLeft = '130px'
                buttonTwo.innerHTML = ''
                left.innerHTML = ''
                right.innerHTML = ''
                document.getElementById('lol').style.opacity = 2.5 * (ratio - 5) - 1.5
            }
        }
    })
    
    return (
        <div id='lol' className='floatingDetails'>
            <div className='details__title'>Model Y</div>
    <div className='details__subTitle'><p className='subTitle__left'>Order Online for </p><Link className='subTitle__right'>Touchless Delivery</Link></div>
            <div className='details__footer'>
                <Link className='clickable'><div className='buttonOne'>CUSTOM ORDER</div></Link>
                <Link className='clickable'><div className='buttonTwo'>LEARN MORE</div></Link>
            </div>
        </div>
    )
}

export default FloatingDetails