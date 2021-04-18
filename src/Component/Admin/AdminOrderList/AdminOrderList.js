import React, { useEffect, useState } from 'react';
import AdminOrderDetails from '../AdminOrderDetails/AdminOrderDetails';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const AdminOrderList = () => {

    
const [adminListOrder, setAdminListOrder] = useState()



useEffect(()=>{
    const url =`http://localhost:5000/orderList`
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        setAdminListOrder(data);
    })
},[])

    return (
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-2">
                <AdminSidebar/>
            </div>
            <div className="col-md-5">

                <h4>This is Admin Orderd LIst</h4>

      {
          adminListOrder?.map(orList => <AdminOrderDetails orList={orList}></AdminOrderDetails>)
      }
            </div>
            <div className="col-md-5"></div>
        </div>
        
    </div>
    );
};

export default AdminOrderList;