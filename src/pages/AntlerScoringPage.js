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
    <div
      className="as-page-container"
      style={{ display: "flex", height: "100vh" }}>
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
            display: "flex",
            flexDirection: "column",
            margin: 0, // outside element
            padding: "2rem", // inside element
          }}>
          Whitetail Antler Scoring
        </div>
        <div
          className="form-subtitle"
          style={{
            display: "flex",
            flexDirection: "column",
            margin: 0, // outside element
            padding: ".5rem", // inside element
          }}>
          Our model estimates a gross B&C/P&Y score
        </div>
        <div
          className="as-deer-image"
          style={{
            display: "flex",
            flexDirection: "column",
            margin: 0, // Remove margin
            padding: 0, // Remove padding
            height: "80%", // Adjust height
            width: "auto", // Adjust width
          }}>
          {uploadedImage ? (
            <img
              src={uploadedImage}
              alt="Uploaded"
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain", // Ensure the image fits within the container
              }}
            />
          ) : (
            <img
              src={upload_deer_img_placeholder}
              alt="Default"
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain", // Ensure the image fits within the container
              }}
            />
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 3,
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
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
                margin: "0 auto", // 0 centers button horizontally, auto adjusts margins automatically
                backgroundColor: "rgb(99, 128, 99)",
                borderColor: "rgb(99, 128, 99)",
                color: "white",
              }}
              onClick={() => document.getElementById("upload-button").click()}>
              Upload Photo
            </Button>
          </label>
        </div>
      </div>
      <div
        className="as-output-container"
        style={{
          display: "flex",
          height: "25%",
          width: "auto",
          flexDirection: "column",
        }}>
        <img
          className="arrowhead-img"
          src={arrowhead_img}
          alt="arrowhead img"
          style={{ width: "auto", height: "20%" }}
        />
      </div>
    </div>
  );
};

export default AntlerScoringTool;
