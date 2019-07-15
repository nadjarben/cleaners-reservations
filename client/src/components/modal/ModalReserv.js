import React from 'react';
import { FormattedMessage } from 'react-intl'; 
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TabModal from './TabModal';
class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <button className="bouton18" onClick={this.toggle}>
            <p className="text-button"><FormattedMessage id="home.button" defaultMessage="BOOK A DELIVERY"/></p>
        </button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          
          <ModalBody>
            <TabModal />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;