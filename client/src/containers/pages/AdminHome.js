import React from 'react';
import BottomBar from '../../components/admin/nav/BottomBar';
import GetLastReservations from '../../components/admin/adminHome/GetLastReservation';


const AdminHome = () => {
    return (
        <div>           
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h5 className='text-center'>Nouvelles Reservations</h5>
                    </div>
                </div> 

                <div className='row'>
                    <div className='col-12'>
                        <GetLastReservations />
                    </div>
                </div>
            </div>
            <BottomBar />
        </div>
    )
}

export default AdminHome