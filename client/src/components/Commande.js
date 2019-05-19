import React from 'react';
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Commande.css';

 class Commande extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }      

    render() {    
        const {reservation} = this.props;
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
     return(
        <div>
            <li className="list-group-item" onClick={this.toggle}>{reservation.name} {reservation.surname} </li>
                <Modal isOpen={this.state.modal} toggle={this.toggle} centered>
                    <ModalHeader className="modal-header" close={closeBtn}>
                        <h2>{reservation.name} {reservation.surname}</h2>
                    </ModalHeader>
                    <ModalBody>
                        <h5>Addresse: </h5><p>{reservation.address}</p>
                        <h5>Ville: </h5><p>{reservation.city}</p>
                        <h5>Tel: </h5><p>{reservation.phone}</p>
                        <h5>Email: </h5><p>{reservation.email}</p>
                        <h5>Date: </h5><p>{reservation.date}</p>
                        <h5>Heure: </h5><p>{reservation.hour}</p>
                        <h7>informations: </h7><p>{reservation.info}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button>Archiver</Button>
                        <Button color="danger">Supprimer</Button>
                    </ModalFooter>
            </Modal>
        </div>
     )
    }
 }

export default Commande