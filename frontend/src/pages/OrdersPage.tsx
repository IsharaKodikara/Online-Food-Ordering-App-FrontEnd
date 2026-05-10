import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import OrderService from "../services/OrderService";

import { Order } from "../models/Order";

function OrdersPage() {

    const [orders, setOrders] =
        useState<Order[]>([]);

    useEffect(() => {

        loadOrders();

    }, []);

    const loadOrders = async () => {

        try {

            const response =
                await OrderService.getOrdersByUser(1);

            setOrders(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    return (

        <div>

            <Navbar />

            <div className="container mt-4">

                <h2 className="mb-4 text-primary">
                    My Orders
                </h2>

                <table className="table table-bordered">

                    <thead className="table-dark">

                        <tr>

                            <th>ID</th>

                            <th>Date</th>

                            <th>Total</th>

                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {
                            orders.map((order) => (

                                <tr key={order.id}>

                                    <td>
                                        {order.id}
                                    </td>

                                    <td>
                                        {order.orderDate}
                                    </td>

                                    <td>
                                        Rs. {order.totalAmount}
                                    </td>

                                    <td>
                                        {order.status}
                                    </td>

                                </tr>
                            ))
                        }

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default OrdersPage;