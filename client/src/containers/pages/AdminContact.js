import React, { Component } from 'react';
import { fetchContacts } from '../../store/actions/contactActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ModalContact from '../../components/admin/modal/ModalContact';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class AdminContact extends Component {
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
      updateSearch = (e) => {
        this.setState ({search: e.target.value})
      }
    componentDidMount() {
        this.props.fetchContacts();
    }
    
    render() {
            const filteredContact = this.props.contact.filter(
                (contact) => {
                    return (
                    contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                    contact.phone.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                    )
                }
            )
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
        const c = filteredContact.map(c => {
            return (
              <ModalContact
              key={c._id}
              contact={c}
              />
            );
          });

            return (
                <div>
                    <input className="search-reservation form-search form-control mr-sm-2" type="search" onChange={ this.updateSearch.bind(this) } placeholder="Search" name="search" value={this.state.search} />
                    <Button className="button-create" onClick={this.toggle}>Nouveau</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} centered>
                    <ModalHeader className="modal-header" close={closeBtn}>
                        Nouveau Client
                    </ModalHeader>
                    <ModalBody>
                    </ModalBody>
                    </Modal>
                <div className="admin">
                    <ul className="list-group">{c}</ul>
                </div>
                </div>
            )
        }
    }


const mapStateToProps = state => ({
    contact: state.contacts.contact
});

AdminContact.propTypes = {
    fetchContacts: PropTypes.func.isRequired,
}
export default connect(mapStateToProps, { fetchContacts })(AdminContact)
