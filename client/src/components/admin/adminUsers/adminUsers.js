import React, { Component } from 'react';
import { fetchUsers } from '../../../store/actions/userActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ModalUsers from './ModalUsers';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class AdminUsers extends Component {
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
        this.props.fetchUsers();
    }
    
    render() {
            const filteredUser = this.props.user.filter(
                (user) => {
                    return (
                    user.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                    user.phone.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                    )
                }
            )
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
        const c = filteredUser.map(c => {
            return (
              <ModalUsers
              key={c._id}
              user={c}
              />
            );
          });

            return (
                <div className='container'>
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
    user: state.user.user
});


export default connect(mapStateToProps, { fetchUsers })(AdminUsers)
