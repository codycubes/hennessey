import React from "react";
import ceo from '/Hennessy-CEO-web-1.jpg'


const About = () => {
  return <div>
    <div className="flex">
      <div className="pt-8 pl-8">
        <img src={ceo} className=" h-[600px] w-[700px] rounded-full"/>
        <h2 className="text-center font-bold pt-5">CEO Of Hennessy: Laurent Boillot</h2>
      </div>
      <div className="pt-24 pl-16">
       <h1 className="text-center font-bold">History of Hennessy</h1>
       <p className=" h-12 font-sans w-[500px] pt-11">
       The lineage of the renowned Hennessy Cognac house stretches back an impressive 250 years, intertwining with historical events and key collaborations that have shaped its trajectory. Established in 1765 by the entrepreneurial Richard Hennessy, this house's roots can be traced to an unexpected origin: Ireland. As an Irish officer in service to the French king, Richard hailed from the Ballymacmoy House in his homeland. His commitment to the French army led him to the picturesque Cognac region, a place that would soon change the course of his life.
       </p>
      </div>
    </div>
  </div>;
};

export default About;
