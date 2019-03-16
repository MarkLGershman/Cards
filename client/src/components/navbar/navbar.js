import React from 'react';
import './styles.css';
import { NavLink } from 'react-router-dom';

const navbar = props => {
  return (
    <div className='navbar'>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink exact to="/login">Login</NavLink></li>
      </ul>
    </div>
  );
};

export default navbar;