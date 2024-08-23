import DisplaySilde from "../DisplaySlide/DisplaySilde";
import React from "react";

const Products = () => {
  const products = [
    { imageURL: "", text: "" },
    { imageURL: "", text: "" },
    { imageURL: "", text: "" },
    { imageURL: "", text: "" },
  ];
  return (
    <section className="h-screen flex flex-col justify-center ">
      <DisplaySilde
        hide=""
        subHeading="The Art of Cognac"
        heading="The Collection"
        data={products}
      />
    </section>
  );
};

export default Products;
