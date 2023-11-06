import React from "react";
import Shoe from "../images/shoe-1.jpg";
import Star from "./Star";

const StoreItem = ({ rating }) => {
  return (
    <div className="max-w-sm">
      <a href="#">
        <img src={Shoe} alt="product-image" className="rounded-md" />
      </a>
      <div>
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Product Name
          </h5>
        </a>
        <div className="flex justify-between">
          <Star rating={rating} />
          <p className="font-extralight text-md">(234)</p>
        </div>
        <p className="text-2xl font-normal py-4">$100</p>
      </div>
    </div>
  );
};

export default StoreItem;
