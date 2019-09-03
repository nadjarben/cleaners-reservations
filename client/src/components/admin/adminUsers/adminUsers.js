import React, { Component } from 'react';
import { fetchUsers } from '../../../store/actions/userActions';
import { connect } from 'react-redux';
import ModalUsers from './ModalUsers';


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
        //const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
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
                <div className='row'>
                    <input className="search-reservation form-search form-control mr-sm-2" type="search" onChange={ this.updateSearch.bind(this) } placeholder="Search" name="search" value={this.state.search} />
                </div>
                <div className='row-align-center' style={{marginTop:'5vh'}}>
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
