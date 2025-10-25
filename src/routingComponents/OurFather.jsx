import React from "react";

// Import your images here
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";

const images = [
  { src: img1, name: "Image 1 description" , posting: "Image1 Posting", year: "year"},
  { src: img2, name: "Image 1 description" , posting: "Image1 Posting", year: "year"},
  { src: img3, name: "Image 1 description" , posting: "Image1 Posting", year: "year"},
  { src: img4, name: "Image 1 description" , posting: "Image1 Posting", year: "year"},
  { src: img5, name: "Image 1 description" , posting: "Image1 Posting", year: "year"},
  { src: img6, name: "Image 1 description" , posting: "Image1 Posting", year: "year"},
  { src: img7, name: "Image 1 description" , posting: "Image1 Posting", year: "year"},
  { src: img8, name: "Image 1 description" , posting: "Image1 Posting", year: "year"},
  { src: img9, name: "Image 1 description" , posting: "Image1 Posting", year: "year"},
  { src: img10, name: "Image 1 description" , posting: "Image1 Posting", year: "year"},
  { src: img11, name: "Image 1 description" , posting: "Image1 Posting", year: "year"},
  { src: img12, name: "Image 1 description" , posting: "Image1 Posting", year: "year"},
];

const ImageGrid = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">
      <div className="grid grid-cols-4 gap-6 w-full max-w-6xl">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={image.src}
              alt={`image-${index + 1}`}
              className="w-full h-52 object-cover"
            />
            <p className="text-center text-gray-700 text-sm font-medium p-3">
              {image.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
