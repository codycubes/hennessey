import DisplaySilde from "../DisplaySlide/DisplaySilde";
import React from "react";

const Products = () => {
  const products = [
    {
      imageURL: "products/31.jpg",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, excepturi.",
    },
    {
      imageURL: "products/32.jpg",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, excepturi.",
    },
    {
      imageURL: "products/33.jpg",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, excepturi.",
    },
    {
      imageURL: "products/34.jpg",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, excepturi.",
    },
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
