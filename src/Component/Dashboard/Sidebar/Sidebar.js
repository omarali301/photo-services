import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileAlt,faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
            <li>
                <Link to="/home" className="text-white">
                    <FontAwesomeIcon icon={faFileAlt} /> <span>Go To Homepage</span> 
                </Link>
            </li>
                <li>
                    <Link to="/user/orderList" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>OrderLIst</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Review</span> 
                    </Link>
                </li>
             
            </ul>
            
        </div>
    );
};

export default Sidebar;