import { Food } from "../models/Food";

interface Props {

    food: Food;

    onAddToCart: (foodId: number) => void;
}

function FoodCard({ food, onAddToCart }: Props) {

    return (

        <div className="col-md-4 mb-4">

            <div className="card shadow h-100">

                <div className="card-body">

                    <h4 className="card-title">
                        {food.name}
                    </h4>

                    <p className="card-text">
                        {food.description}
                    </p>

                    <h5 className="text-success">
                        Rs. {food.price}
                    </h5>

                    <p>
                        Status : {food.status}
                    </p>

                    <button
                        className="btn btn-primary w-100"
                        onClick={() => onAddToCart(food.id!)}
                    >
                        Add To Cart
                    </button>

                </div>

            </div>

        </div>
    );
}

export default FoodCard;