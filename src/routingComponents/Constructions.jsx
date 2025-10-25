import React from "react";


import construction1 from "../assets/construction1.jpg";
import construction2 from "../assets/construction2.jpg";
import construction3 from "../assets/construction3.jpg";
import construction4 from "../assets/construction4.jpg";


const Constructions = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center space-y-12 py-6">
      {/* Heading */}
      <h1 className="text-5xl font-semibold text-gray-800 mb-12 tracking-wide">
        Construction Updates
      </h1>

      {/* Image 1 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-[900px]">
          <img
            src={construction1}
            alt="Gallery 1"
            className="w-[900px] h-[500px] object-contain rounded-2xl mx-auto"
          />
        </div>


         {/* Image 2 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-[900px]">
          <img
            src={construction2}
            alt="Gallery 2"
            className="w-[900px] h-[500px] object-contain rounded-2xl mx-auto"
          />
        </div>

        {/* Image 3 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-[900px]">
          <img
            src={construction3}
            alt="Gallery 3"
            className="[900px] h-[500px] object-contain rounded-2xl mx-auto"
          />
        </div>

        {/* Image 4 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-[900px]">
          <img
            src={construction4}
            alt="Gallery 4"
            className="[900px] h-[500px] object-contain rounded-2xl mx-auto"
          />
        </div>

        {/* Image 4 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-[900px]">
          <img
            src={construction4}
            alt="Gallery 4"
            className="[900px] h-[500px] object-contain rounded-2xl mx-auto"
          />
        </div>

        
      </div>
    
  );
};

export default Constructions;
