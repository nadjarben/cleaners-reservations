import React from 'react';
import { Label, TabContent, TabPane, Button, ModalHeader, ModalFooter } from 'reactstrap';
import { FormattedMessage } from 'react-intl'; 
import { connect } from "react-redux";
import { postReservation } from '../../store/actions/reservationActions';
import { postLastReservation } from '../../store/actions/notifActions';
import { fetchCustomers, postCustomer } from '../../store/actions/customerActions';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import './googleInput.css';



class TabModal extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 1,
      switch: false,
      name: '',
      surname: '', 
      phone: '', 
      email: '', 
      address: '', 
      date: '', 
      hour: '', 
      info: '',
      namefact: '',
      addressfact: '',
      note: ''
    };
  }

  componentDidMount() {
    this.props.fetchCustomers()
  }

  handleChange = (e) => {
    console.log(this.state)
    this.setState ({[e.target.name]: e.target.value})
  }
  
  doesCustomerExist = () => {
    const { customers } = this.props;
    const { name, surname, phone, email, address, info } = this.state
    let result = customers.map(c => c.phone)
    let isInArray = result.indexOf(this.state.phone) > -1;
    if(isInArray === false)
      return (
        this.props.postCustomer(name, surname, phone, email, address, info)
      )
  }
  handleSubmit = (e) => {
    this.doesCustomerExist();
    const textAlert =
    'Votre commande a bien ete passee, nous vous reconfirmerons par message dans lheure, ' +
    'En cas dimprevus veuillez nous contacter au 0586305515.'
    const { name, surname, phone, email, address, date, hour, info, namefact, addressfact, note } = this.state
    e.preventDefault();
    this.props.postReservation(name, surname, phone, email, address, date, hour, info, namefact, addressfact, note);
    this.props.postLastReservation(name, surname, phone, email, address, date, hour, info, namefact, addressfact, note);
    alert(textAlert);
      //this.props.history.push('/home');
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
    this.setState({
      switch: !this.state.switch
    })
  }
  handleButtonCompleteFirst = () => {
    if(this.state.activeTab === 1)
    if(this.state.date === '' || this.state.hour === '' )
      return  <Button style={{width:'120px', backgroundColor:'red'}} ><FormattedMessage id='reservation.next' /></Button>
    else
      return  <Button style={{width:'120px'}} onClick={()=> this.handleNext()}><FormattedMessage id='reservation.next' /></Button>
  }
  handleButtonCompleteSecond = () => {
    if(this.state.activeTab === 2)
    if( this.state.name === '' || this.state.surname === '' || this.state.address === ''  )
      return  <Button style={{width:'120px', backgroundColor:'red'}} onClick={()=> alert('Please fill all informations')} ><FormattedMessage id='reservation.next' /></Button>
    else
      return  <Button style={{width:'120px'}} onClick={()=> this.handleNext()}><FormattedMessage id='reservation.next' /></Button>
  }
  
  displayPro = () => {
    const labelNamefact = <FormattedMessage id='reservation.namefact' />;
    const labelAddressfact = <FormattedMessage id='reservation.addressfact' />;
    if(this.state.switch === true)
    return (
      <div>
        <div className='row'>
          <div className='col-12'>
            <TextField
              label={labelNamefact}
              name='namefact'
              value={this.state.namefact}
              onChange={this.handleChange}
              margin="normal"
              autoComplete=""
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
          <TextField
              label={labelAddressfact}
              name='addressfact'
              value={this.state.addressfact}
              onChange={this.handleChange}
              margin="normal"
              autoComplete=""
            />
          </div>
        </div>
      </div>
    )
  }
  displayPrev = () => {
    if(this.state.activeTab !== 1)
    return (
      <div className='col-6'>
        <Button style={{width:'120px'}} onClick={()=> this.handlePrev()}><FormattedMessage id='reservation.prev' /></Button>
      </div>
    )
  }
  displayNext = () => {
    if(this.state.activeTab !== 3)
    return (
      <div className='col-6' >
        {this.handleButtonCompleteFirst()}
        {this.handleButtonCompleteSecond()}
      </div>
    )
  }
  displaySubmit = () => {
    if(this.state.activeTab === 3)
    return (
      <div className='col-6' >
        <Button style={{width:'120px', backgroundColor:'#0E1521'}} type="submit"><FormattedMessage id='reservation.confirmate' /></Button>
      </div>
    )
  }

  render() {
    const labelDate = <FormattedMessage id='reservation.date' />;
    const labelHour = <FormattedMessage id='reservation.hour' />;
    const labelName = <FormattedMessage id='reservation.name' />;
    const labelLastname = <FormattedMessage id='reservation.lastname' />;
    const labelPhone = <FormattedMessage id='reservation.phone' />;
    const labelEmail = <FormattedMessage id='reservation.email' />;
    const labelInfo = <FormattedMessage id='reservation.info' />;
    const labelNote = <FormattedMessage id='reservation.note' />;
    return (
      <form onSubmit={e => this.handleSubmit(e) && this.doesCustomerExist()}>
        <TabContent activeTab={this.state.activeTab}>

          <TabPane tabId={1}>
            <ModalHeader style={{color: 'darkgrey'}}>Renseignez le formulaire suivant</ModalHeader>
            <div className='text-center' style={{color:'red', fontStyle:'bold'}}>
              <div className='col' style={{marginTop:'5%'}}>
                <p><FormattedMessage id="reservation.min" /></p>
                <p><FormattedMessage id="reservation.min2" /></p>
                <p><FormattedMessage id="reservation.min3" /></p>
              </div>
            </div>
            <Divider />
        
            <div className='row' style={{marginTop:'5%', marginLeft:'22%'}}>
              <div className ='col-6'>
              <TextField
                    label={labelDate}
                    name='date'
                    type='date'
                    value={this.state.date}
                    onChange={this.handleChange}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    required
                  />
              </div>
            
              <div className ='col-6'>
              <TextField
                    label={labelHour}
                    name='hour'
                    type='time'
                    value={this.state.hour}
                    onChange={this.handleChange}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    required
                  />
              </div>
            </div>
            <br/><br/>
          </TabPane>

          <TabPane tabId={2}>
          <ModalHeader style={{color: 'darkgrey'}}>Informations personnelles</ModalHeader>

            <div className='row' style={{marginTop:'2%'}}>
              <div className='col-6'>
              <TextField
                    label={labelName}
                    autoComplete='given-name'
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                    margin="normal"
                    required
                    maxLenght='2'
                  />
              </div>
              <div className='col-6'>
              <TextField
                    label={labelLastname}
                    autoComplete='family-name'
                    name='surname'
                    value={this.state.surname}
                    onChange={this.handleChange}
                    margin="normal"
                    required
                  />
              </div>
            </div>

            <div className='row'>
              <div className='col-12'>
              <TextField
                    label={labelPhone}
                    name='phone'
                    value={this.state.phone}
                    onChange={this.handleChange}
                    margin="normal"
                    required
                  />
              </div>
            </div>

            <div className='row'>
              <div className='col-12'>
              <TextField
                    label={labelEmail}
                    name='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                    margin="normal"
                  />
              </div>
            </div>

            <div className='row'>
              <div className='col-12'>
                <div className='group' style={{marginTop:'5%'}}>
                <label style={{fontFamily:'roboto', color:'#808080', marginBottom:'-25%', fontSize:'17px'}}><FormattedMessage id='reservation.address' /></label>
                  <GooglePlacesAutocomplete
                  style={{marginTop:'10px'}}
                  autocompletionRequest={{
                  componentRestrictions: {
                    country: ['il'],
                    }
                  }}
                  placeholder=''
                  onSelect={({ description }) => (
                  this.setState({ address: description })
                  )}
                  />
                  <span className="highlight" />
                  <span className="bar" />
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-12'>
              <TextField
                    label={labelInfo}
                    name='info'
                    value={this.state.info}
                    onChange={this.handleChange}
                    margin="normal"
                    placeholder='digicode, door ...'
                    fullWidth
                    multiline
                    rows="3"
                  />
              </div>
            </div>
            <br/>
          </TabPane>

          <TabPane tabId={3}>
          <ModalHeader style={{color: 'darkgrey'}}>Confirmation</ModalHeader>

          <div className='row' style={{marginTop:'2%'}}>
            <div className='col-12'>
            <Label><FormattedMessage id='reservation.pro' /></Label>
              <Switch onClick={() => this.handleSwitch()}/>
              {this.displayPro()}
            </div>
          </div>

          <div className='row'>
            <div className='col-12'>
            <TextField
                    label={labelNote}
                    name='note'
                    value={this.state.note}
                    onChange={this.handleChange}
                    margin="normal"
                    fullWidth
                    multiline
                    rows="3"
                  />
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
      </form>
    );
  }
}

const mapStateToProps = state => ({
  customers: state.customers.customer
})

export default connect(
  mapStateToProps,
  { postReservation, postLastReservation, fetchCustomers, postCustomer }
)(TabModal);