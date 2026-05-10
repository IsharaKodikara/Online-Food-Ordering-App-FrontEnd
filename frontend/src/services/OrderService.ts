import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/orders";

const placeOrder = async (
    userId: number
) => {

    return await axios.post(
        `${API_URL}/place/${userId}`
    );
};

const getOrdersByUser = async (
    userId: number
) => {

    return await axios.get(
        `${API_URL}/user/${userId}`
    );
};

const OrderService = {
    placeOrder,
    getOrdersByUser
};

export default OrderService;