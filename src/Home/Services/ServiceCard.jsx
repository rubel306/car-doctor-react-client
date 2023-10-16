import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="font-medium text-lg text-orange-500">${price}</p>
        <Link to={`/services/${_id}`}>
          <button className="btn btn-warning text-white">
            <FaArrowRight></FaArrowRight>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
