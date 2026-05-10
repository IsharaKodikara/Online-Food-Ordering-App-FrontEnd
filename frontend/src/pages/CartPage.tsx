import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import CartService from "../services/CartService";

function CartPage() {

    const [cart, setCart] = useState<any>(null);

    useEffect(() => {

        loadCart();

    }, []);

    const loadCart = async () => {

        try {

            const userId = Number(
                localStorage.getItem("userId")
            );

            if (!userId) {

                console.log("User ID not found");

                return;
            }

            const response =
                await CartService.getCartByUser(userId);

            console.log("CART RESPONSE");

            console.log(response.data);

            setCart(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    const removeItem = async (
        cartItemId: number
    ) => {

        try {

            await CartService.removeCartItem(
                cartItemId
            );

            loadCart();

        } catch (error) {

            console.log(error);

            alert("Remove Failed");
        }
    };

    const calculateTotal = () => {

        if (!cart || !cart.items) {

            return 0;
        }

        return cart.items.reduce(
            (
                total: number,
                item: any
            ) =>
                total +
                (item.price * item.quantity),
            0
        );
    };

    return (

        <div>

            <Navbar />

            <div className="container mt-4">

                <h2 className="mb-4 text-primary">
                    My Cart
                </h2>

                {
                    !cart ||
                    !cart.items ||
                    cart.items.length === 0 ? (

                        <h4>
                            Cart Is Empty
                        </h4>

                    ) : (

                        <>

                            <table className="table table-bordered">

                                <thead className="table-dark">

                                    <tr>

                                        <th>Food</th>

                                        <th>Price</th>

                                        <th>Quantity</th>

                                        <th>Total</th>

                                        <th>Action</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {
                                        cart.items.map(
                                            (item: any) => (

                                                <tr key={item.id}>

                                                    <td>
                                                        {item.foodName}
                                                    </td>

                                                    <td>
                                                        Rs. {item.price}
                                                    </td>

                                                    <td>
                                                        {item.quantity}
                                                    </td>

                                                    <td>
                                                        Rs. {
                                                            item.price *
                                                            item.quantity
                                                        }
                                                    </td>

                                                    <td>

                                                        <button
                                                            className="btn btn-danger"
                                                            onClick={() =>
                                                                removeItem(
                                                                    item.id
                                                                )
                                                            }
                                                        >
                                                            Remove
                                                        </button>

                                                    </td>

                                                </tr>
                                            )
                                        )
                                    }

                                </tbody>

                            </table>

                            <div className="text-end">

                                <h4>

                                    Grand Total :
                                    Rs. {calculateTotal()}

                                </h4>

                            </div>

                        </>

                    )
                }

            </div>

        </div>
    );
}

export default CartPage;