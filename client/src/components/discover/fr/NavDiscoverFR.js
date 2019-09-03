import React from 'react';
import { Link, Route } from 'react-router-dom';
import '../css/NavDiscover.css';
import EngagementsFR from './EngagementsFR';
import KnowledgeFR from './KnowledgeFR';
import CharteFR from './CharteFR';
import WhoFR from './WhoFR';

export default function NavDiscover() {
    const [title, setTitle] = React.useState('NOUS DECOUVRIR')
    return (
        <div style={{marginBottom:'20vh'}}>
            <div className='title'>
                <h1>{title}</h1>
            </div>
        <div className='container'>
        <div className='row' style={{marginTop:'5vh'}}>
            <div className='col-xl-3 col-md-12'>
        <div className='nav-discover'>
            <Link to='/discoverfr/who'><h1 className='title-h1' onClick={() => setTitle('QUI SOMMES NOUS')}>QUI SOMMES NOUS</h1></Link>
            <Link to='/discoverfr/engagements'><h1 className='title-h1' onClick={() => setTitle('ENGAGEMENTS')}>ENGAGEMENTS</h1></Link>
            <Link to='/discoverfr/knowledge'><h1 className='title-h1' onClick={() => setTitle('SAVOIR-FAIRE')}>SAVOIR-FAIRE</h1></Link>
            <Link to='/discoverfr/charte'><h1 className='title-h1' onClick={() => setTitle('CHARTE DE DEVELOPPEMENT DURABLE')}>CHARTE DE DEVELOPPEMENT DURABLE</h1></Link>
            </div>
        </div>
        <div className='col-xl-9'>
        <Route  path="/discoverfr/who" component={WhoFR}/>
        <Route  path="/discoverfr/engagements" component={EngagementsFR}/>
        <Route path="/discoverfr/knowledge" component={KnowledgeFR}/>
        <Route path="/discoverfr/charte" component={CharteFR}/>
        </div>
        </div>
        </div>
        </div>
    )
}