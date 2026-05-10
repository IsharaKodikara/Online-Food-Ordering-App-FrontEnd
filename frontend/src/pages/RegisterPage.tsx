import { useState } from "react";
import AuthService from "../services/AuthService";
import { useNavigate } from "react-router-dom";

function RegisterPage() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: "CUSTOMER"
    });

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
 };

    const handleRegister = async (e: any) => {
        e.preventDefault();

        try {

            await AuthService.signup(formData);

            alert("Registration Success");

            navigate("/login");

        } catch (error) {
            console.log(error);
            alert("Registration Failed");
        }
    };
 return (
        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card p-4 shadow">

                        <h2 className="text-center mb-4 text-success">
                            Register
                        </h2>

                         <form  onSubmit={handleRegister}>
                             <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="form-control mb-3"
                                onChange={handleChange}
                                required
                            />

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

                            <button className="btn btn-success w-100 mb-3">
                                Register
                            </button>

                        </form>

                        <button
                            className="btn btn-outline-primary w-100"
                            onClick={() => navigate("/login")}
                        >
                            Skip To Login
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default RegisterPage;
