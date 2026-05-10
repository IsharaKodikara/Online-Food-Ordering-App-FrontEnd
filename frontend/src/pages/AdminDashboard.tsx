import Navbar from "../components/Navbar";

function AdminDashboard() {

    return (

        <div>

            <Navbar />

            <div className="container mt-5">

                <h1 className="text-danger mb-4">
                    Admin Dashboard
                </h1>

                <div className="row">

                    <div className="col-md-4">

                        <div className="card shadow p-4">

                            <h4>
                                Manage Foods
                            </h4>

                            <p>
                                Add, update and delete food items.
                            </p>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="card shadow p-4">

                            <h4>
                                Manage Categories
                            </h4>

                            <p>
                                Add and manage food categories.
                            </p>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="card shadow p-4">

                            <h4>
                                Manage Orders
                            </h4>

                            <p>
                                View all customer orders.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default AdminDashboard;