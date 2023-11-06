import React from "react";
import Shoe from "../images/shoe-2.jpg";
import Star from "./Star";

const ViewProduct = () => {
  return (
    <div class="card-product bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 md:border-white">
      <img
        className="product-image rounded-t-lg shadow-drop-2-center"
        src={Shoe}
        alt="product-image"
      />
      <div class="p-4">
        <a href="#">
          <h5 class="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </h5>
        </a>
        <Star rating={3.5} />
        <p className="flex gap-3 mt-2 text-green-900 font-medium text-lg">
            <span>(men's clothing)</span>
        </p>
        <p class="mt-2 font-normal text-gray-700 dark:text-gray-400">
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>
        <button
          type="button"
          className="mt-4 justify-center w-full text-green-900 bg-white border border-green-900 hover:bg-green-900 hover:text-white  focus:ring-4 focus:outline-none focus:ring-green-900/50 font-semibold rounded-3xl text-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-green-900/55 mr-2 mb-2"
        >
          <p>Add to cart</p>
        </button>
      </div>
    </div>
  );
};

export default ViewProduct;
