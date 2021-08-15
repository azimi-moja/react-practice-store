import React from 'react';
import NavItem from '../NavItem/NavItem';
import './NavItems.css';

class NavItems extends React.Component {

    render() {
        return (
            <ul className='nav-items'>
                <NavItem link='/'>Shopping</NavItem>
                <NavItem link='/'>Home</NavItem>
            </ul>
        )
    }
}

export default NavItems;