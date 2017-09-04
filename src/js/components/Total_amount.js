import React from "react";
import PropTypes from 'prop-types';

import "../../css/components/total_amount.css";

var globVarObj = require("../../data/global_variables.json");

export const TotalAmount =(props) => {    
    return (
        <div className="total-amount-displayer-container">
            <div>
                <h1>Your Cart</h1>
            </div>
            <div className="amount-displayer">
                <p>Total: {globVarObj.global_keys.dolar_symbol} {props.cartPrice}</p>
            </div>
        </div>
    );
};


TotalAmount.propTypes={
    cartPrice:PropTypes.number
}

