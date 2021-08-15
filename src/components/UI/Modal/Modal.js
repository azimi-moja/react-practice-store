import React from 'react';
import BackDrop from './Backdrop';
import Wrapper from '../../../hoc/Wrapper';

import './Modal.css'

class Modal extends React.Component {

    render() {
        return (
            <Wrapper>
                <BackDrop
                    show={this.props.showModal}
                    clickBackdrop={this.props.clickBackdrop}
                />
                <div
                    className={this.props.showModal ? 'modal showModal' : 'modal hideModal'}>
                    {this.props.children}
                </div>
            </Wrapper>
        );
    }
}

export default Modal;