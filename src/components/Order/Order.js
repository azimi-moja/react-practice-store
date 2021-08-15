import React from 'react';
import Button from '../UI/Button/Button';


class Order extends React.Component {

    listOfItems = this.props.products.map((item) => {
        return (
            <li key={item.key}>{item.title} : {item.count}</li>
        );
    });

    render() {
        return (
            <>
                <p>Total Price : {this.props.totalPrice}</p>
                <ul>
                    {this.listOfItems}
                </ul>
                <div>
                    <p>Continue??</p>
                    <Button btnType='success' click={this.props.confirmOrder}>Confirm</Button>
                    <Button btnType='cancel' click={this.props.cancelOrder}>Cancel</Button>
                </div>
            </>
        );
    }
}

export default Order;