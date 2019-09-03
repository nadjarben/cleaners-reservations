import React from 'react';
import BottomBar from '../../components/admin/nav/BottomBar';
import GetLastReservations from '../../components/admin/adminHome/GetLastReservation';
import '../css/Admin.css';


const AdminHome = () => {
    return (
        <div style={{marginBottom:'12vh'}}>           
            <div className='container'>
                <div className='row'>
                    <div style={{backgroundColor:'#42a5f5',color:'white', marginTop:'3%'}} className='col-12'>
                        <h5 className='text-center'>Nouvelles Reservations</h5>
                    </div>
                </div> 

                <div className='row'>
                    <div className='col-12'>
                        <GetLastReservations />
                    </div>
                </div>

                <div className='row'>
                    <div style={{backgroundColor:'#42a5f5',color:'white', marginTop:'13%'}} className='col-12'>
                        <h5 className='text-center'>Nouvelles Questions</h5>
                    </div>
                </div>
            </div>

            <BottomBar />
        </div>
    )
}

export default AdminHome