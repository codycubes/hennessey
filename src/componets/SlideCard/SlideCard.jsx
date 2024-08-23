import React from "react";

const SlideCard = () => {
  return (
    <section className="border-2 border-red-500 md:h-full md:w-[50%] md:flex md:flex-col md:justify-center">
      <section className="border-2 border-green-300 h-[80%]">
        <img
          src="products/1.PNG"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </section>
      <section className="p-4 border-2 border-blue-600">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. accusamus?
      </section>
    </section>
  );
};

export default SlideCard;
