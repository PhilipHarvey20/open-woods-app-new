import React, { useState } from "react";
import { Dropdown, DropdownButton, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import CountUp from "react-countup";
import { stateOptions } from "./AmericanStates";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import activity_icons_in_a_row from "../images/activity_icons_in_a_row_no_text.png";
import arrowhead_img from "../images/arrowhead_v3.png";
import "../pages/HomePage/homepage.css";
import { activityOptions } from "./ActivityOptions";
import "../components/Address_Field/AddressField.css";
import CalcPrice from "../components/F_CalcPrice/CalculatePriceFunction";

const HomePage = () => {
  const [activityOption, setActivityOption] = useState(null);
  const [americanState, setAmericanState] = useState(null);
  const [acreage, setAcreage] = useState(null);
  const [duration, setDuration] = useState(null);
  const [finalPrice, setFinalPrice] = useState(null);
  const [mapData, setMapData] = useState(null);

  const handleClick = () => {
    CalcThenDisplayPrice();
  };

  const CalcThenDisplayPrice = async () => {
    console.log("activityOption: ", activityOption);
    console.log("americanState: ", americanState);
    console.log("acreage: ", acreage);
    console.log("duration: ", duration);
    console.log("button submitted");

    // const calculatedPrice = CalcPrice('Iowa', 25, 1).toFixed(2)
    const calculatedPrice = CalcPrice(
      americanState.value,
      acreage,
      duration
    ).toFixed(2);
    console.log("calculatedPrice: ", calculatedPrice);
    setFinalPrice(calculatedPrice);
  };

  const handleReset = () => {
    // Reset or clear the state values
    setActivityOption(null);
    setAmericanState(null);
    setAcreage("");
    setDuration("");
    setFinalPrice(null);
  };

  return (
    <div className="home-container">
      <div className="home-input-container">
        <div className="home-form-container">
          <div className="form-title">Outdoor Property Lease Calculator</div>
          <div className="form-subtitle">
            {" "}
            A lease price calculator for outdoor recreational land{" "}
          </div>
          <div className="activity_icons">
            <img
              src={activity_icons_in_a_row}
              alt="activity icons"
              style={{ width: "500px", height: "auto" }} // Adjust as needed
            />
          </div>

          <div className="home-form">
            <Form>
              <div className="form-inputs">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                  <label className="mt-3 mb-3">Activity</label>
                  <DropdownButton
                    className="dropdown-button"
                    id="activity-dropdown"
                    title={
                      activityOption ? activityOption.label : "Make a selection"
                    }
                    menuVariant="dark"
                    size="lg"
                    style={{ color: "#778184ff" }}>
                    {activityOptions.map((option) => (
                      <Dropdown.Item
                        key={option.value}
                        onClick={() => setActivityOption(option)}>
                        {option.label}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                  <label className="mt-3 mb-3">State</label>
                  <DropdownButton
                    className="dropdown-button"
                    id="state-dropdown"
                    title={
                      americanState ? americanState.label : "Make a selection"
                    }
                    menuVariant="dark"
                    size="lg">
                    {stateOptions.map((option) => (
                      <Dropdown.Item
                        key={option.value}
                        onClick={() => setAmericanState(option)}>
                        {option.label}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                </div>
                <div>
                  <Form.Group
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    controlId="exampleForm.ControlInput1">
                    <label className="mt-3 mb-3" input-focus>
                      Days in Lease
                    </label>
                    <Form.Control
                      className="mt-3 mb-3 input-focus"
                      style={{
                        flex: "0 0 40%",
                        backgroundColor: "transparent",
                        borderColor: "transparent",
                        fontSize: "1.1em",
                        fontWeight: "600",
                        textAlign: "center",
                      }}
                      type="number"
                      size="lg"
                      backgroundColor="transparent"
                      // width=
                      placeholder="Enter Here"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                    />
                  </Form.Group>
                </div>

                <div>
                  <Form.Group
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      // alignItems: "center",
                    }}
                    controlId="exampleForm.ControlInput2">
                    <label className="mt-3 mb-3">Acreage</label>
                    <Form.Control
                      className="mt-3 mb-3"
                      style={{
                        flex: "0 0 40%",
                        width: "1em",
                        fontFamily: "Open Sans",
                        fontSize: "1.1em",
                        fontWeight: "600",
                        backgroundColor: "transparent",
                        borderColor: "transparent",
                        textAlign: "center",
                      }}
                      type="number"
                      size="lg"
                      placeholder="Enter Here"
                      value={acreage}
                      onChange={(e) => setAcreage(e.target.value)}
                    />
                  </Form.Group>
                </div>
              </div>

              <div className="form-buttons">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={handleReset}
                  className="reset-button">
                  Reset
                </Button>

                <Button
                  type="submit"
                  size="lg"
                  onClick={handleClick}
                  className="submit-button"
                  style={{
                    backgroundColor: "rgb(99, 128, 99)",
                    borderColor: "rgb(99, 128, 99)",

                    color: "white",
                  }}>
                  Calculate Lease Price
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <div className="output-container">
        <div className="output-box">
          <div style={{ position: "relative" }}>
            <img
              className="arrowhead-img"
              src={arrowhead_img}
              alt="arrowhead img"
              style={{ width: "43%", height: "auto" }} // Adjust as needed
            />
            <div
              className="final_price"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white", // Change the color so the text is visible on the image
              }}>
              {"$ "}
              <CountUp start={0} end={finalPrice} duration={0.33} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
