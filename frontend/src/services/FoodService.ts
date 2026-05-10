import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/foods";

const getAllFoods = async () => {

    return await axios.get(API_URL);
};

const getFoodsByCategory = async (categoryId: number) => {

    return await axios.get(
        `${API_URL}/category/${categoryId}`
    );
};

const FoodService = {
    getAllFoods,
    getFoodsByCategory
};

export default FoodService;