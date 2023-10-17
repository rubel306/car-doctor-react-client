import React from "react";

const BookingRow = ({ booking }) => {
  const { img, price, title, date, service, email, name } = booking;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">Service:{title ? title : service}</div>
            <div className="text-sm opacity-50">Name:{name}</div>
            <div className="text-sm opacity-50">Email:{email}</div>
          </div>
        </div>
      </td>
      <td>{date}</td>
      <td className="font-semibold">${price}</td>
      <th>
        <button className="btn  btn-xs btn-warning mr-2">Edit</button>
        <button className="btn btn-xs btn-error">Delete</button>
      </th>
    </tr>
  );
};

export default BookingRow;
