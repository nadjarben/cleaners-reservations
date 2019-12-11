import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl'; 
import './css/NavDiscover.css';


export default function NavDiscover() {
    const [title, setTitle] = React.useState('NOUS DECOUVRIR')
    return (
        <div>
            <div style={{backgroundColor:'orange'}}>
                <h1 style={{fontSize:'25px'}}>{title}</h1>
            </div>
            <div>
        <div className='nav-discover'>
            <Link to='/discover-who'><h1 className='title-h1' onClick={() => setTitle(<FormattedMessage id="discover.nav.1"/>)}><FormattedMessage id="discover.nav.1"/></h1></Link>
            <Link to='/discover-engagements'><h1 className='title-h1' onClick={() => setTitle(<FormattedMessage id="discover.nav.2"/>)}><FormattedMessage id="discover.nav.2"/></h1></Link>
            <Link to='/discover-knowledge'><h1 className='title-h1' onClick={() => setTitle(<FormattedMessage id="discover.nav.3"/>)}><FormattedMessage id="discover.nav.3"/></h1></Link>
            <Link to='/discover-charte'><h1 className='title-h1' onClick={() => setTitle(<FormattedMessage id="discover.nav.4"/>)}><FormattedMessage id="discover.nav.4"/></h1></Link>
            </div>
        </div>
        </div>
    
    )
}