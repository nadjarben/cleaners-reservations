import React, { Component } from 'react';
import { fetchLastReservations } from '../../../store/actions/notifActions';
import { connect } from 'react-redux';
import ModalLastReservation from '../../admin/modal/ModalLastReservation';
import FormNewReservation from '../../admin/form/FormNewReservation';
import { Modal, ModalHeader, ModalBody} from 'reactstrap';

class GetLastReservation extends Component {
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
    componentDidMount() {
        this.props.fetchLastReservations()
    }
    updateSearch = (e) => {
        this.setState ({search: e.target.value})
      }
    
      handleSubmit = (e) => {
        const { name, surname, phone, email, address, city, date, hour, info } = this.state
        e.preventDefault()
        this.props.postReservation(name, surname, phone, email, address, city, date, hour, info)
      }
    
    render() {
        const { lastReservation } = this.props; 
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
        const lr = lastReservation.map(lr => {
            return (
              <ModalLastReservation
              key={lr._id}
              lastReservation={lr}
              />
            );
          });

            return (
                <div>               
                    <Modal isOpen={this.state.modal} toggle={this.toggle} centered>
                    <ModalHeader className="modal-header" close={closeBtn}>
                        Nouvelle Reservation
                    </ModalHeader>
                    <ModalBody>
                        <FormNewReservation />
                    </ModalBody>
                    </Modal>
                <div className="admin">
                    <ul className="list-group">{lr}</ul>
                </div>
                </div>
            )
        }
    }

const mapStateToProps = state => ({
    lastReservation: state.notif.lastReservation
});

export default connect(mapStateToProps, { fetchLastReservations })(GetLastReservation)
