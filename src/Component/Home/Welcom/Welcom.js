import React from 'react';
import secondSectionModel from '../../../images/secondSectionModel.jpg';

const Welcom = () => {
    return (
        <section>
            <div className="container">
            <div className="row">
            <h1 className="m-5 text-center pt-5">Welcome to Our Photo Editing Service</h1>
                <div className="col-md-6">
                 <img style={{ height:'300px'}} src={secondSectionModel} alt=""/>
                </div>
                <div className="col-md-6">
                    <h3>Our Mission</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
                         beatae consequatur harum totam soluta exercitationem eaque ea eveniet
                          expedita, odio, neque quidem. Fuga, quia quisquam voluptas porro veniam
                           ab est, soluta possimus expedita necessitatibus amet pariatur quasi
                         itaque hic esse labore nihil quas odio doloribus sed consequatur.
                     Doloremque, sit ipsam?</p>
                </div>
            </div>
            </div>
        </section>

    );
};

export default Welcom;