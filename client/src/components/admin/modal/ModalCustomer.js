import React from 'react';
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { deleteCustomer } from '../../../store/actions/customerActions';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



 class ModalCustomer extends React.Component {
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
        e.preventDefault();
        const id = this.props.customer._id
        this.props.deleteCustomer(id);
        window.location.reload(); 
      }


    render() {  
      const style = {
        width: '100%',
        maxWidth: 360,
    }

        const {customer} = this.props;
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
     return(
        <div>
              <List style={style} component="nav"  aria-label="Contacts">
      <ListItem button onClick={this.toggle}>
        <ListItemText>{customer.name} {customer.surname}  ||  {customer.address} </ListItemText>
      </ListItem>
    </List>
    
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
ModalCustomer.propTypes = {
    deleteCustomer: PropTypes.func.isRequired
}
export default connect(mapStateToProps, {deleteCustomer })(ModalCustomer)