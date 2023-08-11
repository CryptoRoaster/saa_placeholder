export function Hero() {
  return (
    <>
      <section id="hero">
        <div className="section-container pt-10 first-line:my-15">
          <div className="flex flex-col-reverse md:flex-row md:items-center md:space-x-10 md:space-y-10 md:mx-10">
            {/* Hero Left */}
            {/* @todo Text */}
            <div className="mt-10 mb-15 space-y-5 text-xl items-center md:w-1/2">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent capitalize bg-gradient-to-tr from-blue-700  via-red-500 to-orange-400 text-left md:text-4xl">
                Grow your business with us
              </h3>
              <p className=" text-gray-700 my-5 text-justify text-md md:text-lg font-light">
                SELLanyAD is a next-level influencers marketing platform
                designed to connect people and business owners with influencers
                and celebrities
              </p>
              {/* Upper Buttons */}

              <div className="hidden md:flex md:flex-row justify-center items-center w-full mx-auto space-x-5">
                <button className="w-full px-5 py-4 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-800 to-purple-700">
                  <span className="text-white uppercase font-medium">
                    about us
                  </span>
                </button>
                <button className="px-5 w-full  py-4 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-800 to-purple-700">
                  <span className="text-white uppercase font-medium">
                    contact
                  </span>
                </button>
              </div>
              <div className="flex flex-col justify-center w-full space-y-4 text-xl md:hidden">
                <button className="px-5 py-4 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-800 to-purple-700">
                  <span className="text-white  font-medium">
                    get to know us
                  </span>
                </button>
                <button className="px-5 py-4 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-800 to-purple-700">
                  <span className="text-white  font-medium">contact </span>
                </button>
              </div>
              {/* Lower Buttons */}
              <div className="flex flex-row justify-center items-center mx-auto space-x-2 md:space-x-5 px-5 md:px-0">
                <img
                  src="images/appstore.svg"
                  alt=""
                  className="w-[55%] md:w-[50%]"
                />
                <img
                  src="images/googleplay.svg"
                  alt=""
                  className="w-[55%] md:w-[50%]"
                />
              </div>
            </div>
            {/* Hero right */}
            <div className="w-full md:w-1/2">
              <img src="images/hero.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
