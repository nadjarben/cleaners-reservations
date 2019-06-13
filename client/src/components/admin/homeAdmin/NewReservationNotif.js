import React from 'react';
import { connect } from 'react-redux';
import { fetchReservations } from '../../../store/actions/reservationActions';
import './NewReservationNotif.css'

class NewReservationNotif extends React.Component {

    componentDidMount() {
        this.props.fetchReservations();
    }

    render() {
        return (
            <div className="newreservationnotif">
                <p>? nouvelle Reservation:</p>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    reservations: state.reservations.reservation
});


export default connect(mapStateToProps,{ fetchReservations })(NewReservationNotif)