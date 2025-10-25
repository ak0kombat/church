import React from "react";

import construction1 from "../assets/construction1.jpg";
import construction2 from "../assets/construction2.jpg";
import construction3 from "../assets/construction3.jpg";
import construction4 from "../assets/construction4.jpg";

export default function OurFather({ images }) {
  const defaultImages = [
    {
      src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1200&q=80",
      alt: "Sample 1",
      caption: "Akash \n Arjun",
    },
    {
      src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1200&q=80",
      alt: "Sample 2",
      caption: "Caption Two",
    },
    {
      src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80",
      alt: "Sample 3",
      caption: "Caption Three",
    },
    {
      src: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=1200&q=80",
      alt: "Sample 4",
      caption: "Caption Four",
    },
  ];

  const gridImages = images && images.length === 4 ? images : defaultImages;

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        {gridImages.map((img, idx) => (
          <figure key={idx} className="flex flex-col items-center">
            {/* Square container: using padding-bottom trick to keep 1:1 aspect ratio */}
            <div className="w-full relative overflow-hidden rounded-lg shadow-lg" style={{ paddingBottom: '100%' }}>
              <img
                src={img.src}
                alt={img.alt || `image-${idx}`}
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />
            </div>

            <figcaption className="mt-3 text-center text-sm md:text-base text-gray-700">
              {img.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

