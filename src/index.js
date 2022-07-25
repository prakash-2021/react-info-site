import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Header } from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

// const navbar = (
//   <nav>
//       <h1>Bob's Bistro</h1>
//       <ul>
//           <li>Menu</li>
//           <li>About</li>
//           <li>Contact</li>
//       </ul>
//   </nav>
// )

//simple static page challange

// const page = (
//   <>
//   <img src="./logo192.png" />
//   <h1>Fun facts about react</h1>
//   <ul>
//     <li>Was first released in 2013</li>
//     <li>Was orirginally created byy Jordan Walke</li>
//     <li>Has well over 100k stars on Github</li>
//     <li>Is maintained by Facebook</li>
//     <li>Powers thousands of enterprise apps, including mobile apps</li>
//   </ul>
//   </>
// )

//custom component


const app = ReactDOM.createRoot(document.getElementById("root"));

app.render(
  <>
    <Header />
    <MainContent />
    <Footer />
  </>
);
