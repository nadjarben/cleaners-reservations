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
        const lr = lastReservation.map(lr => {
            return (
              <li
              key={lr._id}
              lastReservation={lr}
              />
            );
          });

        return (
            <div>
                <p>{lr}</p>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    lastReservation: state.reservations.lastReservation
});


export default connect(mapStateToProps,{ fetchLastReservations })(NewReservationNotif)