import SlideCard from "../SlideCard/SlideCard";
import React from "react";

const Products = () => {
  return (
    <section className="h-screen flex flex-col justify-center ">
      <section className="flex flex-col justify-center sm:flex-row sm:items-center p-5 border-2 border-green-600">
        <section className="border-2 border-black p-4 h-[60%] sm:flex sm:flex-col justify-center">
          <section className="mb-4">The Collection</section>
          <section>The Art of Cognac</section>
          <button>Discover the entire collection</button>
        </section>
        <SlideCard />
      </section>
    </section>
  );
};

export default Products;
