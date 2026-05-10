import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/categories";

const getAllCategories = async () => {

    return await axios.get(API_URL);
};

const CategoryService = {
    getAllCategories
};

export default CategoryService;