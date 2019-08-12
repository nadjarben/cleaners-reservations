import React from 'react';
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { deleteReservation } from '../../../store/actions/reservationActions';
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
      handleDeleteReservation() {
        const id = this.props.reservation._id
        this.props.deleteReservation(id);
        window.location.reload(); 
      }

    render() {    

        const {reservation} = this.props;
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
     return(
        <div>
            <li className="list-group-item" onClick={this.toggle}>{reservation.name} {reservation.surname} || {reservation.date} | {reservation.hour} </li>
                <Modal isOpen={this.state.modal} toggle={this.toggle} centered>
                    <ModalHeader className="modal-header" close={closeBtn} style={{backgroundColor:'#0E1521', color:'white', marginTop:'5vh'}}>
                        {reservation.name} {reservation.surname} 
                    </ModalHeader>
                    <ModalBody>
                        <h5>Addresse: </h5><p>{reservation.address}</p>
                        <h5>Informations: </h5><p>{reservation.info}</p>
                        <h5>Tel: </h5><p>{reservation.phone}</p>
                        <h5>Email: </h5><p>{reservation.email}</p>
                        <h5>Date: </h5><p>{reservation.date}</p>
                        <h5>Heure: </h5><p>{reservation.hour}</p>
                        <div className='row'>
                          <div className='col-6'>
                            <h5>Facture:</h5>
                          </div>
                        </div>
                        <div className='col-6'>
                          <p>{reservation.namefact}</p>
                          <p>{reservation.addressfact}</p>
                        </div>
                        <h5>Note: </h5><p>{reservation.note}</p>

                    </ModalBody>
                    <ModalFooter>
                        <Button>Archiver</Button>
                        <Button color="danger" onClick={() => this.handleDeleteReservation()} >Supprimer</Button>
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
export default connect(mapStateToProps, {deleteReservation})(ModalReservation)