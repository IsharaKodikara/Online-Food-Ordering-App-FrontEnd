import axios from "axios";

const API_URL = "http://localhost:8080/api/cart";

class CartService {

    getCartByUser(userId: number) {

        return axios.get(`${API_URL}/${userId}`);
    }

    addToCart(cartItem: any) {

        return axios.post(
            `${API_URL}/add`,
            cartItem
        );
    }

    removeCartItem(cartItemId: number) {

        return axios.delete(
            `${API_URL}/remove/${cartItemId}`
        );
    }
}

export default new CartService();