import React from "react";
import '../App.css';
import {NavLink} from 'react-router-dom';

const Menu=()=>{

    return(
        <div>
            <ul className="menu">
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/about/Lee'>About2</NavLink></li>
                <li><NavLink to='/food1'>food1</NavLink></li>
                <li><NavLink to='/food2'>food2</NavLink></li>
                <li><NavLink to='/food/2'>food</NavLink></li>
            </ul>
        </div>
    )
}

export default Menu;