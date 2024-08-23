import React from "react";

const Contact = () => {
  return <div>
    
    <div>
      
      <div class="card h-fit max-w-6xl p-5 md:p-12 justify-center" id="form">
                    <h2 class="mb-4 text-2xl font-bold dark:text-white">YOUR INFORMATION</h2>
                    <form id="contactForm">
                        <div class="mb-6">
                            <div class="mx-0 mb-1 sm:mb-4">
                            <div class="mx-0 mb-1 sm:mb-4">
                                    <label for="name" class="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autocomplete="given-name" placeholder="Your Email Address" class="mb-2 w-full rounded-md border border-black py-2 pl-2 pr-4  dark:text-gray-300 sm:mb-0" name="Your Email Address"/>
                                </div>
                                <div class="mx-0 mb-1 sm:mb-4">
                                    <label for="name" class="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autocomplete="given-name" placeholder="Your name" class="mb-2 w-full rounded-md border border-black py-2 pl-2 pr-4  dark:text-gray-300 sm:mb-0" name="Your Nane"/>
                                </div>
                                <div class="mx-0 mb-1 sm:mb-4">
                                    <label for="name" class="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autocomplete="given-name" placeholder="Phone Number" class="mb-2 w-full rounded-md border border-black py-2 pl-2 pr-4  dark:text-gray-300 sm:mb-0" name="Your Nane"/>
                                </div>
                                <div class="mx-0 mb-1 sm:mb-4">
                                    <label for="email" class="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" autocomplete="email" placeholder="Date of Birth" class="mb-2 w-full rounded-md border border-black py-2 pl-2 pr-4  dark:text-gray-300 sm:mb-0" name="email"/>
                                </div>
                                <div class="mx-0 mb-1 sm:mb-4">
                                    <label for="email" class="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" autocomplete="email" placeholder="Country" class="mb-2 w-full rounded-md border border-black py-2 pl-2 pr-4  dark:text-gray-300 sm:mb-0" name="email"/>
                                </div>
                            </div>
                            <div class="mx-0 mb-1 sm:mb-4">
                                <label for="textarea" class="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." class="mb-2 w-full rounded-md border border-black py-2 pl-2 pr-4  dark:text-gray-300 sm:mb-0"></textarea>
                            </div>
                            
                        </div>
                        <div class="text-center">
                            <button type="submit" class="w-full bg-orange-700 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Submit</button>
                        </div>
                    </form>
                </div>
      
    </div>
  </div>;
};

export default Contact;
