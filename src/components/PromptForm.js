import React, { useState } from "react";
import fetchImages from './FetchImages';  // Import the API call function
// import axios from "axios";

const PromptForm = ({ setImages }) => {
    // Pre-defined prompts
    const preDefinedPrompts = [
        "futuristic",
        "sketch draw step by step",
        "majestic",
        "cute",
        "jungle",
        "ocean",
        // "A futuristic cityscape",
        // "A majestic mountain range",
        // "A cute cat wearing sunglasses",
        // "An astronaut in a jungle",
        // "A sunset over the ocean",
    ];
    // States for user-entered prompts and selected predefined prompt
    const [customPrompt, setCustomPrompt] = useState(""); // State For the user-entered prompt
    const [selectedPrompt, setSelectedPrompt] = useState(""); // State  For the predefined prompt
    // const [query, setQuery] = useState("");
    // const [prompt, setPrompt] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // -------------------For user-entered prompts and pre-defined prompts-------------------
    // Handle form submission
    const handleSearch = async (e) => {
        e.preventDefault();
        setError(null); // Reset errors

        // // Determine which prompt to use
        // const promptToUse = customPrompt.trim() || selectedPrompt;
        // Mix custom prompt and predefined prompt
        const promptToUse = `${customPrompt.trim()} ${selectedPrompt}`.trim();

        if (!promptToUse) {
            setError("Please enter a custom prompt, select a predefined prompt, or mix both.");
            return;
          }
      

        try {
            setLoading(true);
            const images = await fetchImages(promptToUse); // Fetch images for the selected/entered prompt
            setImages(images.map((img) => img.src)); // Pass the image URLs to the parent
        } catch (err) {
            console.error("Error fetching images:", err);
            setError("Failed to fetch images. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSearch}>
            <h2>Please Enter a custom prompt, select a predefined prompt, or Mix both.</h2>

            {/* User-entered prompt */}
            <input
                type="text"
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="Type your custom prompt"
                className="prompt-input"
            />

            {/* Dropdown for predefined prompts */}
            <select
                value={selectedPrompt}
                onChange={(e) => setSelectedPrompt(e.target.value)}
                className="prompt-select"
            >
                <option value="">-- Choose a predefined prompt --</option>
                {preDefinedPrompts.map((prompt, index) => (
                    <option key={index} value={prompt}>
                        {prompt}
                    </option>
                ))}
            </select>

            <button type="submit" disabled={loading} className="generate-button">
                {loading ? "Generating..." : "Generate"}
            </button>

            {error && <p className="error-message">{error}</p>}
        </form>
    );
    //-------------------For pre-defined prompts-------------------
    // Here is controlled and working code for pre-defined prompts
    // const handleSearch = async () => {
    //     setError(null); // Reset any previous errors

    //     if (!selectedPrompt) {
    //         setError("Please select a prompt.");
    //         return;
    //     }

    //     try {
    //         setLoading(true);
    //         const images = await fetchImages(selectedPrompt); // Fetch images for the selected prompt
    //         setImages(images.map((img) => img.src)); // Pass the image URLs to the parent
    //     } catch (err) {
    //         console.error("Error fetching images:", err);
    //         setError("Failed to fetch images. Please try again.");
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // return (
    //     <div>
    //         <h2>Select a Prompt</h2>
    //         <select
    //             value={selectedPrompt}
    //             onChange={(e) => setSelectedPrompt(e.target.value)}
    //             className="prompt-select"
    //         >
    //             <option value="">-- Choose a prompt --</option>
    //             {preDefinedPrompts.map((prompt, index) => (
    //                 <option key={index} value={prompt}>
    //                     {prompt}
    //                 </option>
    //             ))}
    //         </select>
    //         <button
    //             onClick={handleSearch}
    //             disabled={loading}
    //             className="generate-button"
    //         >
    //             {loading ? "Loading..." : "Generate"}
    //         </button>
    //         {error && <p className="error-message">{error}</p>}
    //     </div>
    // );


    //-------------------For fetching images from Lexica  -------------------
    // Here is controled and working code for fetching images from Lexica
    // const handleSearch = async (e) => {
    //     e.preventDefault();
    //     setError(null); // Reset any previous errors

    //     try {
    //         setLoading(true);
    //         const images = await fetchImages(query); // Use fetchImages with query
    //         setImages(images.map((img) => img.src)); // Extract image URLs for display
    //     } catch (err) {
    //         console.error("Error fetching images:", err);
    //         setError("Failed to fetch images. Please try again.");
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // return (
    //     <form onSubmit={handleSearch}>
    //         <input
    //             type="text"
    //             value={query}
    //             onChange={(e) => setQuery(e.target.value)} // Update query state
    //             placeholder="Search for images"
    //             required
    //         />
    //         <button type="submit" disabled={loading}>
    //             {loading ? "Searching..." : "Search"}
    //         </button>
    //         {error && <p>{error}</p>}
    //     </form>
    // );
    //-------------------For fetching images from Lexica  ------------------- 
    //Here is not controled code for fetching images from Lexica
    //For produce ai created images
    //   const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setError(null); // Reset errors
    //     if (!prompt.trim()) return;

    //     try {
    //       setLoading(true);
    //       const response = await axios.post(
    //         "https://api.openai.com/v1/images/generations",
    //         {
    //           prompt,
    //           n: 5, // Number of images
    //           size: "256x256", // Image dimensions
    //         },
    //         {
    //           headers: {
    //             Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
    //           },
    //         }
    //       );

    //       setImages(response.data.data.map((img) => img.url));
    //     } catch (err) {
    //       console.error("Error generating images:", err);
    //       setError("Failed to generate images. Please try again.");
    //     } finally {
    //       setLoading(false);
    //     }
    //   };

    //   return (
    //     <form onSubmit={handleSubmit} className="prompt-form">
    //       <input
    //         type="text"
    //         value={prompt}
    //         onChange={(e) => setPrompt(e.target.value)}
    //         placeholder="Enter your prompt"
    //         className="prompt-input"
    //         required
    //       />
    //       <button type="submit" className="generate-button" disabled={loading}>
    //         {loading ? "Generating..." : "Generate"}
    //       </button>
    //       {error && <p className="error-message">{error}</p>}
    //     </form>
    //   );
};

export default PromptForm;