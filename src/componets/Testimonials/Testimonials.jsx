import React from "react";
import DisplaySilde from "../DisplaySlide/DisplaySilde";

const Testimonials = () => {
  const testimonials = [
    {
      imageURL: "Hennessy-CEO-web-1.jpg",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, excepturi.",
    },
    {
      imageURL: "Hennessy-CEO-web-1.jpg",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, excepturi.",
    },
    {
      imageURL: "Hennessy-CEO-web-1.jpg",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, excepturi.",
    },
    {
      imageURL: "Hennessy-CEO-web-1.jpg",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, excepturi.",
    },
  ];
  return (
    <section className="h-screen flex flex-col justify-center ">
      <DisplaySilde
        hide="hidden"
        subHeading=""
        heading="Testimonials"
        data={testimonials}
      />
    </section>
  );
};

export default Testimonials;
