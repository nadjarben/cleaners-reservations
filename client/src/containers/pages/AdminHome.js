import React from 'react';
import NewReservationNotif from '../../components/admin/homeAdmin/NewReservationNotif';
import NewMessageNotif from '../../components/admin/homeAdmin/NewMessageNotif';

const AdminHome = () => {
    return (
        <div>
            <NewReservationNotif />
            <NewMessageNotif />
        </div>
    )
}

export default AdminHome