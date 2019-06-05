import React, { Component } from 'react';
import { fetchCustomers } from '../store/actions/customerActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from '../components/navbar/NavBar';
import CardCustomer from '../components/CardCustomer';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import './AdminCustomer.css';
import FormCustomer from '../components/FormCustomer';
import NavAdmin from '../components/NavAdmin';
import Spinner from '../components/Spinner';

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
        this.handleFetchCustomers();
    }

    handleFetchCustomers() {
        this.props.fetchCustomers();
        this.setState({loading:false});
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
              <CardCustomer
              key={c._id}
              customer={c}
              />
            );
          });

            return (
                <div>
                    <NavBar />
                    <NavAdmin />
                    <input className="search-reservation form-search form-control mr-sm-2" type="search" onChange={ this.updateSearch.bind(this) } placeholder="Search" name="search" value={this.state.search} />
                    <Button className="button-create" onClick={this.toggle}>Nouveau</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} centered>
                    <ModalHeader className="modal-header" close={closeBtn}>
                        Nouveau Client
                    </ModalHeader>
                    <ModalBody>
                        <FormCustomer />
                    </ModalBody>
                    </Modal>
                    {this.state.loading &&
                     <Spinner />
                    }
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
