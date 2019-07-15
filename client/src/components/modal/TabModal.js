import React from 'react';
import { Input, Label, TabContent, TabPane, Card, Button, CardTitle, CardText, Row, Col, ModalHeader, ModalFooter } from 'reactstrap';
import { FormattedMessage } from 'react-intl'; 
import { Form } from 'react-bootstrap';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { postReservation } from '../../store/actions/reservationActions';
import { postLastReservation } from '../../store/actions/notifActions';
import { fetchCustomers, postCustomer } from '../../store/actions/customerActions';

class TabModal extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 1,
      name: '',
      surname: '', 
      phone: '', 
      email: '', 
      address: '', 
      city: '', 
      date: '', 
      hour: '', 
      info: ''
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
  displayPrev = () => {
    if(this.state.activeTab != 1)
    return (
      <Col xs='6' style={{textAlign:'left'}}>
    <Button onClick={()=> this.handlePrev()}>Precedent</Button>
    </Col>
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
      this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <TabContent activeTab={this.state.activeTab}>

          <TabPane tabId={1}>
            <ModalHeader>Reserver une livraison</ModalHeader>
            <div className='row justify-content'>
              <div className='col' style={{marginTop:'5%'}}>
                <p><FormattedMessage id="reservation.min" /></p>
                <p><FormattedMessage id="reservation.min2" /></p>
                <p><FormattedMessage id="reservation.min3" /></p>
              </div>
            </div>
          </TabPane>

          <TabPane tabId={2}>
          <ModalHeader>Informations personnelles</ModalHeader>

            <div className='row'>
              <div className='col-6'>
                <Label for="firstname">First Name :</Label>
                <Input required={true} type="text" placeholder="First Name" name="name" value={this.state.name}  onChange={this.handleChange} />
              </div>
              <div className='col-6'>
                <Label for="surname">Surname :</Label>
                <Form.Control required={true} type="text" placeholder="Last Name" name="surname" value={this.state.surname} onChange={ this.handleChange } />
              </div>
            </div>

            <div className='row'>
              <div className='col-12'>
                <Label for="phone">Phone :</Label>
                <Form.Control className="phone" required={true} type="phone" placeholder="Phone number" name="phone" value={this.state.phone} onChange={ this.handleChange } />
              </div>
            </div>

            <div className='row'>
              <div className='col-12'>
                <Label for="email">E-mail :</Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={ this.handleChange } />
              </div>
            </div>
          </TabPane>

          <TabPane tabId={3}>
          <ModalHeader>Addresses</ModalHeader>
            <Row>
              <Col sm="12">
                <h4>Tab 3 Contents</h4>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId={4}>
          <ModalHeader>Confirmation</ModalHeader>
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                </Card>
              </Col>
            </Row>
          </TabPane>

        </TabContent>
        <ModalFooter>
        <Row>
          
            {this.displayPrev()}
          
          <Col xs='6'>
            <Button onClick={()=> this.handleNext()}>Suivant</Button>
          </Col>
        </Row>
        </ModalFooter>
      </div>
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