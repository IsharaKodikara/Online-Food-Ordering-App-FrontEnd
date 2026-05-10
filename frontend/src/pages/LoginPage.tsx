import { useState } from "react";
import AuthService from "../services/AuthService";
import { useNavigate } from "react-router-dom";

function LoginPage() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e: any) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async (e: any) => {

        e.preventDefault();

        console.log("Login Data :", formData);

        try {

            const response = await AuthService.signin(formData);

            console.log("Login Response :", response.data);

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("role", response.data.role);
            localStorage.setItem("userId", response.data.userId);

            alert("Login Success");

            navigate("/home");

        } catch (error: any) {

            console.log("FULL ERROR :", error);

            if (error.response) {

                console.log("Backend Error :", error.response.data);

                alert(
                    typeof error.response.data === "string"
                        ? error.response.data
                        : "Login Failed"
                );

            } else if (error.request) {

                alert("Cannot connect to backend");

            } else {

                alert("Unexpected Error");
            }
        }
    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card p-4 shadow">

                        <h2 className="text-center mb-4 text-primary">
                            Login
                        </h2>

                        <form onSubmit={handleLogin}>

                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="form-control mb-3"
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="form-control mb-3"
                                onChange={handleChange}
                                required
                            />

                            <button
                                type="submit"
                                className="btn btn-primary w-100 mb-3"
                            >
                                Login
                            </button>

                        </form>

                        <button
                            className="btn btn-outline-success w-100"
                            onClick={() => navigate("/")}
                        >
                            Create New Account
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default LoginPage;