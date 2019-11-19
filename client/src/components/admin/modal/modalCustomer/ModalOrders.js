import React from 'react';

export default function ModalOrders(props) {

    const orders = props.customer.orders;

    function ordersExist() {
        if(orders) {
            return (
                orders.map((o) =>
                    <div>
                        <p key={o._id}>n* {o.hazmana} || {o.amount} nis || {o.date}</p>
                    </div>
                )
            )
        }
        else return <p>Pas de commandes</p>

    }

    return (
        <div style={{minHeight:'50vh'}}>
            <h4 style={{textAlign:'center'}}>Toutes les commandes</h4>
            <br/>
            {ordersExist()}
        </div>
    )
}