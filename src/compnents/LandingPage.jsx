import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

function LandingPage() {
    const [randomImage, setRandomImage] = useState('https://images.unsplash.com/photo-1600700468406-44b3f7cf8234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8c2hvcHBpbmd8fHx8fHwxNzA0ODAwOTA2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080');

   
  
    
    return (
      <div className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${randomImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-white z-10 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Welcome to Your Shopping Site</h1>
          <p className="text-lg mb-8">Discover amazing products and shop with confidence.</p>
      <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600">   <Link to='/products'> Shop Now</Link></button>
        </div>
      </div>
    );
}


export default LandingPage
