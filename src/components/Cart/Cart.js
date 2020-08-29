import React from 'react';

const Cart = (props) => {
    const totalPrice=props.cart.reduce((total,sub)=>total+sub.price,0);

    const formatNumber =num=>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div className="cart">
            <h4>order summary</h4>
            <p>Items ordered:{props.cart.length}</p>
            <p>Total Price:{formatNumber(totalPrice)}</p>
            
        </div>
    );
};

export default Cart;