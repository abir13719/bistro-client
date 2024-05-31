import { useForm } from "react-hook-form";
import SectionTitle from "../../components/shared/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const image_host_key = import.meta.env.VITE_IMAGE_HOST_KEY;
const image_host_api = `https://api.imgbb.com/1/upload?key=${image_host_key}`;

const UpdateItem = () => {
  const { name, category, price, recipe, _id } = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_host_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };

      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      if (menuRes.data.modifiedCount > 0) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: `${data.name} has been updated successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
        // reset();
      }
    }
  };

  return (
    <div>
      <SectionTitle title={"Update Items"} subTitle={"Hurry Up"}></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text">Recipe Name</span>
            </label>
            <input
              {...register("name", { required: true })}
              defaultValue={name}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>

          <div className="flex gap-4 my-4">
            {/* category */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                {...register("category", { required: true })}
                defaultValue={category}
                className="select select-bordered w-full"
              >
                <option value="default" disabled>
                  Select The Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drink">Drink</option>
              </select>
            </div>

            {/* price */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                {...register("price", { required: true })}
                defaultValue={price}
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* recipeDetails */}
          <div className="form-control my-4">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              defaultValue={recipe}
              className="textarea textarea-bordered h-24"
              placeholder="Type here"
            ></textarea>
          </div>

          <div className="form-control w-full">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <button className="btn my-4 bg-orange-400 text-white">
            Update Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
