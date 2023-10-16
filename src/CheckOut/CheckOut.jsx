import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, price, img } = service;
  return (
    <div>
      <h2>checkout order : {title}</h2>
    </div>
  );
};

export default CheckOut;
