import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import FoodCard from "../components/FoodCard";

import FoodService from "../services/FoodService";
import CategoryService from "../services/CategoryService";
import CartService from "../services/CartService";

import { Food } from "../models/Food";
import { Category } from "../models/Category";

function FoodPage() {

    const [foods, setFoods] = useState<Food[]>([]);

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {

        loadFoods();

        loadCategories();

    }, []);

    const loadFoods = async () => {

        try {

            const response =
                await FoodService.getAllFoods();

            setFoods(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    const loadCategories = async () => {

        try {

            const response =
                await CategoryService.getAllCategories();

            setCategories(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    const filterFoods = async (
        categoryId: number
    ) => {

        try {

            const response =
                await FoodService.getFoodsByCategory(
                    categoryId
                );

            setFoods(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    const addToCart = async (
        foodId: number
    ) => {

        try {

            const userId = Number(
                localStorage.getItem("userId")
            );

            const cartResponse =
                await CartService.getCartByUser(
                    userId
                );

            const cartId =
                cartResponse.data.id;

            const cartItem = {

                cartId: cartId,

                foodItemId: foodId,

                quantity: 1
            };

            console.log(cartItem);

            await CartService.addToCart(
                cartItem
            );

            alert("Added To Cart");

        } catch (error) {

            console.log(error);

            alert("Add To Cart Failed");
        }
    };

    return (

        <div>

            <Navbar />

            <div className="container mt-4">

                <h2 className="mb-4 text-success">
                    Food Menu
                </h2>

                <div className="mb-4">

                    <button
                        className="btn btn-dark me-2"
                        onClick={loadFoods}
                    >
                        All
                    </button>

                    {
                        categories.map((category) => (

                            <button
                                key={category.id}
                                className="btn btn-primary me-2"
                                onClick={() =>
                                    filterFoods(
                                        category.id
                                    )
                                }
                            >
                                {category.name}
                            </button>

                        ))
                    }

                </div>

                <div className="row">

                    {
                        foods.map((food) => (

                            <FoodCard
                                key={food.id}
                                food={food}
                                onAddToCart={
                                    addToCart
                                }
                            />

                        ))
                    }

                </div>

            </div>

        </div>
    );
}

export default FoodPage;