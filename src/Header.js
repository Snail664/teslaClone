import React, { useContext} from 'react'
import './Header.css'
import logo from './hiclipart.com.png' 
import {Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import Hamburger from './Hamburger'
import { DropDownContext } from './context';

function Header(props) {

    const [isOpen] = useContext(DropDownContext)

    if (!isOpen) {
        return (
            <div className='header'>
                <img className='header__left' src={logo} />
                <div className='header__center'>
                    <Link className='header__font'>MODEL S</Link>
                    <Link className='header__font'>MODEL 3</Link>
                    <Link className='header__font'>MODEL X</Link>
                    <Link className='header__font'>MODEL Y</Link>
                    <Link className='header__font'>SOLAR ROOF</Link>
                    <Link className='header__font'>SOLAR PANELS</Link>
                </div>
                <div className='header__right'>
                    <div className='bigScreen'>
                        <Link className='header__font'>SHOP</Link>
                        <Link className='header__font'>TESLA ACCOUNT</Link>
                    </div>
                    <Hamburger />
                </div>
            </div>
        )
    } else {
        return (
            <div className='header'>
                <img className='header__left' src={logo} />
                <div className='header__center'>
                    <Link className='header__font'>MODEL S</Link>
                    <Link className='header__font'>MODEL 3</Link>
                    <Link className='header__font'>MODEL X</Link>
                    <Link className='header__font'>MODEL Y</Link>
                    <Link className='header__font'>SOLAR ROOF</Link>
                    <Link className='header__font'>SOLAR PANELS</Link>
                </div>
                <div className='header__right'>
                <div className='invisible'>
                        <Link className='header__font'>SHOP</Link>
                        <Link className='header__font'>TESLA ACCOUNT</Link>
                    </div>
                    <Hamburger />
                </div>
            </div>
        )
    }
}

export default Header;