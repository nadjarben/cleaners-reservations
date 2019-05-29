import React from 'react'
import { Link } from 'react-router-dom';
import './NavAdmin.css';


    const NavAdmin = () => {

        return (
            <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link" to="adminreservation">Reservations</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="admincustomer">Clients</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="adminarchivate">Archives</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="admincontact">Questions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="admingoogle">Google</Link>
            </li>
          </ul>
        )
    }



export default NavAdmin;