import React from 'react';
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Commande.css';
import { deleteCustomer } from '../store/actions/customerActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


 class CardCustomer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
      handleDeleteCustomer(e) {
        const id = this.props.customer._id
        this.props.deleteCustomer(id);
        window.location.reload(); 
      }

    render() {    

        const {customer} = this.props;
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
     return(
        <div>
            <li className="list-group-item" onClick={this.toggle}>{customer.name} {customer.surname} </li>
                <Modal isOpen={this.state.modal} toggle={this.toggle} centered>
                    <ModalHeader className="modal-header" close={closeBtn}>
                        {customer.name} {customer.surname}
                    </ModalHeader>
                    <ModalBody>
                        <h5>Addresse: </h5><p>{customer.address}</p>
                        <h5>Ville: </h5><p>{customer.city}</p>
                        <h5>Tel: </h5><p>{customer.phone}</p>
                        <h5>Email: </h5><p>{customer.email}</p>
                        <h6>informations: </h6><p>{customer.info}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={e => this.handleDeleteCustomer(e)} >Supprimer</Button>
                    </ModalFooter>
            </Modal>
        </div>
     )
    }
 }
 const mapStateToProps = state => ({
    
});
CardCustomer.propTypes = {
    deleteCustomer: PropTypes.func.isRequired
}
export default connect(mapStateToProps, {deleteCustomer })(CardCustomer)