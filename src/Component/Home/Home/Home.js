import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import FreeTrail from '../FreeTrail/FreeTrail';
import Header from '../Header/Header/Header';
import OurServices from '../Our Services/OurServices';
import Review from '../Review/Review';
import Welcom from '../Welcom/Welcom';

const Home = () => {
    return (
        <div className="container">
            
            <Header/>
            <Welcom/>
            <OurServices/>
            <FreeTrail/>
            <Review/>
            {/* <Contact/> */}
            <Footer/>
        </div>
    );
};

export default Home;