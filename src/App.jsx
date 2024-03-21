// import React from "react"
// import Navbar from "./components/Navbar"
// import Body from './components/Body'
// import Footer from './components/Footer'


// function App() {


//   return (

//     <div className="container">
//       <Navbar />
//       <Body />
//       <Footer />

//     </div>

//   )
// }

// export default App

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from "./components/Navbar";
// import Body from './components/Body';
// import Footer from './components/Footer';
// import Results from './components/results'; // Import the Results component

// function App() {
//   return (
//     <Router>
//       <div className="container">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Body />} />
//           <Route path="/results" element={<Results />} /> {/* Define route for results */}
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

// // App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from "./components/Navbar";
// import Footer from './components/Footer';
// import UserInputForm from './components/UserInputForm';
// import Results from './components/results';

// function App() {
//   return (
//     <Router>
//       <div className="container">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<UserInputForm />} />
//           <Route path="/results" element={<Results />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from './components/Home'; 
// import UserInputForm from './components/UserInputForm';
import Results from './components/results';
import Itinerary from './components/itinerary';
import About from "./components/about";
import Contact from './components/contact';
import ThanYou from './components/thankyoupage';

function App() {
  return (
    <Router>
      <div className="container">

        
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<UserInputForm />} /> */}
          <Route path="/results" element={<Results />} />
          <Route path="/itinerary" element={<Itinerary />} /> {/* Now correctly refers to the lowercase filename */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
