import React from "react";

/**
 * RubiksGrid.jsx
 * Displays 12 images in a 3x4 grid (like a Rubik’s cube layout expanded).
 * Each image shows Name, Posting, and Year below it.
 */

export default function RubiksGrid({ images }) {
  const defaultImages = Array.from({ length: 12 }).map((_, i) => ({
    src: `https://picsum.photos/seed/${i}/600`,
    alt: `Sample ${i + 1}`,
    name: `Person ${i + 1}`,
    posting: `Position ${i + 1}`,
    year: 2025,
  },{
    src: `https://picsum.photos/seed/${i}/600`,
    alt: `Sample ${i + 1}`,
    name: `Person ${i + 1}`,
    posting: `Position ${i + 1}`,
    year: 2025,
  }));

  const gridImages = images && images.length === 12 ? images : defaultImages;

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {gridImages.map((img, idx) => (
          <figure key={idx} className="flex flex-col items-center">
            {/* Square container */}
            <div
              className="w-full relative overflow-hidden rounded-lg shadow-lg"
              style={{ paddingBottom: "100%" }}
            >
              <img
                src={img.src}
                alt={img.alt || `image-${idx}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                draggable={false}
              />
            </div>

            <figcaption className="mt-3 text-center text-sm md:text-base text-gray-700">
              <p className="font-semibold">{img.name}</p>
              <p className="text-gray-600">{img.posting}</p>
              <p className="text-gray-500">{img.year}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

/*
Usage Example:

import person1 from './assets/p1.jpg';
import person2 from './assets/p2.jpg';
...
const imgs = [
  { src: person1, alt: 'one', name: 'Alice', posting: 'Manager', year: 2024 },
  { src: person2, alt: 'two', name: 'Bob', posting: 'Engineer', year: 2025 },
  ... up to 12 items ...
];

<RubiksGrid images={imgs} />

Notes:
- Responsive layout (2 columns on small screens, 3 on medium and up)
- Uses Tailwind CSS classes
- Add hover animation for a smooth zoom-in effect
- Change `gap-6` for different spacing between tiles
*/
