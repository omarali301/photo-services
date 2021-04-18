import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileAlt,faCog,faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';


const AdminSidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
        <ul className="list-unstyled">

        <li>
                <Link to="/home" className="text-white">
                    <FontAwesomeIcon icon={faFileAlt} /> <span>Go To Homepage</span> 
                </Link>
            </li>

            <li>
                <Link to="/admin" className="text-white">
                    <FontAwesomeIcon icon={faGripHorizontal} /> <span>Admin OrderLIst</span> 
                </Link>
            </li>
      
            <li>
                <Link to="/addService" className="text-white">
                    <FontAwesomeIcon icon={faUsers} /> <span>AddService</span> 
                </Link>
            </li>
      
            <li>
                <Link to="/makeAdmin" className="text-white">
                    <FontAwesomeIcon icon={faUsers} /> <span>Make Admin</span> 
                </Link>
            </li>
         
        </ul>
        
    </div>
    );
};

export default AdminSidebar;