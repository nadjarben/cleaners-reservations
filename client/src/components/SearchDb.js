import React from 'react';
import { Button } from 'reactstrap';

const styleInput = {
    width: '50%',
    float: 'left',
    marginTop: '3%'
}

const searchDb = () => {
    return (
        <div>
        <input style={styleInput} className="form-search form-control mr-sm-2" type="search" placeholder="Search" />
        </div>
    )
}

export default searchDb;