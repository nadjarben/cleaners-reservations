import React, { Component } from 'react';
import { fetchReservations } from '../store/actions/reservationActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import CardReservation from '../components/CardReservation';
import NavAdmin from '../components/NavAdmin';
import './AdminReservation.css';
import Spinner from '../components/Spinner';

class AdminReservation extends Component {
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
              <CardReservation
              key={r._id}
              reservation={r}
              />
            );
          });

            return (
                <div>
                    <NavBar />
                    <NavAdmin />
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

AdminReservation.propTypes = {
    fetchReservations: PropTypes.func.isRequired,
}
export default connect(mapStateToProps, { fetchReservations })(AdminReservation)
