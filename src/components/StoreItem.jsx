import React from "react";
import Shoe from "../images/shoe-2.jpg";
import Star from "./Star";
import Cart from "../images/shopping-cart.svg";

const StoreItem = ({ rating }) => {
  return (
    <div className="max-w-sm shadow-drop-2-center">
      <a href="#">
        <img src={Shoe} alt="product-image" className="" />
      </a>
      <div>
        <a href="#">
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
            Product Name
          </h5>
        </a>
        <div className="flex gap-6">
          <Star rating={rating} />
          <p className="font-extralight text-md">(234)</p>
        </div>
        <p className="text-2xl font-normal py-4">$100</p>
        <button
          type="button"
          className="justify-center w-full text-white bg-green-900 hover:bg-green-900/90 focus:ring-4 focus:outline-none focus:ring-green-900/50 font-medium rounded-3xl text-md px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-green-900/55 mr-2 mb-2"
        >
          <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
};

export default StoreItem;
