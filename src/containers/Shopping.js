import React from 'react';
import Controls from '../components/Controls/Controls';
import Modal from '../components/UI/Modal/Modal';
import Order from '../components/Order/Order';


class Shopping extends React.Component {

    state = {
        products: [
            { key: 1, count: 0, title: 'Product 1', price: 70 },
            { key: 2, count: 0, title: 'Product 2', price: 21 },
            { key: 3, count: 0, title: 'Product 3', price: 43 },
            { key: 4, count: 0, title: 'Product 4', price: 67 }
        ],
        totalPrice: 0,
        showOrderModal: false
    }

    addProductHandler = (key) => {
        console.log("Add Product : " + key);
        const addProductPrice = this.state.products.find(productPrice => productPrice.key === key).price;
        const prevTotalPrice = this.state.totalPrice;
        const newTotalPrice = prevTotalPrice + addProductPrice;

        const prevProductCount = this.state.products.find(productCount => productCount.key === key).count;
        const updatedProducts = this.state.products;
        const newTotalCount = prevProductCount + 1;
        updatedProducts.find(p => p.key === key).count = newTotalCount;
        this.setState(
            {
                products: updatedProducts,
                totalPrice: newTotalPrice
            }
        );
    };

    removeProductHandler = (key) => {
        console.log("Remove Product : " + key);
        const subProductPrice = this.state.products.find(productPrice => productPrice.key === key).price;
        const prevTotalPrice = this.state.totalPrice;
        const newTotalPrice = prevTotalPrice - subProductPrice;

        const prevProductCount = this.state.products.find(productCount => productCount.key === key).count;
        const updatedProducts = this.state.products;
        const newTotalCount = prevProductCount - 1;
        updatedProducts.find(p => p.key === key).count = newTotalCount;
        this.setState(
            {
                products: updatedProducts,
                totalPrice: newTotalPrice
            }
        );
    };

    showOrderModalHandler = () => {
        this.setState(
            {
                showOrderModal: true
            }
        );
    }

    hideOrderModalHandler = () => {
        this.setState(
            {
                showOrderModal: false
            }
        );
    }

    confirmOrderModalHandler = () => {
        console.log("Confirm Order");
    }

    render() {
        return (
            <>
                <Modal
                    showModal={this.state.showOrderModal}
                    clickBackdrop={this.hideOrderModalHandler}
                >
                    <Order
                        products={this.state.products}
                        confirmOrder={this.confirmOrderModalHandler}
                        cancelOrder={this.hideOrderModalHandler}
                        totalPrice={this.state.totalPrice}
                    />
                </Modal>
                <Controls
                    products={this.state.products}
                    totalPrice={this.state.totalPrice}
                    addProduct={this.addProductHandler}
                    removeProduct={this.removeProductHandler}
                    showOrderModal={this.showOrderModalHandler}
                />
            </>
        );
    }
}

export default Shopping;