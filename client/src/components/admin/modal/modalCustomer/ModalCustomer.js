import React from 'react';
import { Modal, ModalHeader } from 'reactstrap';
import TabModalCustomer from './TabModalCustomer';
import { deleteCustomer } from '../../../../store/actions/customerActions';
import { connect } from 'react-redux';

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
            </Modal>
        </div>
     )
    }
 }
 const mapStateToProps = state => ({
    
});

 export default connect(mapStateToProps, {deleteCustomer})(ModalCustomer)