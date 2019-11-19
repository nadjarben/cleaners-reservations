import React from 'react';

export default function ModalOrder(props) {

    const {customer} = props;

    return (
        <div style={{minHeight:'50vh'}}>
            <h4 style={{textAlign:'center'}}>Informations personnelles</h4>
            <br/>
            <h5>Telephone: </h5><p>{customer.phone}</p>
            <h5>Email: </h5><p>{customer.email}</p>
            <h5>Adresse: </h5><p>{customer.address}</p>
            <h6>Informations: </h6><p>{customer.info}</p>
        </div>
    )
}