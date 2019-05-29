import React from 'react'
import { Link } from 'react-router-dom';
import './NavAdmin.css';


    const NavAdmin = () => {

        return (
            <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link" to="/admin/reservation">Reservations</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/customer">Clients</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="admin/archivate">Archives</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="admin/contact">Questions</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="admin/google">Google</Link>
            </li>
          </ul>
        )
    }



export default NavAdmin;