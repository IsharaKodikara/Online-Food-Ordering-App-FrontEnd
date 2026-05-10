import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const role = localStorage.getItem("role");

    const logout = () => {

        localStorage.clear();

        navigate("/login");
    };

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">

            <Link className="navbar-brand" to="/home">
                Food Ordering
            </Link>

            <div className="collapse navbar-collapse">

                <ul className="navbar-nav me-auto">

                    <li className="nav-item">
                        <Link className="nav-link" to="/foods">
                            Foods
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/cart">
                            Cart
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/orders">
                            Orders
                        </Link>
                    </li>

                    {
                        role === "ADMIN" && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin">
                                    Admin Dashboard
                                </Link>
                            </li>
                        )
                    }

                </ul>

                <button
                    className="btn btn-danger"
                    onClick={logout}
                >
                    Logout
                </button>

            </div>

        </nav>
    );
}

export default Navbar;