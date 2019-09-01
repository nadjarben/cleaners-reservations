import React, { useState } from "react";
import { connect } from 'react-redux'

function DashboardConfig(props) {

    const handleClickOpen =() => {
        setOpen(true);
      }
    const handleSubmit = () => {
        alert(`Are you sure to modify the user informations ${name}, ${surname}, ${address}`)
    }

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const user  = props.auth.user;
  console.log(user)

    const renderInput = () => {  
    if(open === true)
    return (
        <form>
        <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder={user.name}
            type="text"
            name="name"
        />
        <input
            value={surname}
            onChange={e => setSurname(e.target.value)}
            placeholder={user.surname}
            type="text"
            name="surname"
        />
        <input
            value={address}
            onChange={e => setAddress(e.target.value)}
            placeholder={user.address}
            type="test"
            name="address"
        />
        <input
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder={user.phone}
            type="phone"
            name="phone"
        />
        <button onClick={handleSubmit} type="submit">Submit</button>
        </form>
    );
    }

    return (
        <div>
            <p style={{color:'red'}} onClick={handleClickOpen}>Modify user informations</p>
            {renderInput()}
        </div>
    )
}
const mapStateToProps = state => ({
    auth: state.auth
  });

export default connect(mapStateToProps)(DashboardConfig);