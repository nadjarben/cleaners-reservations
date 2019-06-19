import React from 'react';
import { connect } from 'react-redux';
import { fetchLastReservations } from '../../../store/actions/reservationActions';
import './NewReservationNotif.css'

class NewReservationNotif extends React.Component {

    componentDidMount() {

        this.props.fetchLastReservations();
    }
    

    render() {
        const { lastReservation } = this.props;
        console.log(lastReservation)
        
        
        return (
            <div>
                <p>alors</p>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    lastReservation: state.reservations.lastReservation
});


export default connect(mapStateToProps,{ fetchLastReservations })(NewReservationNotif)