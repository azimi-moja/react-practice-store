import React from 'react';
import Wrapper from '../../hoc/Wrapper';
import NavBar from '../Navigation/NavBar/NavBar';
import './Layout.css';

class Layout extends React.Component {

    render() {
        return (
            <Wrapper>
                <NavBar />
                <main className='content'>{this.props.children}</main>
            </Wrapper>
        );
    }
}

export default Layout;