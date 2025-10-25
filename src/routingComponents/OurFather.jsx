import React from "react";

// Import your images here
import img1 from "src/assets/fatherImg/cfather1.jpg";
import img2 from "src/assets/fatherImg/cfather2.jpg";
import img3 from "src/assets/fatherImg/cfather3.jpg";
import img4 from "src/assets/fatherImg/cfather4.jpg";
import img5 from "src/assets/fatherImg/cfather5.jpg";
import img6 from "src/assets/fatherImg/cfather6.jpg";
import img7 from "src/assets/fatherImg/cfather7.jpg";
import img8 from "src/assets/fatherImg/cfather8.jpg";
import img9 from "src/assets/fatherImg/cfather9.jpg";
import img10 from "src/assets/fatherImg/cfather10.jpg";
import img11 from "src/assets/fatherImg/cfather11.jpg";
import img12 from "src/assets/fatherImg/father3.jpg";

const images = [
  { src: img1, name: "Rev.R.V.Mathias" , posting: "First Parish Priest", year: "01-05-1967 to 01-05-1972"},
  { src: img2, name: "Rev.A.Soosairaj" , posting: "Second Parish Priest", year: "01-05-1972 to 14-06-1981"},
  { src: img3, name: "Rev.M.S.Lawrence" , posting: "Third Parish Priest", year: "14-08-1981 to 26-05-1980"},
  { src: img4, name: "Rev.P.Thomas Balsamy" , posting: "Fourth Parish Priest", year: "26-05-1985 to 28-09-1986"},
  { src: img5, name: "Rev.V.M.Marinayakam" , posting: "Fifth Parish Priest", year: "28-09-1986 to 14-06-1987"},
  { src: img6, name: "Rev.A.Arputham" , posting: "Sixth Parish Priest", year: "14-06-1987 to 04-06-1994"},
  { src: img7, name: "Rev.A.Vincent" , posting: "Seventh Parish Priest", year: "04-06-1994 to 17-06-2001"},
  { src: img8, name: "Rev.A.Soosairaj" , posting: "Eighth Parish Priest", year: "17-06-2001 to 02-06-2006"},
  { src: img9, name: "Rev.A.James" , posting: "Nineth Parish Prince", year: "02-06-2006 to 05-06-2011"},
  { src: img10, name: "Rev.A.Sundhararaj" , posting: "Tenth Parish Priest", year: "2011 to 2016"},
  { src: img11, name: "Rev.M.Gnanadhikam" , posting: "Eleventh Parish Priest", year: "2016 to 2024"},
  { src: img12, name: "Fr. Jerome gnana prabu" , posting: "Twelveth Parish Priest", year: "2024 to 2028"}
  
];

const ImageGrid = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">
      <div className="grid grid-cols-4 gap-8 w-full max-w-6xl">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Image box */}
            <div className="w-full bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img
                src={image.src}
                alt={`image-${index + 1}`}
                className="w-full h-52 object-cover"
              />
            </div>

            {/* Description below image */}
            <p className="mt-4 text-center text-gray-800 text-sm font-medium">
              {image.name}
            </p>
            <p className="mt-4 text-center text-gray-800 text-sm font-medium">
              {image.posting}
            </p>
            <p className="mt-4 text-center text-gray-800 text-sm font-medium">
              Time Period: {image.year}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
