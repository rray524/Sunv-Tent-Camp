import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Footer from '../Shared Pages/Footer/Footer';
import Header from '../Shared Pages/Header/Header';
import useAuth from '../../hooks/useAuth';
import './Cart.css';
import { useForm } from "react-hook-form";
import Select from 'react-select'

const Cart = () => {
    const { user } = useAuth();
    const history = useHistory();
    console.log(user);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { serviceId } = useParams();
    const [service, setService] = useState({});


    useEffect(() => {
        fetch(`https://shielded-gorge-88736.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setService(data);
                console.log(service);
            })
    }, []);

    // post form data to DB
    const onSubmit = data => {
        console.log(data);
        const newBooking = { ...data }
        fetch('https://shielded-gorge-88736.herokuapp.com/cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBooking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged === true) {
                    history.push('/success')
                }
            })

    };

    return (
        <div className="cart-container">
            <Header></Header>
            <div className="container">
                <div className="solo-container">
                    <h2>Cart</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <img className="service-img" src={service.img} alt="" /><br /><br />

                            <h3>{service.name}</h3><br />
                            <p>{service.description}</p><br />
                            <h4>Price starts @ ${service.price}/Night</h4>
                        </div>
                        <div className="col-md-6">

                            <div className="container-wrap-form">
                                <div className="form-div">
                                    <h2 className="text-center">Order and fill up form:</h2>
                                    <form className="container" onSubmit={handleSubmit(onSubmit)}>

                                        <input type="text" {...register("name", { required: true })} value={user.displayName} />
                                        {errors.name?.type === 'required' && "Name is required"}

                                        <input type="email" {...register("email", { required: true })} value={user.email} />
                                        {errors.email && "Price is required"}

                                        <textarea {...register("address", { required: true })} placeholder="Your Shipping Address" />
                                        {errors.address && "Your Shipping Address is required"}
                                        <br /><br />
                                        <label htmlFor="serviceName">You have chosen:</label>

                                        <select {...register("serviceName", { required: true })}>
                                            <option value={service.name}>{service.name}</option>
                                        </select>
                                        {errors.serviceName && "Choosing service is required"}
                                        <br /><br />
                                        <label htmlFor="price">Camping Price (according to /Night):</label>
                                        <select {...register("price", { required: true })}>
                                            <option value={service.price}>{service.price}</option>
                                        </select>
                                        {errors.price && "Selecting Price is required"}



                                        <input type="submit" value="Place order" className="text-warning" style={{ backgroundColor: '#012A3F', border: '0px' }} />


                                    </form>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


            </div>
            <Footer></Footer>
        </div>
    );
};

export default Cart;