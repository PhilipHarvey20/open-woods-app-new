import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import arrowhead_img from "../images/arrowhead_v3.png";
import upload_deer_img_placeholder from "../images/upload_deer_img_placeholder.png";
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
    <div className="as-page-container" style={{ display: "flex" }}>
      <div
        className="as-input-container"
        style={{
          display: "flex",
          height: "75%",
          width: "auto",
          flexDirection: "column",
        }}>
        <div
          className="form-title"
          style={{
            height: "20%",
            flexDirection: "column",
            margin: 0, // outside element
            // padding: "1rem", // inside element
          }}>
          Whitetail Antler Scoring
        </div>
        <div
          className="form-subtitle"
          style={{
            display: "flex",
            flexDirection: "column",
            height: "10%",
            margin: 0, // outside element
            padding: ".5rem", // inside element
          }}>
          Our model estimates a gross B&C/P&Y score
        </div>
        <div
          className="as-deer-image"
          style={{
            JustifyContent: "center",
            alignItems: "center",
            margin: 0, // Remove margin
            padding: 0, // Remove padding
            height: "70%", // Add maxWidth to prevent overflow
            width: "auto", // Add maxHeight to prevent overflow
          }}>
          {uploadedImage ? (
            <img
              src={uploadedImage}
              alt="Uploaded"
              style={{
                JustifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "100%", // Add maxWidth to prevent overflow
                width: "auto", // Add maxHeight to prevent overflow
                padding: ".5rem", // Remove padding
                borderRadius: "30px", // Add border radius
              }}
            />
          ) : (
            <img
              src={upload_deer_img_placeholder}
              alt="Default"
              style={{
                JustifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "100%", // Add maxWidth to prevent overflow
                width: "auto", // Add maxHeight to prevent overflow
                padding: ".5rem", // Remove padding
                borderRadius: "30px", // Add border radius
              }}
            />
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "10%",
          width: "auto",
          justifyContent: "center",
          alignItems: "center",
          padding: ".5rem",
        }}>
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
              backgroundColor: "rgb(99, 128, 99)",
              borderColor: "rgb(99, 128, 99)",
              color: "white",
              marginRight: "1rem",
            }}
            onClick={() => document.getElementById("upload-button").click()}>
            Upload Photo
          </Button>
        </label>
        {uploadedImage && (
          <Button
            variant="primary"
            size="lg"
            className="score-button"
            style={{
              backgroundColor: "rgb(99, 128, 99)",
              borderColor: "rgb(99, 128, 99)",
              color: "white",
            }}
            onClick={() => alert("Scoring Buck...")}>
            Score Buck
          </Button>
        )}
      </div>

      <div
        className="as-output-container"
        style={{
          // display: "flex",
          height: "15%",
          width: "auto",
          flexDirection: "column",
          padding: ".7rem",
        }}>
        <img
          className="arrowhead-img"
          src={arrowhead_img}
          alt="arrowhead img"
          style={{ width: "auto", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default AntlerScoringTool;
