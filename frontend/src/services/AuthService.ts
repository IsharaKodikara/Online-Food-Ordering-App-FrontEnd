import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/auth";

const signup = async (data: any) => {

    console.log("Signup Sending :", data);

    return await axios.post(
        `${API_URL}/signup`,
        data,
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
};

const signin = async (data: any) => {

    console.log("Login Sending :", data);

    return await axios.post(
        `${API_URL}/signin`,
        data,
        {
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
};

const AuthService = {
    signup,
    signin
};

export default AuthService;