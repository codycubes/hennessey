import React from "react";
import ceo from '/Hennessy-CEO-web-1.jpg'


const About = () => {
  return <div>
    <div className="flex">
      <div className="sm:pt-8 sm:pl-8">
        <img src={ceo} className=" sm:h-[600px] sm:w-[700px] "/>
        <h2 className="text-center text-3xl 	 font-normal pt-5">CEO Of Hennessy: Laurent Boillot</h2>
      </div>
      <div className="sm:pt-24 sm:pl-16 sm:pr-16">
       <h2 className="sm:text-center sm:font-bold">History of Hennessy</h2>
       <p className=" sm:h-12 sm:w-[500px] sm:pt-11 ">
       The lineage of the renowned Hennessy Cognac house stretches back an impressive 250 years, intertwining with historical events and key collaborations that have shaped its trajectory. Established in 1765 by the entrepreneurial Richard Hennessy, this house's roots can be traced to an unexpected origin: Ireland. As an Irish officer in service to the French king, Richard hailed from the Ballymacmoy House in his homeland. His commitment to the French army led him to the picturesque Cognac region, a place that would soon change the course of his life.
       </p>
      </div>
    </div>
  </div>;
};

export default About;
