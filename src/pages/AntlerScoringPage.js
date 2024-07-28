import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import arrowhead_img from "../images/arrowhead_v3.png";
import "./antler-scoring-page.css";

const AntlerScoringTool = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="home-container">
      <div className="as-input-container" style={{ height: "80%" }}>
        <div className="home-form-container">
          <div className="form-title">Whitetail Antler Scoring</div>
          <div className="form-subtitle">
            Our model estimates a gross B&C/P&Y score
          </div>
          <div className="home-form">
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              id="upload-button"
              onChange={handleImageUpload}
            />
            <label htmlFor="upload-button">
              <Button
                variant="secondary"
                size="lg"
                className="upload-button"
                style={{
                  display: "block",
                  margin: "0 auto",
                  backgroundColor: "rgb(99, 128, 99)",
                  borderColor: "rgb(99, 128, 99)",
                  color: "white",
                }}>
                Upload Photo
              </Button>
            </label>
          </div>
        </div>
      </div>
      <div className="as-output-container" style={{ height: "20%" }}>
        <img
          className="arrowhead-img"
          src={arrowhead_img}
          alt="arrowhead img"
          style={{ width: "16%", height: "auto" }} // Adjust as needed
        />
      </div>
    </div>
  );
};

export default AntlerScoringTool;
