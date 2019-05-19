import React, { Component } from 'react';
import { fetchReservations } from '../store/actions/reservationActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Commande from '../components/Commande';
import './Admin.css';

class Admin extends Component {

    componentDidMount() {
        this.props.fetchReservations()
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
                <div className="admin">
                    <ul className="list-group">{r}</ul>
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
