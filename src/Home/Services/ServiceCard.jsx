import { FaArrowRight } from "react-icons/fa";
const ServiceCard = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="font-medium text-lg text-orange-500">${price}</p>
        <button className="btn btn-warning text-right text-white">
          {" "}
          <FaArrowRight></FaArrowRight>{" "}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
