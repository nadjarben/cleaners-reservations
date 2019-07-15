import React from 'react';
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { deleteLastReservation } from '../../../store/actions/notifActions';
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
      handleDeleteLastReservation() {
        const id = this.props.reservation._id
        this.props.deleteLastReservation(id);
        window.location.reload(); 
      }

    render() {    

        const {lastReservation} = this.props;
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
     return(
        <div>
            <li className="list-group-item" onClick={this.toggle}>{lastReservation.name} {lastReservation.surname} || {lastReservation.date} | {lastReservation.hour} </li>
                <Modal isOpen={this.state.modal} toggle={this.toggle} centered>
                    <ModalHeader className="modal-header" close={closeBtn}>
                        {lastReservation.name} {lastReservation.surname}
                    </ModalHeader>
                    <ModalBody>
                        <h5>Addresse: </h5><p>{lastReservation.address}</p>
                        <h5>Ville: </h5><p>{lastReservation.city}</p>
                        <h5>Tel: </h5><p>{lastReservation.phone}</p>
                        <h5>Email: </h5><p>{lastReservation.email}</p>
                        <h5>Date: </h5><p>{lastReservation.date}</p>
                        <h5>Heure: </h5><p>{lastReservation.hour}</p>
                        <h5>informations: </h5><p>{lastReservation.info}</p>
                        <h5>namefact: </h5><p>{lastReservation.namefact}</p>
                        <h5>addressfact: </h5><p>{lastReservation.addressfact}</p>
                        <h5>note: </h5><p>{lastReservation.note}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={() => this.handleDeleteLastReservation()} >Supprimer</Button>
                    </ModalFooter>
            </Modal>
        </div>
     )
    }
 }
 const mapStateToProps = state => ({
    
});
ModalReservation.propTypes = {
    deleteLastReservation: PropTypes.func.isRequired
}
export default connect(mapStateToProps, {deleteLastReservation})(ModalReservation)