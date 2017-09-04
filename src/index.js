import React from 'react';
import { render } from 'react-dom';
import _ from "lodash";

import registerServiceWorker from './registerServiceWorker';

//custom components
import { CartHeader } from './js/components/Header';
import { TotalAmount } from './js/components/Total_amount';
import { ProductListContainer } from './js/components/Product_list_container';
import { SelectedItemContainer } from './js/components/Selected_item_container';

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            cartTotalPrice: 0,
        }
    }
    
    selectedItemCartList= []
    


    /**
    * Calculate total amount of selected products in the cart
    * @param {number} newitemPrice
    * @param {string} action
    * @return {undefined} 
    */
    cartTotalPriceUpdater(newitemPrice, action) {
        if (action === "add") {

            this.setState({
                cartTotalPrice: this.state.cartTotalPrice + newitemPrice
            });
        } else if (action === "sub") {

            if (this.state.cartTotalPrice >= newitemPrice) {

                this.setState({
                    cartTotalPrice: this.state.cartTotalPrice - newitemPrice
                });
            }
        }

    }

    /**
        * Manage number of items in the cart with help of array
        * @param {string} action
        * @param {Object} cartItemDataObj
        * @return {undefined} 
    */
    selectedItemCartListHandler(action, cartItemDataObj) {
        if (action === "add") {    
                this.selectedItemCartList= [...this.selectedItemCartList, cartItemDataObj]

        } else if (action === "sub") {
                this.selectedItemCartList= _.differenceWith(this.selectedItemCartList, [cartItemDataObj], _.isEqual)

        }
    }





    render() {
        return (
            <div>
                <TotalAmount cartPrice={this.state.cartTotalPrice} />
                <SelectedItemContainer
                    cartTotalPriceUpdater={this.cartTotalPriceUpdater.bind(this)}
                    selectedItemCartList={this.selectedItemCartList}
                    selectedItemCartListHandler={this.selectedItemCartListHandler.bind(this)}
                />
                <ProductListContainer
                    cartTotalPriceUpdater={this.cartTotalPriceUpdater.bind(this)}
                    selectedItemCartList={this.selectedItemCartList}
                    selectedItemCartListHandler={this.selectedItemCartListHandler.bind(this)}
                />
            </div>
        );
    }
}

render(<CartHeader />, document.getElementById('cart-header-name'));
render(<App />, document.getElementById('cart-main-body'));


registerServiceWorker();
