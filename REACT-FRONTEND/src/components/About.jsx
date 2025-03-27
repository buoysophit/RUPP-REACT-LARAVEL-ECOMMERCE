import React from "react";
// import Banner from "./Banner/Banner";
import headphone from "./../assets/hero/headphone.png";

const BannerData = {
  discount: "About Us",
  title: "PHITTER Store",
  date: "Est. 2024",
  image: headphone,
  title2: "Quality Products",
  title3: "Our Story",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#2dcc6f",
};

const About = () => {
  return (
    <div className="pt-20">
      <div className="container">
        {/* <Banner data={BannerData} /> */}
        
        {/* About Content */}
        <div className="max-w-3xl mx-auto my-10 text-center">
          <h1 className="text-3xl font-bold mb-6">Welcome to PHITTER</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris.
          </p>
          
          {/* Mission Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We ensure the highest quality in all our products.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Constantly evolving to meet customer needs.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your satisfaction is our top priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;