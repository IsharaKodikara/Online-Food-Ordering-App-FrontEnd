import Navbar from "../components/Navbar";

function HomePage() {

    return (

        <div>

            <Navbar />

            <div className="container mt-5">

                <div className="text-center">

                    <h1 className="display-4 text-success">
                        Welcome To Online Food Ordering System
                    </h1>

                    <p className="lead mt-4">
                        Order your favorite meals quickly and easily.
                    </p>

                </div>

            </div>

        </div>
    );
}

export default HomePage;