import React, { useState } from "react";
import { connect } from 'react-redux';
import { changeUserName } from '../../store/actions/userActions';

function DashboardConfig(props) {

    const handleClickOpen =() => {
        setOpen(true);
      }
    const handleSubmit = () => {
        changeUserName(user.id, name, surname, phone, address);
    }

  const user  = props.auth.user;
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [address, setAddress] = useState(user.address);
  const [phone, setPhone] = useState(user.phone);


    const renderInput = () => {  
    if(open === true)
    return (
        <form>
        <input
            value={name}
            onChange={e => setName(e.target.value)}    
            type="text"
            name="name"
        />
        <input
            value={user.surname}
            onChange={e => setSurname(e.target.value)}
            placeholder={surname}
            type="text"
            name="surname"
        />
        <input
            value={user.address}
            onChange={e => setAddress(e.target.value)}
            placeholder={address}
            type="test"
            name="address"
        />
        <input
            value={user.phone}
            onChange={e => setPhone(e.target.value)}
            placeholder={phone}
            type="phone"
            name="phone"
        />
        <button onClick={handleSubmit} type="submit">Submit</button>
        </form>
    );
    }

    return (
        <div>
            <p style={{color:'red', cursor:'pointer'}} onClick={handleClickOpen}>Modify user informations</p>
            {renderInput()}
        </div>
    )
}
const mapStateToProps = state => ({
    auth: state.auth
  });

export default connect(mapStateToProps, { changeUserName })(DashboardConfig);