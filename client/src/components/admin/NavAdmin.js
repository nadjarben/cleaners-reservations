import React from 'react'
import { Link } from 'react-router-dom';
import './NavAdmin.css';


    const NavAdmin = () => {

        return (
            <ul className="nav-admin nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link" to="/home/admin/reservation">Reservations</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/home/admin/customer">Clients</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/home/admin/archivate">Archives</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/home/admin/contact">Questions</Link>
            </li>
          </ul>
        )
    }



export default NavAdmin;