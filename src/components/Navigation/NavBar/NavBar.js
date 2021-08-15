import React from 'react';
import NavItems from '../NavItems/NavItems';
import './NavBar.css';

class NavBar extends React.Component {

    render() {
        return (
            <header className='navBarHeader'>
                <nav>
                    <NavItems />
                </nav>
            </header>
        )
    }
}

export default NavBar;