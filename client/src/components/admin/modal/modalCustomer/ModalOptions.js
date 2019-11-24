import React from 'react';
import { deleteCustomer } from '../../../../store/actions/customerActions';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';

 
function ModalOptions(props) {

    const handleDeleteCustomer = (e) => {
        e.preventDefault();
        const customerId = props.customer.customerId
        props.deleteCustomer(customerId);
        window.location.reload(); 
      }

    return (
        <div style={{minHeight:'50vh'}}>
            <h4 style={{textAlign:'center'}}>Options</h4>
            <br/>
            <Button color="danger" onClick={handleDeleteCustomer} >Supprimer Utilisateur</Button>
            <br/>
            <br/>
            <Button color="warning">Modifier Utilisateur</Button>
        </div>
    )
}


const mapStateToProps = state => ({
    
});


export default connect(mapStateToProps, {deleteCustomer})(ModalOptions)