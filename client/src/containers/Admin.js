import React, { Component } from 'react';
import { fetchReservations } from '../store/actions/reservationActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import Commande from '../components/Commande';
import './Admin.css';
import Spinner from '../components/Spinner';

class Admin extends Component {
    state = {
        loading: true
      }

    componentDidMount() {
        this.handleFetchReservations();
    }

    handleFetchReservations() {
        this.props.fetchReservations();
        this.setState({loading:false});

}
    
    render() {
        const { reservation } = this.props;
        const r = reservation.map(r => {
            return (
              <Commande
              key={r._id}
              reservation={r}
              />
            );
          });
            return (
                <div>
                    <NavBar />
                    {this.state.loading &&
                     <Spinner />
                    }
                <div className="admin">
                    <ul className="list-group">{r}</ul>
                </div>
                </div>
            )
        }
    }


const mapStateToProps = state => ({
    reservation: state.reservations.reservation
});

Admin.propTypes = {
    fetchReservations: PropTypes.func.isRequired,
}
export default connect(mapStateToProps, { fetchReservations })(Admin)
