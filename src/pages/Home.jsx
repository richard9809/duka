import React from "react";
import Hero from "../components/Hero";
import Store from "../components/Store";

const Home = () => {
  return (
    <div className="screen-height">
      <Hero
        backgroundImage={"../src/images/shoe-1.jpg"}
        heroTitle={"Discover Style and Innovation Today."}
      />
      <div className="py-8 px-4 md:px-12">
        <div className="flex justify-between mb-4">
          <div className="flex gap-4">
            <label
              for="sizes"
              class="block mb-2 text-sm font-regular text-gray-900 dark:text-white"
            >
              Limit:
            </label>
            <select
              id="sizes"
              class="bg-gray-50 mb-2 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>25</option>
              <option value="50">50</option>
              <option value="75">75</option>
              <option value="100">100</option>
            </select>
          </div>

          <div className="flex gap-4">
            <label
              for="sort"
              class="block mb-2 text-sm font-regular text-gray-900 dark:text-white"
            >
              Sort:
            </label>
            <select
              id="sort"
              class="bg-gray-50 mb-2 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected value="">...</option>
              <option value="asc">ASC</option>
              <option value="desc">DESC</option>
            </select>
          </div>
        </div>
        <Store />
      </div>
    </div>
  );
};

export default Home;
