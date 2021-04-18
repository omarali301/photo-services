import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
       
<footer class="bg-light text-center text-lg-start">

  <div class="container p-4">
  
    <div class="row">
  
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase">Footer Content</h5>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
          molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
          voluptatem veniam, est atque cumque eum delectus sint!
        </p>
      </div>
 
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase">Photo Services</h5>

        <ul class="list-unstyled mb-0">
          <li>
            <a href="#!" class="text-dark">Clipping Path</a>
          </li>
          <li>
            <a href="#!" class="text-dark">Photo editing</a>
          </li>
          <li>
            <a href="#!" class="text-dark">Photo Retouching</a>
          </li>
          <li>
            <a href="#!" class="text-dark">Color Adjustment</a>
          </li>
        </ul>
      </div>
   
      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 class="text-uppercase mb-0">Shadow service</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!" class="text-dark">Drop Shadow</a>
          </li>
          <li>
            <a href="#!" class="text-dark">Reflection shadow</a>
          </li>
          <li>
            <a href="#!" class="text-dark">Natural Shadow</a>
          </li>
          <li>
            <a href="#!" class="text-dark">Original shadow</a>
          </li>
        </ul>
      </div>
     
    </div>
 
  </div>


 
  <div class="text-center p-3" style= {{BackgroundColor:'rgba(0,0,0,0.2)'}}>
    © 2020 Copyright:
    <a class="text-dark" href="https://Photoeditingservices.com/">photoeditingservices.com</a>
  </div>

</footer>

        </div>
    );
};

export default Footer;