export function Hero() {
  return (
    <>
      <section id="hero">
        <div className="section-container pt-10 first-line:my-15">
          <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-10 md:space-y-10 md:mx-10">
            {/* Hero Left */}
            {/* @todo Text */}
            <div className="mt-10 mb-15 space-y-5 text-xl items-center md:w-1/2">
              <div className="w-full flex flex-col md:w-1/2">
                <img src="images/logo.svg" alt="" />
              </div>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent capitalize bg-gradient-to-tr from-blue-700  via-red-500 to-orange-400 text-left md:text-4xl">
                Grow your business with us
              </h3>
              <p className=" text-gray-700 my-5 text-justify text-md md:text-lg font-light">
                SELLanyAD is a next-level influencers marketing platform
                designed to connect people and business owners with influencers
                and celebrities
              </p>
              {/* Upper Buttons */}
            </div>
            {/* Hero right */}
            <div className="w-full md:w-1/2">
              <img src="images/app-2.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
