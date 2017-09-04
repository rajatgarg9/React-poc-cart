import React from "react";
import PropTypes from "prop-types";

import ProductItemCard from "./Product_item_card";

import "../../css/components/selected_item_container.css";

export const SelectedItemContainer = (props) => {



    let _productItemCardButtonText = "Remove Cart",
        _productItemCardButtonClass = "remove-cart-btn",
        _selectedItemContainerComponent = "";

    if (props.selectedItemCartList.length !== 0) {
        _selectedItemContainerComponent = <div className="selected-item-container">
            {
                props.selectedItemCartList.map(
                    (itemData) => {
                        return <ProductItemCard key={itemData.id}
                            productItemCardButtonText={_productItemCardButtonText}
                            productItemCardButtonClass={_productItemCardButtonClass}
                            cartTotalPriceUpdater={props.cartTotalPriceUpdater}
                            itemData={itemData}
                            selectedItemCartList={props.selectedItemCartList}
                            selectedItemCartListHandler={props.selectedItemCartListHandler}
                        />
                    }
                )
            }
        </div>
    }

    return (
        <div className="selected-item-container-component">
            {_selectedItemContainerComponent}
        </div>
    );
};

SelectedItemContainer.propTypes = {
    cartTotalPriceUpdater: PropTypes.func,
    selectedItemCartList: PropTypes.array,
    selectedItemCartListHandler: PropTypes.func
}
