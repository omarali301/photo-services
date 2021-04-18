import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddService from "./Component/Admin/AddService/AddService";
import AdminOrderList from "./Component/Admin/AdminOrderList/AdminOrderList";
import AdminSidebar from "./Component/Admin/AdminSidebar/AdminSidebar";
import MakeAdmin from "./Component/Admin/MakeAdmin/MakeAdmin";
import OrderList from "./Component/Dashboard/OrderList/OrderList";
import UserReview from "./Component/Dashboard/UserReview/UserReview";
import Home from "./Component/Home/Home/Home";
import OurServices from "./Component/Home/Our Services/OurServices";
import Login from "./Component/Login/Login";
import Payment from "./Component/Payment/Payment";
// import PaymentSimple from "./Component/payment/PaymentSimple";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import ServiceDetails from "./Component/ServiceDetails/ServiceDetails";



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

       <Router>
      
        <Switch>
          
        <Route exact path="/">
          <Home/>
          </Route>
          <Route path="/home">
          <Home/>
          </Route>
          <Route path="/adminSidebar">
         <AdminSidebar/>
          </Route>
          <Route path="/makeAdmin">
         <MakeAdmin/>
          </Route>
             
          <Route path="/admin">
          <AdminOrderList/>
          </Route>
        
              
          <Route path="/addService">
          <AddService/>
          </Route>
              
          <PrivateRoute path="/ServiceDetails/:productId">
          <ServiceDetails/>
          </PrivateRoute>
          <Route path="/user/orderList">
          <OrderList/>
          </Route>
          <Route path="/review">
          <UserReview/>
          </Route>
          <Route path="/login">
          <Login/>
          </Route>
          <Route path="/OurService">
          <OurServices/>
          </Route>
        </Switch>
      </Router>
  
      </UserContext.Provider>
  );
}

export default App;
