import React, { useState } from 'react'
// import { onChange } from 'react-native'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Dropdown, DropdownButton, Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import CountUp from 'react-countup'
import { BsPlus, BsDash } from 'react-icons/bs'
import { stateOptions } from './AmericanStates'
// import './NewHomePage.css'
import '../pages/HomePage/homepage.css'

import { activityOptions } from './ActivityOptions'
// import AddressContext from 'src/components/Address_Field/AddressContext'
// import AddressField from 'src/components/Address_Field/AddressField'
// import AddressField from '../Address_Field/AddressField'
import AddressField from '../components/Address_Field/AddressField';
import '../components/Address_Field/AddressField.css';



//  ****** MAP ***********
import SatelliteMap from '../components/Satelite_Map/Satelite_Map'

//  ****** MAP ***********
// import 'src/pages/HomePage/HomePage.css'

import CalcPrice from '../components/F_CalcPrice/CalculatePriceFunction'
// src/components/F_CalcPrice

const HomePage = () => {
  // const [create] = useMutation(CREATE_GENERATE_PRICE)
  const [activityOption, setActivityOption] = useState(null)
  const [americanState, setAmericanState] = useState(null)
  const [acreage, setAcreage] = useState(null)
  const [duration, setDuration] = useState(null)
  const [finalPrice, setFinalPrice] = useState(null)
  const [mapData, setMapData] = useState(null)

  const handleClick = () => {
    CalcThenDisplayPrice()
    setAddress(address)
  }

  // *****NEW ADDRESS FILE *****
  const [address, setAddress] = React.useState('')
  function handleAddressChange(value) {
    setAddress(value)
  }
  function handleFormSubmit(event) {
    event.preventDefault()
    console.log(`Address submitted: ${address}`)
    // Do something with the address, such as call an API
  }
  // *****NEW ADDRESS FILE *****

  const onSubmit = (e) => {
    // prevent default submit
    e.preventDefault()
  }
  //  ****** MAP ***********
  // fetch the lng, lat from Mapbox API here
  const fetchMapData = async (address) => {
    return mapData
  }
  //  ****** MAP ***********

  const CalcThenDisplayPrice = async () => {
    // const calculatedPrice = CalcPrice('Iowa', 25, 1).toFixed(2)
    // console log the parameters
    console.log('activityOption: ', activityOption)
    console.log('americanState: ', americanState)
    console.log('acreage: ', acreage)
    console.log('duration: ', duration)
    console.log('Address: ', address)

    const calculatedPrice = CalcPrice(americanState, acreage, duration).toFixed(
      2
    )
    console.log('calculatedPrice: ', calculatedPrice)
    setFinalPrice(calculatedPrice)

    //  ****** MAP ***********
    if (address) {
      const mapData = await fetchMapData(address)
      setMapData(mapData)
    }
    //  ****** MAP ***********
  }

  const incrementAcreage = () => {
    const newValue = parseFloat(acreage) + 1
    setAcreage(newValue.toString())
    // onChange(newValue.toString())
  }

  const decrementAcreage = () => {
    const newValue = parseFloat(acreage) - 1
    if (newValue >= 0) {
      setAcreage(newValue.toString())
      // onChange(newValue.toString())
    }
  }

  return (
    <div className="home-container">
      <div className="home-form-container">
        <div className="home-form">
          <div className="form-title">92.3 acres - Washington, IL</div>
          <div className="form-inputs">
            <div>
              <label className="mx-2">One</label><input type="text" />
            </div>
            <div>
              <label className="mx-2">One</label><input type="text" />
            </div>
            <div>
              <label className="mx-2">One</label><input type="text" />
            </div>
            <div>
              <label className="mx-2">One</label><input type="text" />
            </div>
            <Button>Submit</Button>
          </div>
          <div className="form-output">
            <div>
              <label>Total Price:</label>
              <input className="total-price-input mx-2" type="text" />
            </div>
          </div>
        </div>
      </div>
      <div className="home-map-container">
        <SatelliteMap address={address} />
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
  )
}

export default HomePage