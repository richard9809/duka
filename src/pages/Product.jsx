import React from "react";
import { useParams } from "react-router-dom";
import ViewProduct from "../components/ViewProduct";

const Product = () => {
  const { id } = useParams();
  return (
    <div className="screen-height px-2 flex justify-center items-center">
      <ViewProduct />
    </div>
  );
};

export default Product;
