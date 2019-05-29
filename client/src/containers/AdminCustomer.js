import React, { Component } from 'react';
import { fetchCustomers } from '../store/actions/customerActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import CardCustomer from '../components/CardCustomer';
import { Button } from 'reactstrap';
import './AdminCustomer.css';
import NavAdmin from '../components/NavAdmin';
import Spinner from '../components/Spinner';

class AdminCustomer extends Component {
    state = {
        loading: true
      }

    componentDidMount() {
        this.handleFetchCustomers();
    }

    handleFetchCustomers() {
        this.props.fetchCustomers();
        this.setState({loading:false});

}
    
    render() {
        const { customer } = this.props;
        const c = customer.map(c => {
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
                    <input className="search-reservation form-search form-control mr-sm-2" type="search" placeholder="Search" />
                    <Button className="button-create" onClick={this.toggle}>Nouveau</Button>
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
