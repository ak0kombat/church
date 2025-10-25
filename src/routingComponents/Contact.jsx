import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-blue-50 p-4">
      
        <form className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-6 md:mr-8 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-green mb-4 text-center">Contact Us</h2>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
            <input
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green"
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
            <input
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green"
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="mobile">Mobile Number</label>
            <input
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green"
          type="tel"
          id="mobile"
          name="mobile"
          placeholder="Your Mobile Number"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="message">Message</label>
            <textarea
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green"
          id="message"
          name="message"
          rows="4"
          placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green text-white py-2 rounded hover:bg-green-900 transition"
          >
            Send Message
          </button>
        </form>
        {/* Contact Info */}
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4">
        <h3 className="text-xl font-semibold text-green mb-2">Get in Touch</h3>
        <div>
          <span className="font-semibold text-gray-700">Address:</span>
          <div className="text-gray-600">
            St.Joseph the Worker Church<br />
            Kailasapuram Division, Diocese of Trichy<br />
            India - 620014
          </div>
        </div>
        <div>
          <span className="font-semibold text-gray-700">Phone:</span>
          <div className="text-gray-600">0431-2557348</div>
        </div>
               
        <div>
          <span className="font-semibold text-gray-700">Office Hours:</span>
          <ul className="text-gray-600 list-disc list-inside">
            <li>Morning: 9:30 AM - 12:30 PM</li>
            <li>Evening: 5:00 PM - 5:30 PM</li>
            
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default Contact
