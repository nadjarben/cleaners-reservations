import React, {useState} from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

export default function ModalOrders(props) {

    const {
        className
      } = props;
    
    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);

    const orders = props.customer.orders;  
    
    const displayPayed = () => {
        const o = orders
        if(o[0].payed === true)
            return <p>Paye</p>
        else return <p>Non paye</p>
    } 

    function ordersExist() {
        if(orders) {
            return (
                orders.map((o) =>
                <div>
                    <li onClick={toggle} className='list-group-item' key={o._id}>no <span style={{color:'red'}}>{o.hazmana}</span> || {o.date} || {o.amount} ₪</li>
                    <Modal centered size='lg' zIndex='10001' isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader className="modal-header" style={{backgroundColor:'#42a5f5', color: 'white'}} toggle={toggle}>{o.hazmana}</ModalHeader>
                    <ModalBody style={{minHeight:'70vh'}}>
                        <h4>Date reception :</h4>
                        <p>{o.date}</p>
                        <h4>Montant :</h4>
                        <p>{o.amount} ₪</p>
                        <h4>Date prevu :</h4>
                        <p>{o.term}</p>
                        <h4>Paye :</h4>
                        <p>{displayPayed()}</p>
                        <h4>Recupere :</h4>
                        <p>{o.recovered}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger">Supprimer</Button>
                    </ModalFooter>
                    </Modal>
                </div>
                )
            )
        }
        else return <p>Pas de commandes</p>
    }

    return (
        <div style={{minHeight:'50vh'}}>
            <h4 style={{textAlign:'center'}}>Toutes les commandes</h4>
            <br/>
            <div className="admin">
                <ul className="list-group">
                    {ordersExist()}
                </ul>
            </div>
        </div>
    )
}