import React from "react";

const BookingRow = ({ booking, handleDelete, handleConfirm }) => {
  const { _id, img, price, title, date, service, email, name, status } =
    booking;
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
        {status === "confirm" ? (
          <span className="text-bold text-xl mr-2 text-green-600">
            {status}
          </span>
        ) : (
          <button
            onClick={() => handleConfirm(_id)}
            className="btn  btn-xs btn-warning mr-2"
          >
            Please Confirm
          </button>
        )}

        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-xs btn-error"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default BookingRow;
