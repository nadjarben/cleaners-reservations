import React from 'react';
import { connect } from 'react-redux';
import { fetchLastReservations } from '../../../store/actions/notifActions';
import './NewReservationNotif.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import SwipeToDelete from 'react-swipe-to-delete-component';

class NewReservationNotif extends React.Component {

    componentDidMount() {
        this.props.fetchLastReservations();
    }


    render() {
        const { lastReservation } = this.props;
        console.log(lastReservation)
        const lr = lastReservation.map(lr => {
            return (
                <SwipeToDelete className="swipeable" key={lr._id} lastReservation={lr}>
                    <div className="list-group-item">
      <h4>{lr.name} {lr.surname}</h4>
    </div>
                </SwipeToDelete>
            
            );
          });
        
        return (
            <div>
            {lr}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    lastReservation: state.notif.lastReservation
});


export default connect(mapStateToProps,{ fetchLastReservations })(NewReservationNotif)