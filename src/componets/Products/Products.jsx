import DisplaySilde from "../DisplaySlide/DisplaySilde";
import React from "react";

const Products = () => {
  const products = [
    {
      imageURL: "30.jpg",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, excepturi.",
    },
    {
      imageURL: "32.jpg",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, excepturi.",
    },
    {
      imageURL: "33.jpg",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, excepturi.",
    },
    {
      imageURL: "31.jpg",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, excepturi.",
    },
  ];
  return (
    <section className="min-h-screen flex flex-col justify-center ">
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
