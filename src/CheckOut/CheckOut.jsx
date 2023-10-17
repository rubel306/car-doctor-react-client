import { useLoaderData } from "react-router-dom";
import innerbg from "../assets/images/banner/2.jpg";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, price, img } = service;
  const { user } = useContext(AuthContext);
  const handleCheckOut = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;
    const title = form.title.value;
    const price = form.price.value;
    const booking = {
      name,
      email,
      price,
      title,
      price,
      date,
      img,
    };
    console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("data inserted successfully");
        }
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div
        className="inner-banner text-center w-full h-60 relative mb-20"
        style={{ backgroundImage: `url(${innerbg})`, backgroundSize: "cover" }}
      >
        <div className="absolute w-full h-full top-0 flex justify-center items-center left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <h2 className="text-white text-5xl font-bold">Check Out</h2>
        </div>
      </div>
      <form onSubmit={handleCheckOut} className="card-body">
        <div className="grid grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              defaultValue={user?.email}
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service Name</span>
            </label>
            <input
              defaultValue={title}
              name="title"
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              name="price"
              type="text"
              className="input input-bordered"
              defaultValue={price}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              name="date"
              type="date"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            type="submit"
            className="btn btn-warning"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
