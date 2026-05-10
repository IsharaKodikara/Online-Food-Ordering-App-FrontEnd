import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/payments";

const makePayment = async (
    orderId: number,
    paymentMethod: string,
    amount: number
) => {

    return await axios.post(
        `${API_URL}/pay`,
        {
            orderId,
            paymentMethod,
            amount
        }
    );
};

const PaymentService = {
    makePayment
};

export default PaymentService;