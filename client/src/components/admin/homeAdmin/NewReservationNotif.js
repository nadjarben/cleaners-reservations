import React, { Component } from 'react';
import { fetchLastReservations } from '../../../store/actions/notifActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ModalLastReservation from '../../../components/admin/modal/ModalLastReservation';
import { Modal, Button, ModalHeader, ModalBody} from 'reactstrap';


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
        const filteredLastReservations = this.props.lastReservation.filter(
            (lastReservation) => {
                return (
                lastReservation.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                lastReservation.surname.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                lastReservation.date.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                lastReservation.phone.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                )
            }
        )
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
        const r = filteredLastReservations.map(r => {
            return (
              <ModalLastReservation
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
                        
                    </ModalBody>
                    </Modal>
                <div className="admin">
                    <ul className="list-group">{r}</ul>
                </div>
                </div>
            )
        }
    }

const mapStateToProps = state => ({
    lastReservation: state.reservations.reservation
});

AdminReservation.propTypes = {
    fetchLastReservations: PropTypes.func.isRequired,
}
export default connect(mapStateToProps, { fetchLastReservations })(AdminReservation)
