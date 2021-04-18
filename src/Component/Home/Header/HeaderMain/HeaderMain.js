import React from 'react';
import topmodel from '../../../../images/topmodel.jpg';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <div className="container topHeader">
            <div className=" row pt-5 ">
            <div className="col-md-6 headdingTop">
                <h6>Photoshop editing services-------</h6>
                <h1>Professional Clipping Path & Photo Editing Services</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Sunt ex omnis impedit iste nemo cumque placeat magnam odit 
                     asperiores quisquam.</p>
                     <button class="btn btn-success">Contact Us</button>
            </div>
            <div className="col-md-6">
                <img src={topmodel} alt=""/>
            </div>
        </div>
        </div>
    );
};

export default HeaderMain;