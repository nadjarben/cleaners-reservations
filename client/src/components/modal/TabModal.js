import React from 'react';
import { Input, Label, TabContent, TabPane, Card, Button, CardTitle, CardText, Row, Col, ModalHeader, ModalFooter } from 'reactstrap';
import { FormattedMessage } from 'react-intl'; 
import { Form } from 'react-bootstrap';
import { connect } from "react-redux";
import { postReservation } from '../../store/actions/reservationActions';
import { postLastReservation } from '../../store/actions/notifActions';
import { fetchCustomers, postCustomer } from '../../store/actions/customerActions';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';

class TabModal extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 1,
      switch: false,
      color:'red',
      name: '',
      surname: '', 
      phone: '', 
      email: '', 
      address: '', 
      city: '', 
      date: '', 
      hour: '', 
      info: '',
      namefact: '',
      numfact: '',
      addressfact: '',
      note: ''
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  handleNext = () => {
    this.setState({
      activeTab: this.state.activeTab + 1
    })
  }
  handlePrev = () => {
    this.setState({
      activeTab: this.state.activeTab - 1
    })
  }
  handleSwitch = () => {
    console.log(this.state.switch)
    this.setState({
      switch: !this.state.switch
    })
  }
  handleButtonCompleteSecond = () => {
    if(this.state.date === '' || this.state.phone === '' || this.state.city === '' || this.state.address === ''  )
      return  <Button style={{width:'120px', backgroundColor:'red'}} >Suivant</Button>
    else
      return  <Button style={{width:'120px'}} onClick={()=> this.handleNext()}>Suivant</Button>
  }
  handleButtonCompleteFirst = () => {
    if(this.state.name === '' || this.state.hour === '' )
      return  <Button style={{width:'120px', backgroundColor:'red'}} >Suivant</Button>
    else
      return  <Button style={{width:'120px'}} onClick={()=> this.handleNext()}>Suivant</Button>
  }
  
  displayPro = () => {
    if(this.state.switch === true)
    return (
      <div>
        <div className='row'>
          <div className='col-12'>
            <Label for='namefact'>Nom de facturation :</Label>
            <Input placeholder='' type='name' name="namefact" autocomplete="off" value={this.state.namefact} onChange={ this.handleChange } />
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <Label for='numfact'>Numero de Tva, heshbonit :</Label>
            <Input placeholder='' type='text' name="numfact" autocomplete="off" value={this.state.numfact} onChange={ this.handleChange } />
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <Label for='pro'>Addresse de facturation :</Label>
            <Input placeholder='' type='address' name="addressfact" autocomplete="off" value={this.state.addressfact} onChange={ this.handleChange } />
          </div>
        </div>
      </div>
    )
  }
  displayPrev = () => {
    if(this.state.activeTab != 1)
    return (
      <div className='col-6'>
        <Button style={{width:'120px'}} onClick={()=> this.handlePrev()}>Precedent</Button>
      </div>
    )
  }
  displayNext = () => {
    if(this.state.activeTab != 3)
    return (
      <div className='col-6' >
        {this.handleButtonCompleteFirst()}
      </div>
    )
  }
  displaySubmit = () => {
    if(this.state.activeTab === 3)
    return (
      <div className='col-6' >
        <Button style={{width:'120px'}} type="submit">Confirmer</Button>
      </div>
    )
  }

  componentDidMount() {
    this.props.fetchCustomers()
  }

  handleChange = (e) => {
    this.setState ({[e.target.name]: e.target.value})
  }

  doesCustomerExist = () => {
    const { customers } = this.props;
    const { name, surname, phone, email, address, city, info } = this.state
    let result = customers.map(c => c.phone)
    let isInArray = result.indexOf(this.state.phone) > -1;
    if(isInArray === false)
      return (
        this.props.postCustomer(name, surname, phone, email, address, city, info)
      )
  }

  handleSubmit = (e) => {
    this.doesCustomerExist();
    const textAlert =
    'Votre commande a bien ete passee, nous vous reconfirmerons par message dans lheure, ' +
    'En cas dimprevus veuillez nous contacter au 0586305515.'
    const { name, surname, phone, email, address, city, date, hour, info } = this.state
    e.preventDefault();
    this.props.postReservation(name, surname, phone, email, address, city, date, hour, info);
    this.props.postLastReservation(name, surname, phone, email, address, city, date, hour, info);
    alert(textAlert);
      //this.props.history.push('/home');
  }

  render() {
    return (
      <Form onSubmit={e => this.handleSubmit(e) && this.doesCustomerExist()}>
        <TabContent activeTab={this.state.activeTab}>

          <TabPane tabId={1}>
            <ModalHeader style={{color: 'darkgrey'}}>Renseignez le formulaire suivant</ModalHeader>
            <div className='row justify-content'>
              <div className='col' style={{marginTop:'5%'}}>
                <p><FormattedMessage id="reservation.min" /></p>
                <p><FormattedMessage id="reservation.min2" /></p>
                <p><FormattedMessage id="reservation.min3" /></p>
              </div>
            </div>
            <Divider />
        
            <div className='row' style={{marginTop:'5%'}}>
              <div className ='col-6'>
                <Label for="date">* Date :</Label>
                <Input required={true} type= "date" name="date" value={this.state.date } onChange={ this.handleChange } />
              </div>
            
              <div className ='col-6'>
                <Label for="hour">* Heure :</Label>
                <Input required={true} type= "time" placeholder="10:30" name="hour" value={this.state.hour} onChange={ this.handleChange } />
              </div>
            </div>
            <br/><br/>
          </TabPane>

          <TabPane tabId={2}>
          <ModalHeader style={{color: 'darkgrey'}}>Informations personnelles</ModalHeader>

            <div className='row' style={{marginTop:'2%'}}>
              <div className='col-6'>
                <Label for="firstname">* First Name :</Label>
                <Input required={true} type="text" placeholder="" name="name" value={this.state.name}  onChange={this.handleChange} />
              </div>
              <div className='col-6'>
                <Label for="surname"> Surname :</Label>
                <Form.Control required={true} type="text" placeholder="" name="surname" value={this.state.surname} onChange={ this.handleChange } />
              </div>
            </div>

            <div className='row'>
              <div className='col-12'>
                <Label for="phone">* Phone :</Label>
                <Form.Control className="phone" required={true} type="phone" placeholder="" name="phone" value={this.state.phone} onChange={ this.handleChange } />
              </div>
            </div>

            <div className='row'>
              <div className='col-12'>
                <Label for="email"> E-mail :</Label>
                <Form.Control type="email" placeholder="" name="email" value={this.state.email} onChange={ this.handleChange } />
              </div>
            </div>

            <div className='row'>
              <div className='col-12'>
                <Label for="address">* Address :</Label>
                <Input required={true} type='address' placeholder="" name="address" value={this.state.address} onChange={ this.handleChange }  />
              </div>
            </div>

            <div className='row'>
              <div className='col-12'>
                  <Label for='city'>* City :</Label>
                  <Input required={true} type='city' placeholder="" name="city" value={this.state.city } onChange={ this.handleChange } />
              </div>
            </div>

            <div className='row'>
              <div className='col-12'>
                <Label for='city'>Informations complementaires :</Label>
                <Input placeholder='Numero dappartement, digicode, toute information utile.' type="textarea" rows='3' name="info" value={this.state.info } onChange={ this.handleChange } />
              </div>
            </div>
            <br/>
          </TabPane>

          <TabPane tabId={3}>
          <ModalHeader style={{color: 'darkgrey'}}>Confirmation</ModalHeader>
          <div className='row' style={{marginTop:'2%'}}>
            <div className='col-12'>
            <Label for='city'>Professionel :</Label>
              <Switch onClick={() => this.handleSwitch()}/>
              {this.displayPro()}
            </div>
          </div>

          <div className='row'>
            <div className='col-12'>
            <Label for='city'>Note :</Label>
            <Input placeholder='' type="textarea" rows='3' name="note" value={this.state.note } onChange={ this.handleChange } />
            </div>
          </div>
          <br/>
          </TabPane>

        </TabContent>
        <ModalFooter>
        <div className='row'>
            {this.displayPrev()}         
            {this.displayNext()}
            {this.displaySubmit()}
        </div>
        </ModalFooter>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  customers: state.customers.customer,
  
})

export default connect(
  mapStateToProps,
  { postReservation, postLastReservation, fetchCustomers, postCustomer }
)(TabModal);