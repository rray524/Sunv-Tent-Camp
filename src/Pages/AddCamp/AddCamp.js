import React, { useState } from 'react';
import Footer from '../Shared Pages/Footer/Footer';
import Header from '../Shared Pages/Header/Header';
import { useForm } from "react-hook-form";
import './AddCamp.css'
import axios from 'axios';

const AddCamp = () => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const [sms, setSms] = useState('');
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    const confirm = `A new Camp Service has been created successfully`;
                    setSms(confirm)
                }
            })
        reset();
    };
    // remove success message onfocus input/textarea
    const removeSuccessMessage = () => {
        setSms('')
    }
    return (
        <div className="container-wrap-form">
            <Header></Header>
            <div className="solo-container">
                <div className="form-div">
                    <h2 className="text-center">Add a New Tent Camp Service</h2>
                    <form className="container" onSubmit={handleSubmit(onSubmit)}>

                        <input type="text" {...register("name", { required: true })} onFocus={removeSuccessMessage} placeholder="Camp Pack Name" />
                        {errors.name?.type === 'required' && "Camp Pack name is required"}

                        <input type="url" {...register("img", { required: true })} onFocus={removeSuccessMessage} placeholder="Image URL" />
                        {errors.img && "Image URL is required"}

                        <input type="number" {...register("price", { required: true })} onFocus={removeSuccessMessage} placeholder="Price/Night" />
                        {errors.price && "Price is required"}

                        <textarea {...register("description", { required: true })} onFocus={removeSuccessMessage} placeholder="Camp Information" />
                        {errors.description && "Camp Description is required"}

                        <input type="submit" value="Add New Camp Service" className="text-warning" style={{ backgroundColor: '#012A3F', border: '0px' }} />
                        <h3 className="text-success text-center fw-bolder" style={{ fontFamily: "'Kaushan Script', cursive" }}>{sms}</h3>
                    </form>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddCamp;