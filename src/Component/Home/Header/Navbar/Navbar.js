import React from 'react';

const Navbar = () => {
    return (
        <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">PHOTO SERVICES</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link ms-5 active" aria-current="page" href="#">Home</a>
              </li>
             
              <li class="nav-item">
                <a class="nav-link ms-5" href="user/orderList">UserOrderlist</a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link ms-5" href="admin">Admin</a>
              </li>
             </ul>
          </div>
        </div>
      </nav>
      </div>
    );
};

export default Navbar;