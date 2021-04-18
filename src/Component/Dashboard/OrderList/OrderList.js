import React, { useEffect, useState } from 'react';
import OrderLIstDetails from '../OrderLIstDetails/OrderLIstDetails';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {

const [listOrder, setListOrder] = useState()



useEffect(()=>{
    const url =`http://localhost:5000/orderList`
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        setListOrder(data);
    })
},[])

// console.log(listOrder);
// const product = listOrder.find(pd => pd._id === productId)

    return (
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-2">
                <Sidebar/>
            </div>
            <div className="col-md-5">
                <h4>This Is User OrderList</h4>

      {
          listOrder?.map(list => <OrderLIstDetails list={list}></OrderLIstDetails>)
      }
            </div>
            <div className="col-md-5"></div>
        </div>
        
    </div>
    );
};

export default OrderList;