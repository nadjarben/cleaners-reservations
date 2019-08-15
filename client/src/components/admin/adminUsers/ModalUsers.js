import React from 'react';
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { deleteUser, addCreditToUser, changeUserName } from '../../../store/actions/userActions';
import { connect } from 'react-redux';
import pencil from '../../../images/pencil.png';
import plus from '../../../images/plus-circle.png';
import minus from '../../../images/minus-circle.png';


 class ModalUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          credit: '',
          name: this.props.user.name,
          surname: this.props.user.surname,
          email: this.props.user.email,
          phone: this.props.user.phone,
          address: this.props.user.address,
          renderCredit: false,
          renderCreditMinus: false,
          input: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal,
          renderCredit: false,
          renderCreditMinus: false,
          input: false
        }));
      }
      toggleAddCreditToUser = () => {
        this.setState(prevState => ({
          renderCredit: !prevState.renderCredit
        }));
      }
      toggleRetireCreditToUser = () => {
        this.setState(prevState => ({
          renderCreditMinus: !prevState.renderCreditMinus
        }));
      }
      toggleUser = () => {
        this.setState(prevState => ({
          input: !prevState.input
        }));
      }
      handleDeleteUser(e) {
        const id = this.props.user._id
        this.props.deleteUser(id);
        window.location.reload(); 
      }
      handleSubmitAddCredit = (e) => {
        let actualCredit  = Number(this.state.credit);
        let  prevCredit  = Number(this.props.user.credit);
        const credit = actualCredit + prevCredit;
        const id = this.props.user._id
        this.props.addCreditToUser(id, credit);
        window.location.reload();
      }
      handleSubmitRetireCredit = (e) => {
        let actualCredit  = Number(this.state.credit);
        let  prevCredit  = Number(this.props.user.credit);
        const credit = prevCredit - actualCredit;
        const id = this.props.user._id
        this.props.addCreditToUser(id, credit);
        window.location.reload();
      }
      changeUser = (e) => {
        const { name, phone, surname, address, email }  = this.state;
        const id = this.props.user._id
        this.props.changeUserName(id, name, surname, phone, email, address);
        window.location.reload();
      }

      handleChange = (e) => {
        this.setState ({[e.target.name]: e.target.value})
      }

      handleAddCreditUser = () => {
        if(this.state.renderCredit === true)
        return (
          <div>
            <input name='credit' value={this.state.credit} onChange={this.handleChange} type='number' placeholder='Ajouter credit'/>
            <button type='submit' onClick={this.handleSubmitAddCredit}>Ajouter</button>
          </div>
        )
      }
      handleRetireCreditUser = () => {
        if(this.state.renderCreditMinus === true)
        return (
          <div>
            <input name='credit' value={this.state.credit} onChange={this.handleChange} type='number' placeholder='Retirer credit'/>
            <button type='submit' onClick={this.handleSubmitRetireCredit}>Enlever</button>
          </div>
        )
      }
      inputName = () => {
        if(this.state.input === true)
        return (
          <div>
            <input name='name' value={this.state.name} onChange={this.handleChange} type='text' placeholder='changer le nom'/>
          </div>
        )
      }
      inputSurname = () => {
        if(this.state.input === true)
        return (
          <div>
            <input name='surname' value={this.state.surname} onChange={this.handleChange} type='text' placeholder='changer le prenom'/>
          </div>
        )
      }
        inputAddress = () => {
          if(this.state.input === true)
          return (
            <div>
              <input name='address' value={this.state.address} onChange={this.handleChange} type='text' placeholder="changer l'addresse"/>
            </div>
          )
        }       
      inputPhone = () => {
        if(this.state.input === true)
        return (
          <div>
            <input name='phone' value={this.state.phone} onChange={this.handleChange} type='text' placeholder='changer le telephone'/>
          </div>
        )
      }
      inputEmail = () => {
        if(this.state.input === true)
        return (
          <div>
            <input name='email' value={this.state.email} onChange={this.handleChange} type='text' placeholder='changer le mail'/>
          </div>
        )
      }
      renderValidate = () => {
        if(this.state.input === true)
        return(
          <div>
            <Button color="primary" onClick={this.changeUser} >Valider</Button>
          </div>
        )
      }
    
    render() {
        const admin = () => {
            if(this.props.user.isAdmin === true)
            return <p>oui</p>
            else return <p>non</p>
        }
        
        const {user} = this.props;
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
     return(
        <div>
            <li className="list-group-item" onClick={this.toggle}>{user.name} {user.surname} </li>
                <Modal isOpen={this.state.modal} toggle={this.toggle} centered style={{backgroundColor:'', width:'100%', zIndex:'100000'}}>
                    <ModalHeader style={{backgroundColor:'#0E1521', color: 'white'}} className="modal-header" close={closeBtn}>
                      <div className='row'>
                        <div className='col-9'>
                          {user.name} {user.surname}
                          {this.inputName()}
                          {this.inputSurname()}
                        </div>
                        <div className='col-2'>
                          <img src={pencil} alt='pencil' onClick={this.toggleUser} style={{cursor:'pointer'}} />
                        </div>
                      </div>
                    </ModalHeader>
                    <ModalBody>
                        {this.inputPhone()}
                        <h5>Tel: </h5><p>{user.phone}</p>
                        {this.inputEmail()}
                        <h5>Email: </h5><p>{user.email}</p>
                        {this.inputAddress()}
                        <h6>Address: </h6><p>{user.address}</p>
                        <div className='row'>
                          <div className='col-2'>
                          <h5>Credit: </h5><p>{user.credit}</p>
                          </div>
                          <div className='col-1'>
                          <img src={plus} alt='plus' onClick={this.toggleAddCreditToUser} />
                          </div>
                          <div className='col-1'>
                          <img src={minus} alt='minus' onClick={this.toggleRetireCreditToUser} />
                          </div>
                        </div>
                          {this.handleAddCreditUser()}
                          {this.handleRetireCreditUser()}
                        <h5>Admin: </h5> <p>{admin()}</p>
                    </ModalBody>
                    <ModalFooter>
                      {this.renderValidate()}
                      <Button color="danger" onClick={e => this.handleDeleteUser(e)} >Supprimer</Button>
                    </ModalFooter>
            </Modal>
        </div>
     )
    }
 }
 const mapStateToProps = state => ({
    
});


export default connect(mapStateToProps, {deleteUser, addCreditToUser, changeUserName })(ModalUsers)