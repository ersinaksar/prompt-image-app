import React, { useState } from "react";
import PromptForm from "./components/PromptForm";
import ImageGrid from "./components/ImageGrid";
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);

  return (
    <div className="App">
      <h1>AI Image Generator</h1>
      <PromptForm setImages={setImages} />
      <ImageGrid images={images} />
    </div>
  );
};

export default App;