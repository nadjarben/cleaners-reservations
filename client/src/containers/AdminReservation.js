import React, { Component } from 'react';
import { fetchReservations } from '../store/actions/reservationActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBar from '../components/navbar/NavBar';
import CardReservation from '../components/CardReservation';
import NavAdmin from '../components/NavAdmin';
import FormReservation from '../components/FormReservation';
import { Modal, Button, ModalHeader, ModalBody} from 'reactstrap';
import Spinner from '../components/Spinner';
import './AdminReservation.css';

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
                    <input className="search-reservation form-search form-control mr-sm-2" type="search" onChange={ this.updateSearch.bind(this) } placeholder="Search" name="search" value={this.state.search} />
                    <Button className="button-create" onClick={this.toggle}>Nouveau</Button>                  
                    <Modal isOpen={this.state.modal} toggle={this.toggle} centered>
                    <ModalHeader className="modal-header" close={closeBtn}>
                        Nouvelle Reservation
                    </ModalHeader>
                    <ModalBody>
                        <FormReservation />
                    </ModalBody>
                    </Modal>
                
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
