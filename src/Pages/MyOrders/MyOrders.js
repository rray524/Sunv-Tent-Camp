import React, { useEffect, useState } from 'react';
import { Modal, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { Button } from 'react-bootstrap';
import Footer from '../Shared Pages/Footer/Footer';
import Header from '../Shared Pages/Header/Header';

// popup function (MODAL)
function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    This is a Confirmation Of Deleting an Order
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h2 style={{ fontFamily: "'Kaushan Script', cursive" }}>You have successfully removed the order.</h2>
                <p>If it is a mistake, please order again from home page.</p>

            </Modal.Body>
            <Modal.Footer>
                <Button className="btn-warning" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

const MyOrders = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch('http://localhost:5000/cart?email=' + user.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const handleDelete = id => {
        const url = `http://localhost:5000/cart/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    if (window.confirm('Do you want cancel order?')) {
                        setModalShow(true);
                        const rest = orders.filter(order => order._id !== id);
                        setOrders(rest);
                    }

                }
            })
    }
    return (
        <div>
            <Header></Header>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className="solo-container">
                <div className="container">
                    <h2 className="text-center">You have {orders.length} orders.</h2>
                    <h2 className="text-center">Order Details:</h2><br /><br />
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Order#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Ordered Tent Camp Pack</th>
                                <th>Pack Price</th>
                                <th>Cancel Order</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order =>
                                    <tr key={order._id}>
                                        <td>{order._id}</td>
                                        <td>{order.name}</td>
                                        <td>{order.email}</td>
                                        <td>{order.address}</td>
                                        <td>{order.serviceName}</td>
                                        <td>{order.price}</td>
                                        <td><Button onClick={() => handleDelete(order._id)} variant="danger">Cancel</Button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyOrders;