import React, { Component } from 'react';
import '../css/AdminReservation.css';
import { fetchReservations } from '../../store/actions/reservationActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ModalReservation from '../../components/admin/modal/ModalReservation';
import FormNewReservation from '../../components/admin/form/FormNewReservation';
import { Modal, Button, ModalHeader, ModalBody} from 'reactstrap';
import BottomBar from '../../components/admin/nav/BottomBar';

class AdminReservation extends Component {
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
        this.props.fetchReservations()
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
        const filteredReservations = this.props.reservation.filter(
            (reservation) => {
                return (
                reservation.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                reservation.surname.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                reservation.date.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                reservation.phone.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                )
            }
        )
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
        const r = filteredReservations.map(r => {
            return (
              <ModalReservation
              key={r._id}
              reservation={r}
              />
            );
          });

            return (
                <div>
                    <input className="search-reservation form-search form-control mr-sm-2" type="search" onChange={ this.updateSearch.bind(this) } placeholder="Search" name="search" value={this.state.search} />
                    <Button className="button-create" onClick={this.toggle}>Nouveau</Button>                  
                    <Modal isOpen={this.state.modal} toggle={this.toggle} centered>
                    <ModalHeader className="modal-header" close={closeBtn}>
                        Nouvelle Reservation
                    </ModalHeader>
                    <ModalBody>
                        <FormNewReservation />
                    </ModalBody>
                    </Modal>
                <div className="admin">
                    <ul className="list-group">{r}</ul>
                </div>
                <BottomBar />
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
