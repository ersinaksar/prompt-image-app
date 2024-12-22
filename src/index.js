import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import ReactGA from "react-ga4";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);// Replace with your Tracking ID from Google Analytics
ReactGA.send("pageview");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);