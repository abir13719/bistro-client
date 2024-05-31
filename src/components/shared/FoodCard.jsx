import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuID: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/cart", cartItem).then((response) => {
        console.log(response.data);
        if (response.data.insertedId) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: `${name} added to cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You Must Log In",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log In",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card border bg-base-100 shadow-2xl">
      <figure>
        <img className="w-full" src={image} />
      </figure>
      <p className="bg-black text-white absolute right-5 top-4 p-2">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}!</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button onClick={handleAddToCart} className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
