import React from 'react';
import { Modal, ModalHeader, ModalFooter } from 'reactstrap';
import TabModalCustomer from './TabModalCustomer';
import { deleteCustomer } from '../../../../store/actions/customerActions';
import { connect } from 'react-redux';
import whatsapp from '../../../../images/whatsapp-sw.png';
import plus from '../../../../images/plus-box.png'



 class ModalCustomer extends React.Component {
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
      handleDeleteCustomer(e) {
        e.preventDefault();
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
                <Modal isOpen={this.state.modal} toggle={this.toggle} centered size='lg'  zIndex='10000'>
                    <ModalHeader className="modal-header" style={{backgroundColor:'#42a5f5', color: 'white'}} close={closeBtn} >
                        {customer.name} {customer.surname}
                    </ModalHeader>
                    <TabModalCustomer customer={customer} />
                    <ModalFooter>
                        <a href={`https://api.whatsapp.com/send?phone=${customer.phone}&text=La commande ${this.state.input} est prete`} >
                          <img src={whatsapp} alt='wa' />
                        </a>
                        <img src={plus} alt='plus' />
                    </ModalFooter>
            </Modal>
        </div>
     )
    }
 }
 const mapStateToProps = state => ({
    
});

 export default connect(mapStateToProps, {deleteCustomer})(ModalCustomer)