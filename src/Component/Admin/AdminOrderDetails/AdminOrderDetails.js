import React from 'react';

const AdminOrderDetails = ({orList}) => {
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
                    <td><img style={{height:'60px'}} src={orList.ImageURL} alt=""/></td>
                    <td>{orList.name}</td>
                    <td>{orList.price}</td>
                    <td>{orList.email}</td>
                    
                </tr>
                
            }
        </tbody>
    </table>
    );
};

export default AdminOrderDetails;