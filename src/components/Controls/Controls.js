import React from 'react';
import Builder from './Builder/Builder';
import './Controls.css';

class Controls extends React.Component {

    render() {
        return (
            <div className='controls'>
                <div className='totalPrice' >
                    <p> Total Price: {this.props.totalPrice}</p>
                </div>
                {
                    this.props.products.map((item) => {
                        return (
                            <Builder
                                key={item.key}
                                title={item.title}
                                addProduct={() => this.props.addProduct(item.key)}
                                removeProduct={() => this.props.removeProduct(item.key)}
                            />
                        );
                    })
                }
                <button className='orderBtn' onClick={this.props.showOrderModal}>Order</button>
            </div>
        );
    }
}

export default Controls;