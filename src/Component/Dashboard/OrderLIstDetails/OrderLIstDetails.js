import React from 'react';

const OrderLIstDetails = ({list}) => {
    console.log(list);
    return (
        <table className="table table-borderless">
        <thead>
            <tr style={{border: '1px solid gray'}}>
            <th className="text-secondary" scope="col">photo</th>
            <th className="text-secondary" scope="col">Name</th>
            <th className="text-secondary" scope="col">price</th>
            <th className="text-secondary" scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
            {
             
                    
                <tr style={{border: '1px solid gray'}}>
                    <td><img style={{height:'60px'}} src={list.ImageURL} alt=""/></td>
                    <td>{list.name}</td>
                    <td>{list.price}</td>
                    <td>{list.email}</td>
                    
                </tr>
                
            }
        </tbody>
    </table>
    );
};

export default OrderLIstDetails;