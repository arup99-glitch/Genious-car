import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css';

const AddService =  () => {

    const { register,handleSubmit } = useForm();
    const onSubmit = async (data) => {
        // console.log(data);
        try {
            // const result = await axios.post('http://localhost:5000/services',data)

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };
          fetch('http://localhost:5000/services', requestOptions)
          .then(response => response.json())
          .then(data => console.log(data));
                

            // console.log(result)
        } catch (error) {
            console.log(error)
        }
     
        
        

    }

    return(
        <div className="addService">
            <h2>Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })}placeholder="Name" />
      <input {...register("description")}placeholder="Description" />
      <input type="number" {...register("price")}placeholder="price" />
      
      <input {...register("img")}placeholder="img url" />
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddService;