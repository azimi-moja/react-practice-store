import React from 'react';

import './Backdrop.css';


class BackDrop extends React.Component {

    render() {
        return (
            this.props.show
                ? <div className='backdrop' onClick={this.props.clickBackdrop} >{this.props.show}</div>
                : null
        )
    }
}

export default BackDrop;