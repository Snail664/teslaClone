import React from 'react'
import './Home.css'

export default function Home() {

    var timer = null;
    window.addEventListener('scroll', function() {
    if(timer !== null) {
        clearTimeout(timer);        
    }
    timer = setTimeout(function() {
          let body = document.body;
          let index = body.scrollTop/window.innerHeight
          index = Math.round(index)
    }, 30);
    }, false);

    return (
        <div id='home' className='home'>
            <img id='1' className='home__imageTop' src="https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY" />
            <img id='2' className='home__image' src="https://tesla-cdn.thron.com/delivery/public/image/tesla/e5c1a384-6ca5-4785-9dd8-23eb0f4b1f7a/bvlatuR/std/2880x2400/Desktop-ModelX" />
            <img id='3' className='home__image' src="https://tesla-cdn.thron.com/delivery/public/image/tesla/05f64d73-090b-4839-9ed0-5ce18f7fa5de/bvlatuR/std/2880x2400/Desktop-Model3" />
            <img id='4' className='home__image' src="https://tesla-cdn.thron.com/delivery/public/image/tesla/bf5ec633-7cc2-4acb-8944-a74816e76f3e/bvlatuR/std/2880x2400/Desktop-ModelS" />
            <img id='5' className='home__image' src="https://tesla-cdn.thron.com/delivery/public/image/tesla/27d0055c-b0bf-476c-b3aa-ec59d314f871/bvlatuR/std/2880x2400/Desktop-SolarPanels" />
            <img id='6' className='home__image' src="https://tesla-cdn.thron.com/delivery/public/image/tesla/8e5e03a8-6bf2-49a1-b539-bee49aa0f3be/bvlatuR/std/2880x2400/Desktop-SolarRoof" />
            <img id='7' className='home__image' src="https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/2880x2400/Desktop-Accessories" />
        </div>
    )
}