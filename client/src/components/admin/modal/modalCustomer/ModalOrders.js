import React from 'react';

export default function ModalOrders(props) {

    const orders = props.customer.orders;    

    function ordersExist() {
        if(orders) {
            return (
                orders.map((o) =>
                    <li className='list-group-item' key={o._id}>no <span style={{color:'red'}}>{o.hazmana}</span> || {o.date} || {o.amount} ₪, <span style={{color:'blue'}}>{String(o.payed)}</span> </li>
                )
            )
        }
        else return <p>Pas de commandes</p>
    }

    return (
        <div style={{minHeight:'50vh'}}>
            <h4 style={{textAlign:'center'}}>Toutes les commandes</h4>
            <br/>
            <div className="admin">
                <ul className="list-group">
                    {ordersExist()}
                </ul>
            </div>
        </div>
    )
}