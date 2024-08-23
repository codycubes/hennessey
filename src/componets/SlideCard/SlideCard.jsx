import React from "react";

const SlideCard = ({ imageURL, text }) => {
  return (
    <section className="w-full flex flex-col items-center">
      <section>
        <img src={imageURL} alt="" className="mx-auto w-[50%]" />
      </section>
      <section className>{text}</section>
    </section>
  );
};

export default SlideCard;
