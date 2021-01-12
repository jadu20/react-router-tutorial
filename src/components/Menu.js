import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    const activeStyle = {
        color: 'green',
        fontSize:'2rem'
    };

    return(
        <div>
            <ul>
                <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
                <li><NavLink to="/about/changgyu" activeStyle={activeStyle}>About changgyu</NavLink></li>
                <li><NavLink to="/posts" activeStyle={activeStyle}>posts</NavLink></li>
            </ul>
            <hr/>
        </div>
    );
}

export default Menu;