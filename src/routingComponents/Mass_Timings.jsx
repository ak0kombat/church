import React from "react";

const MassTimes = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-md p-8">
        {/* Tamil Section */}
        <h2 className="text-2xl font-semibold text-center text-gray-900 font-[Poppins] mb-6">
          திருப்பலி நேரங்கள்
        </h2>

        <div className="space-y-6 text-gray-800 leading-relaxed text-[17px] font-[Noto Sans Tamil]">
          <div>
            <h3 className="font-semibold text-lg">ஞாயிறு</h3>
            <p>புனித சூசையப்பர் ஆலயம் (பங்கு ஆலயம் R செக்டார்)</p>
            <p>காலை 7.30 மணி</p>
            <p>மாலை 6.15 மணி</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">வார நாட்கள்</h3>
            <p>காலை 6.15 மணி</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">புதன்</h3>
            <p>புனித சூசையப்பர் நவநாள் திருப்பலி மாலை 6.15 மணி</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">ஞாயிறு</h3>
            <p>புனித யூதா ததேயு ஆலயம் (C செக்டார்) காலை 6.15 மணி</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">வியாழன்</h3>
            <p>புனித யூதா ததேயு நவநாள் திருப்பலி மாலை 6.15 மணி</p>
            <p>புனித வனத்து அந்தோணியார் நவநாள் திருப்பலி மாலை 6.30 மணி</p>
            <p>புனித குழந்தை இயேசு நவநாள் திருப்பலி மாலை 6.30 மணி (எழில் நகர்)</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">பங்கு அலுவலக நேரம்</h3>
            <p>காலை: 9.30 - 12.30 மணி</p>
            <p>மாலை: 5.00 - 5.30 மணி</p>
            <p>தொலைபேசி எண்: (0431) 2557348</p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-300"></div>

        {/* English Section */}
        <h2 className="text-2xl font-semibold text-center text-gray-900 font-[Poppins] mb-6">
          Mass Times
        </h2>

        <div className="space-y-6 text-gray-800 leading-relaxed text-[17px] font-[Inter]">
          <div>
            <h3 className="font-semibold text-lg">Sunday</h3>
            <p>Susaiyappar Temple (Parish Church R Sector)</p>
            <p>7.30 am and 6.15 pm</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Days of the Week</h3>
            <p>6.15 am</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Wednesday</h3>
            <p>St. Joseph’s Novena Mass – 6.15 pm</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Sunday</h3>
            <p>St. Jude Thaddeus Church (C Sector) – 6.15 am</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Thursday</h3>
            <p>Novena Mass of St. Jude Thaddeus – 6.15 pm</p>
            <p>St. Antony of the Forest Novena Mass – 6.30 pm</p>
            <p>Holy Child Jesus Novena Mass – 6.30 pm (Ezil Nagar)</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Parish Office Hours</h3>
            <p>Morning: 9.30 – 12.30</p>
            <p>Evening: 5.00 – 5.30</p>
            <p>Phone Number: (0431) 2557348</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MassTimes;

