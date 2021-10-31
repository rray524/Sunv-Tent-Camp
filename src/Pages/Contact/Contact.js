import React, { useState } from 'react';
import './Contact.css';
import Header from '../Shared Pages/Header/Header';
import Footer from '../Shared Pages/Footer/Footer';
import { useForm } from "react-hook-form";


const Contact = () => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const [sms, setSms] = useState('');
    const onSubmit = data => {
        console.log(data);
        reset();
        if (data?.email) {
            const confirm = `Your Form has been submitted successfully`;
            setSms(confirm)
        }
    };
    return (
        <div className="container-wrap-form">
            <Header></Header>
            <div className="form-div">
                <div className="solo-container container text-center">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input {...register("firstName", { required: true })} placeholder="First Name" />
                        {errors.firstName?.type === 'required' && "First name is required"}

                        <input {...register("lastName", { required: true })} placeholder="Last Name" />
                        {errors.lastName && "Last name is required"}

                        <input {...register("email", { required: true })} placeholder="Email" />
                        {errors.email && "Email is required"}

                        <input type="submit" className="text-warning" style={{ backgroundColor: '#012A3F', border: '0px' }} />
                        <h3 className="text-success fw-bolder" style={{ fontFamily: "'Kaushan Script', cursive" }}>{sms}</h3>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;