import React from 'react';
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { deleteReservation } from '../../../store/actions/reservationActions';
import { postCustomer } from '../../../store/actions/customerActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


 class ModalReservation extends React.Component {
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
      handleDeleteReservation(e) {
        const id = this.props.reservation._id
        this.props.deleteReservation(id);
        window.location.reload(); 
      }
      handlePostCustomer(e) {
        const { name, surname, phone, email, address, city, info } = this.props.reservation;
        this.props.postCustomer(name, surname, phone, email, address, city, info)
        alert(`${name} ${surname} enregistre.`)
      }

    render() {    

        const {reservation} = this.props;
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
     return(
        <div>
            <li className="list-group-item" onClick={this.toggle}>{reservation.name} {reservation.surname} || {reservation.date} | {reservation.hour} </li>
                <Modal isOpen={this.state.modal} toggle={this.toggle} centered>
                    <ModalHeader className="modal-header" close={closeBtn}>
                        {reservation.name} {reservation.surname}
                    </ModalHeader>
                    <ModalBody>
                        <h5>Addresse: </h5><p>{reservation.address}</p>
                        <h5>Ville: </h5><p>{reservation.city}</p>
                        <h5>Tel: </h5><p>{reservation.phone}</p>
                        <h5>Email: </h5><p>{reservation.email}</p>
                        <h5>Date: </h5><p>{reservation.date}</p>
                        <h5>Heure: </h5><p>{reservation.hour}</p>
                        <h6>informations: </h6><p>{reservation.info}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button>Archiver</Button>
                        <Button color="success" onClick={e => this.handlePostCustomer(e)}>Enregistrer client</Button>
                        <Button color="danger" onClick={e => this.handleDeleteReservation(e)} >Supprimer</Button>
                    </ModalFooter>
            </Modal>
        </div>
     )
    }
 }
 const mapStateToProps = state => ({
    
});
ModalReservation.propTypes = {
    deleteReservation: PropTypes.func.isRequired
}
export default connect(mapStateToProps, {deleteReservation, postCustomer})(ModalReservation)