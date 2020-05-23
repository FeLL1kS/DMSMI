import React from 'react'
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom'
import logo from '../../img/logo.png'

const Header = () => {
    return (
        <div className={classes.header}>
            <img src={logo} alt="img error"/>
            <NavLink to='/' className={classes.logo}>Hospital</NavLink>
            <div className={classes.navMenu}>
                <NavLink to='/clients' className={classes.item}>Clients</NavLink>
                <NavLink to='/doctors' className={classes.item}>Doctors</NavLink>
                <NavLink to='/appointments' className={classes.item}>Appointments</NavLink>
            </div>
        </div>
    )
}

export default Header