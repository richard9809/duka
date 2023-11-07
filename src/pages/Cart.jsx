import React from "react";
import CartImage from "../images/shoe-2.jpg";

const Cart = () => {
  const cols = ["Item Description", "Price", "Qty", "Subtotal"];

  return (
    <div className="screen-height flex flex-col gap-4 py-4 px-4 md:px-24 lg:px-48">
      <div className="text-center w-full py-2 border-b border-gray-900">
        <h1 className="uppercase font-bold text-3xl ">Shopping Cart</h1>
      </div>

      <table className="w-full text-sm text-left text-gray-500 border-b border-gray-900">
        <thead className="text-xs text-gray-600 uppercase md:text-lg">
          <tr className="h-10">
            {cols.map((col) => (
              <th scope="col" className="font-bold">
                {col}
              </th>
            ))}
            <th scope="col" className="sr-only">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="md:text-lg">
            <td className="py-2">
              <div className="flex gap-2 items-center">
                <img src={CartImage} className="cart-image" />
                <p className="font-bold">Fjallraven </p>
              </div>
            </td>
            <td className="py-2">$30.00</td>
            <td className="py-2">
              <input
                type="number"
                defaultValue={1}
                className="w-10 px-4 border border-gray-300 py-1 rounded-lg md:w-16"
              />
            </td>
            <td className="py-2">$30.00</td>
            <td>
              <button>
                <i className="fa fa-trash text-red-500"></i>
              </button>
            </td>
          </tr>

          <tr className="md:text-lg">
            <td className="py-2">
              <div className="flex gap-2 items-center">
                <img src={CartImage} className="cart-image" />
                <p className="font-bold">Fjallraven </p>
              </div>
            </td>
            <td className="py-2">$30.00</td>
            <td className="py-2">
              <input
                type="number"
                defaultValue={1}
                className="w-10 px-4 border border-gray-300 py-1 rounded-lg md:w-16"
              />
            </td>
            <td className="py-2">$30.00</td>
            <td>
              <button>
                <i className="fa fa-trash text-red-500"></i>
              </button>
            </td>
          </tr>

          
        </tbody>
      </table>

      <div className="py-4 flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
        <div className="md:flex md:gap-4">
          <label
            htmlFor="discount"
            className="block mb-2 text-xl font-bold text-gray-900 uppercase md:w-full md:text-md"
          >
            Discount Code:
          </label>
          <input
            type="number"
            id="discount"
            className="w-8/12 border border-black text-gray-900 text-sm  focus:ring-green-900 focus:border-green-900 block p-2 md:w-full"
            placeholder="9999999"
          />
        </div>
        <div className=" text-right">
          <h5 className="text-2xl font-bold uppercase">Total $30.00</h5>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button
          type="button"
          className="justify-center w-full text-green-900 bg-white border border-green-900 hover:bg-green-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-900/50 font-bold up rounded-3xl text-xl px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-green-900/55 mr-2 mb-2 md:w-1/3"
        >
          <p>Checkout</p>
        </button>
      </div>
    </div>
  );
};

export default Cart;
