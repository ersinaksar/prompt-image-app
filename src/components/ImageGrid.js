import React from "react";

const ImageGrid = ({ images }) => {
    return (
        <div className="image-grid">
            {images.length > 0 ? (
                images.map((url, index) => (
                    // -----------For Lexica images-------
                    // Here is controlled and working code for fetching images from Lexica
                    // <img key={index} src={url} alt={`Lexica Image ${index}`} className="image-item" />
                    // --------Forgenerate image------  
                    // Here is not controlled code for generating images
                      <img key={index} src={url} alt={`Generated ${index}`} className="image-item" />
                ))
            ) : (
                //----For Lexican Images------
                // Here is controlled and working code for fetching images from Lexica
                // <p>No images found. Try a different query!</p>
                //---- For generate image   ------
                // Here is not controlled code for generating images
                <p>No images to display. Enter or Select a prompt to generate!</p>
            )}
        </div>
    );
};

export default ImageGrid;