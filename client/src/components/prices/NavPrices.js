import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row} from 'reactstrap';
import classnames from 'classnames';
import { FormattedMessage } from 'react-intl'; 
import './NavPrices.css'

export default class NavPrices extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              <FormattedMessage id="prices.header" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              <FormattedMessage id="prices.header2" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              <FormattedMessage id="prices.header3" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Repassage</th>
                    <th scope="col"></th>
                    <th scope="col">Prix</th>
                  </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Piece (haut, pantalon)</th>
      <td></td>
      <td>6</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Express 1j</td>
      <td>7</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Express 1h</td>
      <td>10</td>
    </tr>
    <tr>
      <th scope="row">Chemisier</th>
      <td></td>
      <td>10</td>
    </tr>
    <tr>
      <th scope="row">Veste Costume</th>
      <td></td>
      <td>25</td>
    </tr>
    <tr>
      <th scope="row">Manteau</th>
      <td></td>
      <td>25</td>
    </tr>
    <tr>
      <th scope="row">Robe</th>
      <td>Courte</td>
      <td>20</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Longue</td>
      <td>30</td>
    </tr>
    <tr>
      <th scope="row">Rideau</th>
      <td></td>
      <td>25</td>
    </tr>
    
  </tbody>
</table>
              </Row>
          </TabPane>
          <TabPane tabId="2">
          <p className="priceMajored">*** Les prix en express (24h sont majores de 50%)</p>
            <Row>
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Lavage (minimum 6 kilos)</th>
                    <th scope="col"></th>
                    <th scope="col">Prix</th>
                  </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Lave, seche, plie</th>
      <td></td>
      <td>10/k</td>
    </tr>
    <tr>
    <th scope="row"></th>
      <td>Express</td>
      <td>15/k</td>
    </tr>
    <tr>
      <th scope="row">Seche, plie</th>
      <td></td>
      <td>8/k</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Express</td>
      <td>12/k</td>
    </tr>
    <tr>
      <th scope="row">Couette</th>
      <td>Simple</td>
      <td>60</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Double</td>
      <td>70</td>
    </tr>
    <tr>
      <th scope="row">Rideau</th>
      <td></td>
      <td>25/m2</td>
    </tr>
    <tr>
      <th scope="row">Tapis (sur devis)</th>
      <td></td>
      <td>~</td>
    </tr>
  </tbody>
</table>
            </Row>
          </TabPane>
          <TabPane tabId="3">
          <p className="priceMajored">*** Les prix en express (24h sont majores de 50%)</p>
            <Row>
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Nettoyage a sec (repasse)</th>
                    <th scope="col"></th>
                    <th scope="col">Prix</th>
                  </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Chemise</th>
      <td></td>
      <td>12</td>
    </tr>
    <tr>
    <th scope="row">Costume</th>
      <td></td>
      <td>50</td>
    </tr>
    <tr>
    <th scope="row"></th>
      <td>Veste</td>
      <td>35</td>
    </tr>
    <tr>
    <th scope="row"></th>
      <td>Pantalon</td>
      <td>25</td>
    </tr>
    <tr>
    <th scope="row">Robe simple</th>
      <td>Courte</td>
      <td>30-60</td>
    </tr>
    <tr>
    <th scope="row"></th>
      <td>longue</td>
      <td>60-80</td>
    </tr>
    <th scope="row">Robe de soiree</th>
      <td>Courte</td>
      <td>60-80</td>
    <tr>
      <th scope="row"></th>
      <td>Longue</td>
      <td>80-100</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Mariage</td>
      <td>200-300</td>
    </tr>
    <tr>
      <th scope="row">Manteaux/Blousons</th>
      <td></td>
      <td>50-100</td>
    </tr>
    <tr>
      <th scope="row">Blouson Cuir</th>
      <td></td>
      <td>≈200</td>
    </tr>
  </tbody>
</table>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}