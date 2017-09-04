import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import ProductItemCard from "./Product_item_card";

import "../../css/components/product_list_container.css";

var productItemListObj = require("../../data/product_list.json");

export const ProductListContainer = (props) => {



    return (
        <div className="product-list-container">
            <div>
                <h3>PRODUCT LIST</h3>
            </div>
            <div className="product-items-list">

                {
                    productItemListObj.product_list.map(
                        (item) => {

                            let productItemCardButtonText = (_.findIndex(props.selectedItemCartList, function (o) { return o.id === item.id }) === -1) ? "Add to Cart" : "Remove Cart",
                                productItemCardButtonClass = (_.findIndex(props.selectedItemCartList, function (o) { return o.id === item.id }) === -1) ? "add-cart-btn" : "remove-cart-btn";

                            return <ProductItemCard key={item.id}
                                productItemCardButtonText={productItemCardButtonText}
                                productItemCardButtonClass={productItemCardButtonClass}
                                cartTotalPriceUpdater={props.cartTotalPriceUpdater}
                                selectedItemCartList={props.selectedItemCartList}
                                itemData={item}
                                selectedItemCartListHandler={props.selectedItemCartListHandler}
                            />
                        }
                    )
                }

            </div>
        </div>
    );
};

ProductListContainer.propTypes = {
    cartTotalPriceUpdater: PropTypes.func,
    selectedItemCartList: PropTypes.array,
    selectedItemCartListHandler: PropTypes.func
}