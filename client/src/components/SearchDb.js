import React from 'react';
import { Button } from 'reactstrap';


const styleInput = {
    width: '50%',
    float: 'left',
    marginTop: '3%'
}
const styleButton = {
    marginLeft: '5%',
    marginTop: '3%'
}
const searchDb = props => {
    return (
        <div>
        <input style={styleInput} className="form-search form-control mr-sm-2" type="search" placeholder="Search" />
        <Button style={styleButton} className="button-create">{props.text}</Button>
        </div>
    )
}

export default searchDb;