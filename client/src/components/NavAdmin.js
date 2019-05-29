import React from 'react'
import { Link } from 'react-router-dom';


    const NavAdmin = () => {

        return (
            <ul class="nav nav-tabs">
            <li class="nav-item">
              <Link class="nav-link" to="adminreservation">Reservations</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="admincustomer">Clients</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="admincontact">Questions</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="admingoogle" tabindex="-1" aria-disabled="true">Google</Link>
            </li>
          </ul>
        )
    }



export default NavAdmin;