import React from 'react';
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { deleteContact } from '../../../store/actions/contactActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


 class ModalContact extends React.Component {
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
      handleDeleteContact(e) {
        const id = this.props.contact._id
        this.props.deleteContact(id);
        window.location.reload(); 
      }

    render() {    

        const {contact} = this.props;
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
     return(
        <div>
            <li className="list-group-item" onClick={this.toggle}>{contact.name} </li>
                <Modal isOpen={this.state.modal} toggle={this.toggle} centered>
                    <ModalHeader style={{backgroundColor:'#0E1521', color: 'white'}} className="modal-header" close={closeBtn}>
                        {contact.name} 
                    </ModalHeader>
                    <ModalBody>
                        <h5>Tel: </h5><p>{contact.phone}</p>
                        <h5>Email: </h5><p>{contact.email}</p>
                        <h6>Message: </h6><p>{contact.message}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={e => this.handleDeleteContact(e)} >Supprimer</Button>
                    </ModalFooter>
            </Modal>
        </div>
     )
    }
 }
 const mapStateToProps = state => ({
    
});
ModalContact.propTypes = {
    deleteContact: PropTypes.func.isRequired
}
export default connect(mapStateToProps, {deleteContact })(ModalContact)