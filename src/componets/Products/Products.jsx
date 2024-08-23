import SlideCard from "../SlideCard/SlideCard";
import React from "react";

const Products = () => {
  return (
    <section className="h-screen flex flex-col justify-center ">
      <section className="flex flex-col justify-center sm:flex-row md:items-center md:h-full gap-5 p-5">
        <section className="border-2 border-black p-4 flex-col justify-center  md:flex md:h-[50%] md:w-[20%]">
          <section className="mb-4">The Collection</section>
          <section className="text-2xl">The Art of Cognac</section>
          <button className="mr-auto my-3">
            Discover the entire collection
          </button>
        </section>

        <SlideCard />
      </section>
    </section>
  );
};

export default Products;
