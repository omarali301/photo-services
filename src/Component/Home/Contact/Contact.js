import React from 'react';
import { useForm } from "react-hook-form";
import { DevTool } from '@hookform/devtools';

const Contact = () => {
    
    const { register, handleSubmit, control, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
     <div style={{border: '', marginTop:'10%'}} className="p-2 bg-light">
         
     <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue="name" {...register("name")} />
                <br/>
               <input name="email" defaultValue="email" {...register("email")} />
                <br/>
               <input name="designation" defaultValue="designation" {...register("designation")} />
                <br/>
               
                <input type="submit" />
    </form>
{/* 
<h1 className='p-5'>Contact Us</h1>

<form class="row g-3 p-5">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
   <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>service 1</option>
      <option>service 1</option>
      <option>service 1</option>
      <option>service 1</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>

  <div class="col-12">
    <button type="submit" class="btn btn-primary mt-5">Sign in</button>
  </div>
</form> */}
        </div>
    );
};

export default Contact;