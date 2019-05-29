import React from 'react';
import { Button } from 'reactstrap';


const styleButton = {
    marginLeft: '5%',
    marginTop: '3%'
}
const ButtonNew = props => {
    return (
        <div>
        <Button style={styleButton} className="button-create">{props.text}</Button>
        </div>
    )
}

export default ButtonNew;


