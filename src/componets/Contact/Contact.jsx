import React from "react";

const Contact = () => {
  return <div>
    
    <div>
      
      <div className="card h-fit max-w-6xl p-5 md:p-12 justify-center" id="form">
                    <h2 className="mb-4 text-2xl font-bold dark:text-white">YOUR INFORMATION</h2>
                    <form id="contactForm">
                        <div className="mb-6">
                            <div className="mx-0 mb-1 sm:mb-4">
                            <div className="mx-0 mb-1 sm:mb-4">
                                    <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autocomplete="given-name" placeholder="Your Email Address" className="mb-2 w-full rounded-md border border-black py-2 pl-2 pr-4  dark:text-gray-300 sm:mb-0" name="Your Email Address"/>
                                </div>
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autocomplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-black py-2 pl-2 pr-4  dark:text-gray-300 sm:mb-0" name="Your Nane"/>
                                </div>
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autocomplete="given-name" placeholder="Phone Number" className="mb-2 w-full rounded-md border border-black py-2 pl-2 pr-4  dark:text-gray-300 sm:mb-0" name="Your Nane"/>
                                </div>
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" autocomplete="email" placeholder="Date of Birth" className="mb-2 w-full rounded-md border border-black py-2 pl-2 pr-4  dark:text-gray-300 sm:mb-0" name="email"/>
                                </div>
                                <div className="mx-0 mb-1 sm:mb-4">
                                    <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" autocomplete="email" placeholder="Country" className="mb-2 w-full rounded-md border border-black py-2 pl-2 pr-4  dark:text-gray-300 sm:mb-0" name="email"/>
                                </div>
                            </div>
                            <div className="mx-0 mb-1 sm:mb-4">
                                <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-black py-2 pl-2 pr-4  dark:text-gray-300 sm:mb-0"></textarea>
                            </div>
                            
                        </div>
                        <div className="text-center">
                            <button type="submit" className="w-full text-white px-6 py-3 font-xl rounded-md sm:mb-0">Submit</button>
                        </div>
                    </form>
                </div>
      
    </div>
  </div>;
};

export default Contact;
