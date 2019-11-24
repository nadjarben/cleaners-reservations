import React, { Component } from 'react';
import '../css/AdminCustomer.css';
import { fetchCustomers } from '../../store/actions/customerActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ModalCustomer from '../../components/admin/modal/modalCustomer/ModalCustomer';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import FormNewCustomer from '../../components/admin/form/FormNewCustomer';

class AdminCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          search: ''
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
      updateSearch = (e) => {
        this.setState ({search: e.target.value})
      }
    componentDidMount() {
        this.props.fetchCustomers();
    }
    
    render() {
            const filteredCustomer = this.props.customer.filter(
                (customer) => {
                    return (
                    customer.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                    customer.surname.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                    )
                }
            )
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
        const c = filteredCustomer.map(c => {
            return (
              <ModalCustomer
              key={c.customerId}
              customer={c}
              />
            );
          });

            return (
                <div className='container'>
                    <input className="search-reservation form-search form-control mr-sm-2" type="search" onChange={ this.updateSearch.bind(this) } placeholder="Search" name="search" value={this.state.search} />
                    <Button className="button-create" onClick={this.toggle}>Nouveau</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} centered zIndex='10000' size='lg'>
                    <ModalHeader className="modal-header" close={closeBtn}>
                        Nouveau Client
                    </ModalHeader>
                    <ModalBody>
                        <FormNewCustomer />
                    </ModalBody>
                    </Modal>
                <div className="admin">
                    <ul className="list-group">{c}</ul>
                </div>
                </div>
            )
        }
    }


const mapStateToProps = state => ({
    customer: state.customers.customer
});

AdminCustomer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
}
export default connect(mapStateToProps, { fetchCustomers })(AdminCustomer)
