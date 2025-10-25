import React from "react";

const MassTimings = () => {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans p-6">
      <div className="container mx-auto">
        <h1 className="text-center text-2xl font-bold mb-6">
          திருப்பலி நேரங்கள் | Mass Timings
        </h1>

        {/* Wrapper for English + Tamil */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* English Section */}
          <div className="text-left bg-white rounded-2xl p-6 shadow">
            <h2 className="text-xl font-semibold mb-3">Mass Times</h2>
            <p>
              <strong>Sunday:</strong> Susaiyappar Temple (Parish Church - R Sector): 7.30 AM and 6.15 PM
            </p>
            <p><strong>Weekdays:</strong> 6.15 AM</p>
            <p><strong>Wednesday:</strong> St. Joseph's Novena Mass 6.15 PM</p>
            <p><strong>Sunday:</strong> St. Jude Thaddeus Church (C Sector) 6.15 AM</p>
            <p><strong>Thursday:</strong> St. Jude Thaddeus Novena Mass 6.15 PM</p>
            <p><strong>Thursday:</strong> Holy Child Jesus Novena Mass 6.30 PM (Ezil Nagar)</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Office Hours</h2>
            <p>Morning: 9.30 - 12.30</p>
            <p>Evening: 5.00 - 5.30</p>
            <p><strong>Phone:</strong> (0431) 2557348</p>
          </div>

          {/* Tamil Section */}
          <div className="text-right bg-white rounded-2xl p-6 shadow">
            <h2 className="text-xl font-semibold mb-3">திருப்பலி நேரங்கள்</h2>
            <p>
              <strong>ஞாயிறு:</strong> புனித சூசையப்பர் ஆலயம் (பங்கு ஆலயம் R செக்டார்) காலை 7.30 மணி & மாலை 6.15 மணி
            </p>
            <p><strong>வார நாட்கள்:</strong> காலை 6.15 மணி</p>
            <p><strong>புதன்:</strong> புனித சூசையப்பர் நவநாள் திருப்பலி மாலை 6.15 மணி</p>
            <p><strong>ஞாயிறு:</strong> புனித யூதா ததேயு ஆலயம் (C செக்டார்) காலை 6.15 மணி</p>
            <p><strong>வியாழன்:</strong> புனித யூதா ததேயு நவநாள் திருப்பலி மாலை 6.15 மணி</p>
            <p><strong>வியாழன்:</strong> புனித குழந்தை இயேசு நவநாள் திருப்பலி மாலை 6.30 மணி (எழில் நகர்)</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">பங்கு அலுவலக நேரம்</h2>
            <p>காலை: 9.30 - 12.30 மணி</p>
            <p>மாலை: 5.00 - 5.30 மணி</p>
            <p><strong>தொலைபேசி எண்:</strong> (0431) 2557348</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MassTimings;
