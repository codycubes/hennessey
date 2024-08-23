import React from "react";
import DisplaySilde from "../DisplaySlide/DisplaySilde";

const Testimonials = () => {
  const testimonials = [
    { imageURL: "", text: "" },
    { imageURL: "", text: "" },
    { imageURL: "", text: "" },
    { imageURL: "", text: "" },
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
