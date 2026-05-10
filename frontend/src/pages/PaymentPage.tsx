import { useState } from "react";

import Navbar from "../components/Navbar";

import OrderService from "../services/OrderService";
import PaymentService from "../services/PaymentService";

import { useNavigate } from "react-router-dom";

function PaymentPage() {

    const navigate = useNavigate();

    const [paymentMethod, setPaymentMethod] =
        useState("CARD");

    const [amount, setAmount] = useState(0);

    const handlePayment = async () => {

        try {

            const orderResponse =
                await OrderService.placeOrder(1);

            const orderId =
                orderResponse.data.id;

            await PaymentService.makePayment(
                orderId,
                paymentMethod,
                amount
            );

            alert("Payment Success");

            navigate("/orders");

        } catch (error) {

            console.log(error);

            alert("Payment Failed");
        }
    };

    return (

        <div>

            <Navbar />

            <div className="container mt-5">

                <div className="row justify-content-center">

                    <div className="col-md-5">

                        <div className="card shadow p-4">

                            <h2 className="text-center mb-4 text-success">
                                Payment
                            </h2>

                            <div className="mb-3">

                                <label className="form-label">
                                    Payment Method
                                </label>

                                <select
                                    className="form-control"
                                    value={paymentMethod}
                                    onChange={(e) =>
                                        setPaymentMethod(
                                            e.target.value
                                        )
                                    }
                                >

                                    <option value="CARD">
                                        CARD
                                    </option>

                                    <option value="CASH">
                                        CASH
                                    </option>

                                </select>

                            </div>

                            <div className="mb-3">

                                <label className="form-label">
                                    Amount
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    onChange={(e) =>
                                        setAmount(
                                            Number(e.target.value)
                                        )
                                    }
                                />

                            </div>

                            <button
                                className="btn btn-success w-100"
                                onClick={handlePayment}
                            >
                                Pay Now
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default PaymentPage;