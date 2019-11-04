import React from 'react';
import { Link, Route } from 'react-router-dom';
import { FormattedMessage } from 'react-intl'; 
import './css/NavDiscover.css';
import Engagements from './Engagements';
import Knowledge from './Knowledge';
import Charte from './Charte';
import Who from './Who';

export default function NavDiscover() {
    const [title, setTitle] = React.useState('NOUS DECOUVRIR')
    return (
        <div style={{marginBottom:'20vh'}}>
            <div className='title'>
                <h1 style={{fontSize:'25px'}}>{title}</h1>
            </div>
        <div className='container'>
        <div className='row' style={{marginTop:'5vh'}}>
            <div className='col-xl-3 col-md-12'>
        <div className='nav-discover'>
            <Link to='/discover/who'><h1 className='title-h1' onClick={() => setTitle(<FormattedMessage id="discover.nav.1"/>)}><FormattedMessage id="discover.nav.1"/></h1></Link>
            <Link to='/discover/engagements'><h1 className='title-h1' onClick={() => setTitle(<FormattedMessage id="discover.nav.2"/>)}><FormattedMessage id="discover.nav.2"/></h1></Link>
            <Link to='/discover/knowledge'><h1 className='title-h1' onClick={() => setTitle(<FormattedMessage id="discover.nav.3"/>)}><FormattedMessage id="discover.nav.3"/></h1></Link>
            <Link to='/discover/charte'><h1 className='title-h1' onClick={() => setTitle(<FormattedMessage id="discover.nav.4"/>)}><FormattedMessage id="discover.nav.4"/></h1></Link>
            </div>
        </div>
        <div className='col-xl-9'>
        <Route  path="/discover/who" component={Who}/>
        <Route  path="/discover/engagements" component={Engagements}/>
        <Route path="/discover/knowledge" component={Knowledge}/>
        <Route path="/discover/charte" component={Charte}/>
        </div>
        </div>
        </div>
        </div>
    )
}