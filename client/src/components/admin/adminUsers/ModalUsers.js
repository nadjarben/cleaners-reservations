import React from 'react';
import { ModalFooter } from 'reactstrap';
import { deleteUser, addCreditToUser, changeUserName } from '../../../store/actions/userActions';
import { connect } from 'react-redux';
import pencil from '../../../images/pencil.png';
import plus from '../../../images/plus-circle.png';
import minus from '../../../images/minus-circle.png';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


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
            <TextField name='credit' value={this.state.credit} onChange={this.handleChange} type='number' placeholder='Ajouter credit'/>
            <Button variant="outlined" color="primary" type='submit' onClick={this.handleSubmitAddCredit}>Ajouter</Button>
          </div>
        )
      }
      handleRetireCreditUser = () => {
        if(this.state.renderCreditMinus === true)
        return (
          <div>
            <TextField name='credit' value={this.state.credit} onChange={this.handleChange} type='number' placeholder='Retirer credit'/>
            <Button variant="outlined" color="secondary" type='submit' onClick={this.handleSubmitRetireCredit}>Enlever</Button>
          </div>
        )
      }

      renderValidate = () => {
        if(this.state.input === true)
        return(
          <div>
            <Button variant="outlined" color="primary" onClick={this.changeUser} >Valider</Button>
          </div>
        )
      }
      renderInput = () => {
        const admin = () => {
          if(this.props.user.isAdmin === true)
          return <p>oui</p>
          else return <p>non</p>
      }
        const { user } = this.props
        if(this.state.input === true)
        return (      
<div>
          <AppBar>
                    <Toolbar>
                      <IconButton edge="start" color="inherit" onClick={this.toggle} aria-label="close">
                        <CloseIcon />
                      </IconButton>
                      <div className='row' style={{textAlign:'center'}}>
                        <div className='col-10'>
                        <TextField name='name' value={this.state.name} onChange={this.handleChange} type='text' placeholder='changer le nom'/>
                        <TextField name='surname' value={this.state.surname} onChange={this.handleChange} type='text' placeholder='changer le prenom'/>
                        </div>
                        <div className='col-2'>
                          <img src={pencil} alt='pencil' onClick={this.toggleUser} style={{cursor:'pointer'}} />
                        </div>
                      </div>
                      </Toolbar>
                    </AppBar>
                      <div className='container'>                        
                        <h5>Tel: </h5><TextField name='phone' value={this.state.phone} onChange={this.handleChange} type='text' placeholder='changer le telephone'/>
                        <h5>Email: </h5><TextField name='email' value={this.state.email} onChange={this.handleChange} type='text' placeholder='changer le mail'/>
                        <h6>Address: </h6><TextField name='address' value={this.state.address} onChange={this.handleChange} type='text' placeholder="changer l'addresse"/>
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
                        </div>
                    </div>
        )
        else return (
          <div>
          <AppBar>
                    <Toolbar>
                      <IconButton edge="start" color="inherit" onClick={this.toggle} aria-label="close">
                        <CloseIcon />
                      </IconButton>
                      <div className='row'>
                        <div className='col-9'>
                          <h5>{user.name} {user.surname}</h5>
                        </div>
                        <div className='col-2'>
                          <img src={pencil} alt='pencil' onClick={this.toggleUser} style={{cursor:'pointer'}} />
                        </div>
                      </div>
                      </Toolbar>
                    </AppBar>                  
                      <div className='container'>
                        <h5>Tel: </h5><p>{user.phone}</p>
                        <h5>Email: </h5><p>{user.email}</p>
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
                        </div>
                    </div>
        )
      }
    
    render() {
      
        const {user} = this.props;
     return(
        <div>
            <li className="list-group-item" onClick={this.toggle}>{user.name} {user.surname} </li>
                <Dialog fullScreen open={this.state.modal} toggle={this.toggle}>
                  <div style={{marginTop:'12vh'}}>
                  {this.renderInput()}
                  </div>
                    <ModalFooter>
                      {this.renderValidate()}
                      <Button variant="outlined" color="secondary" onClick={e => this.handleDeleteUser(e)} >Supprimer</Button>
                    </ModalFooter>
                </Dialog>
        </div>
     )
    }
 }
 const mapStateToProps = state => ({
    
});


export default connect(mapStateToProps, {deleteUser, addCreditToUser, changeUserName })(ModalUsers)