import { Link, useLoaderData } from "react-router-dom";
import innerbg from "../../../assets/images/checkout/checkout.png";
import detailsBanner from "../../../assets/images/banner/2.jpg";
import { FaRegPlayCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
const ServiceDetails = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const service = useLoaderData();
  const { title, price, img, description, facility, _id } = service;
  return (
    <div>
      <div
        className="inner-banner text-center w-full h-60 relative mb-20"
        style={{ backgroundImage: `url(${innerbg})` }}
      >
        <div className="absolute w-full h-full top-0 flex justify-center items-center left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <h2 className="text-white text-5xl font-bold">Service Details</h2>
        </div>
      </div>

      <div className="service-details-wrap flex">
        <div className="service-details-main grow w-8/12 pr-4">
          <img className="w-full" src={img} alt="" />
          <h2 className="text-5xl font-bold text-black py-6">{title}</h2>
          <p>{description}</p>
          <div className="grid grid-cols-2 gap-5 py-5">
            {facility.map((fac) => (
              <div
                key={_id}
                className="p-7 bg-slate-100 rounded-lg mb-6  border-t-4 border-t-orange-500"
              >
                <h3 className="text-xl font-semibold text-black">{fac.name}</h3>
                <p className="text-slate-400">{fac.details}</p>
              </div>
            ))}
          </div>
          <h3 className="font-bold text-5xl py-5">3 Simple Steps to Process</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text
          </p>
          <div className="steps flex gap-5 my-6">
            <div className="text-center p-6 border border-slate-300 rounded-lg">
              <div className="text-white text-3xl mx-auto h-20 w-20 leading-[64px] font-bold bg-orange-600 rounded-full border-8 border-full border-red-200">
                01
              </div>
              <h3 className="text-3xl font-bold">Step One</h3>
              <p className="text-slate-400">
                It uses a dictionary of over 200 .
              </p>
            </div>
            <div className="text-center p-6 border border-slate-300 rounded-lg">
              <div className="text-white text-3xl mx-auto h-20 w-20 leading-[64px] font-bold bg-orange-600 rounded-full border-8 border-full border-red-200">
                02
              </div>
              <h3 className="text-3xl font-bold">Step Two</h3>
              <p className="text-slate-400">
                It uses a dictionary of over 200 .
              </p>
            </div>
            <div className="text-center p-6 border border-slate-300 rounded-lg">
              <div className="text-white text-3xl mx-auto h-20 w-20 leading-[64px] font-bold bg-orange-600 rounded-full border-8 border-full border-red-200">
                03
              </div>
              <h3 className="text-3xl font-bold">Step three</h3>
              <p className="text-slate-400">
                It uses a dictionary of over 200 .
              </p>
            </div>
          </div>
          <div
            className="details-video mb-8 relative h-[400px] w-full"
            style={{
              backgroundImage: `url(${detailsBanner})`,
              backgroundSize: "cover",
            }}
          >
            <div className=" w-full h-full absolute left-0 top-0 flex justify-center items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
              <div className="text-white text-5xl">
                <FaRegPlayCircle size={100} color="#FF3811"></FaRegPlayCircle>
              </div>
            </div>
          </div>
        </div>
        <div className="service-details-right w-4/12 ">
          <div className="p-9 bg-[#F3F3F3] rounded-lg mb-5">
            <h3 className="text-3xl py-5 font-bold text-black">Services</h3>
            <ul>
              {services.map((service) => (
                <li className="p-3  w-full bg-[#FF3811] text-white rounded-md my-2">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>
          <h2 className="text-black font-bold text-5xl">Price ${price}</h2>
          <Link
            className="btn btn-block bg-[#FF3811] text-white my-5 hover:bg-orange-500"
            to={`/checkout/${_id}`}
          >
            Proceed Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
