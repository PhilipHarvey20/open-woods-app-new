import React, { useState } from "react";
import { Dropdown, DropdownButton, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import CountUp from "react-countup";
import { stateOptions } from "./AmericanStates";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import activity_icons_in_a_row from "../images/activity_icons_in_a_row_no_text.png";
// public/images/activity_icons_in_a_row.jpg
import "../pages/HomePage/homepage.css";
import { activityOptions } from "./ActivityOptions";
import "../components/Address_Field/AddressField.css";
import SatelliteMap from "../components/Satelite_Map/Satelite_Map";
import CalcPrice from "../components/F_CalcPrice/CalculatePriceFunction";
// import { onChange } from 'react-native'
// import AddressContext from 'src/components/Address_Field/AddressContext'
// import AddressField from 'src/components/Address_Field/AddressField'
// import AddressField from '../Address_Field/AddressField'
// import AddressField from '../components/Address_Field/AddressField';

const HomePage = () => {
  const [activityOption, setActivityOption] = useState(null);
  const [americanState, setAmericanState] = useState(null);
  const [acreage, setAcreage] = useState(null);
  const [duration, setDuration] = useState(null);
  const [finalPrice, setFinalPrice] = useState(null);
  const [mapData, setMapData] = useState(null);

  // const [activityOption, setActivityOption] = useState({
  //   value: activityOptions[0],
  // })
  // const [americanState, setAmericanState] = useState({ value: stateOptions[0] })
  // const [acreage, setAcreage] = useState(null)
  // const [duration, setDuration] = useState(null)
  // const [finalPrice, setFinalPrice] = useState(null)

  const handleClick = () => {
    CalcThenDisplayPrice();
    setAddress(address);
  };

  const [address, setAddress] = React.useState("");
  function handleAddressChange(value) {
    setAddress(value);
  }

  const fetchMapData = async (address) => {
    return mapData;
  };

  const CalcThenDisplayPrice = async () => {
    console.log("activityOption: ", activityOption);
    console.log("americanState: ", americanState);
    console.log("acreage: ", acreage);
    console.log("duration: ", duration);
    console.log("Address: ", address);
    console.log("button submitted");

    // const calculatedPrice = CalcPrice('Iowa', 25, 1).toFixed(2)
    const calculatedPrice = CalcPrice(
      americanState.value,
      acreage,
      duration
    ).toFixed(2);
    console.log("calculatedPrice: ", calculatedPrice);
    setFinalPrice(calculatedPrice);

    if (address) {
      const mapData = await fetchMapData(address);
      setMapData(mapData);
    }
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
              style={{ height: "50px", width: "700px" }}
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
                    // menuVariant="dark"
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
                    size="lg">
                    <Dropdown.Menu
                      style={{ maxHeight: "200px", overflowY: "scroll" }}>
                      {stateOptions.map((option) => (
                        <Dropdown.Item
                          key={option.value}
                          onClick={() => setAmericanState(option)}
                          className={
                            americanState &&
                            americanState.value === option.value
                              ? "selected-item"
                              : ""
                          }>
                          {option.label}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </DropdownButton>
                </div>
                <div>
                  <Form.Group
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    controlId="exampleForm.ControlInput2">
                    <label className="mt-3 mb-3">Days in Lease</label>
                    <Form.Control
                      className="mt-3 mb-3"
                      style={{ flex: "0 0 40%" }}
                      type="number"
                      size="lg"
                      width={1}
                      placeholder="Enter duration"
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
                      alignItems: "center",
                    }}
                    controlId="exampleForm.ControlInput2">
                    <label className="mt-3 mb-3">Acreage</label>
                    <Form.Control
                      className="mt-3 mb-3"
                      style={{ flex: "0 0 40%" }}
                      type="number"
                      size="lg"
                      placeholder="Enter acreage"
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
                  Calculate Price
                </Button>
              </div>

              {/* type='submit' */}
              {/* className='submit-button'  */}
              {/* size = 'lg' */}
              {/* color='submit'           
                Submit> */}
            </Form>
          </div>
        </div>
        {/* <div className="home-map-container">
         <div className=".mapbox-canvas map">
            <SatelliteMap 
            id="map"
            center={[-95.7129, 37.0902]}
            address={address} />
           </div>
      </div> */}
      </div>
      <div className="output-container">
        <div className="output-box">
          <label>Final Price: </label>
          {"$"}
          <CountUp start={0} end={finalPrice} duration={0.33} color={"green"} />
        </div>
      </div>
    </div>

    //     <>
    //       {/* <MetaTags title="Home" description="Home page" /> */}
    //       <>
    //         <Form onSubmit={onSubmit}>
    //           <div className="col-md-6 d-flex ">
    //             <div className="w-50">
    //               <div className="form-group pl-2 pr-1 dropdown-container">
    //                 <label
    //                   htmlFor="activity"
    //                   className=".form-group label {
    // "
    //                 >
    //                   Choose an activity
    //                 </label>
    //                 <div className="dropdown-button">
    //                   <DropdownButton
    //                     id="activity-dropdown"
    //                     title={
    //                       activityOption ? activityOption.label : 'Make a selection'
    //                     }
    //                     menuVariant="dark"
    //                     size="lg"
    //                   >
    //                     {activityOptions.map((option) => (
    //                       <Dropdown.Item
    //                         key={option.value}
    //                         onClick={() => setActivityOption(option)}
    //                       >
    //                         {option.label}
    //                       </Dropdown.Item>
    //                     ))}
    //                   </DropdownButton>
    //                 </div>
    //               </div>

    //               <div className="form-group pl-2 pr-1 dropdown-container">
    //                 <label htmlFor="state" className="mr-2">
    //                   Choose a state
    //                 </label>
    //                 <div className="dropdown-button">
    //                   <DropdownButton
    //                     id="state-dropdown"
    //                     title={
    //                       americanState ? americanState.label : 'Make a selection'
    //                     }
    //                     size="lg"
    //                   >
    //                     <Dropdown.Menu
    //                       style={{ maxHeight: '200px', overflowY: 'scroll' }}
    //                     >
    //                       {stateOptions.map((option) => (
    //                         <Dropdown.Item
    //                           key={option.value}
    //                           onClick={() => setAmericanState(option)}
    //                           className={
    //                             americanState &&
    //                             americanState.value === option.value
    //                               ? 'selected-item'
    //                               : ''
    //                           }
    //                         >
    //                           {option.label}
    //                         </Dropdown.Item>
    //                       ))}
    //                     </Dropdown.Menu>
    //                   </DropdownButton>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="button-container">
    //             <button className="decrement-button" onClick={decrementAcreage}>
    //               <BsDash />
    //             </button>
    //             <input
    //               className="input-field"
    //               type="number"
    //               id="acreage"
    //               name="acreage"
    //               min="0"
    //               value={acreage}
    //               onChange={(e) => {
    //                 setAcreage(e.target.value)
    //                 // onChange(e.target.value)
    //               }}
    //             />
    //             <button className="increment-button" onClick={incrementAcreage}>
    //               <BsPlus />
    //             </button>
    //           </div>

    //           {/* <div className="form-group col-4 pl-2 pr-1">
    //             <label htmlFor="duration">Duration</label>
    //             <NumberField
    //               className="form-control"
    //               name="duration"
    //               validation={{ required: true, pattern: { value: /^[1-9]\d*$/ } }}
    //               onChange={(e) => setDuration(e.target.value)}
    //             />
    //           </div> */}
    //           <div className="form-group col-4 pl-2 pr-1">
    //             <label htmlFor="address">Address</label>
    //             <AddressField setAddress={setAddress} />
    //           </div>
    //           {/* cut here */}

    //           <div>
    //             <p className="final-price">
    //               $ <CountUp start={0} end={finalPrice} duration={0.33} />{' '}
    //             </p>
    //             <button onClick={handleClick}>Submit</button>
    //             <></>
    //           </div>
    //           <div className="map-container">
    //             <SatelliteMap address={address} />
    //           </div>
    //         </Form>
    //       </>
    //     </>
  );
};

export default HomePage;
