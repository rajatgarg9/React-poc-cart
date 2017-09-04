import React from "react";

var globVarObj = require("../../data/global_variables.json");

export const CartHeader = () => {

    return (
        <div className="cart-name-head">
            <h1>
                {globVarObj.global_keys.shopping_cart}
            </h1>
        </div>
    );
};

