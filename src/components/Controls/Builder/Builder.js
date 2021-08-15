import React from 'react';
import './Builder.css';

class Builder extends React.Component {
    render() {
        return (
            <div className='builder'>
                <div>{this.props.title}</div>
                <button onClick={this.props.addProduct}>Add</button>
                <button onClick={this.props.removeProduct}>Remove</button>
            </div>
        );
    }
}

export default Builder;