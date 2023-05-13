import React, { useState } from 'react'

import mapboxSdk from '@mapbox/mapbox-sdk'
import MapboxGeocoding from '@mapbox/mapbox-sdk/services/geocoding'
import './AddressField.css'

const geocodingClient = MapboxGeocoding({
  accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
})

function AddressField({ setAddress }) {
  const [inputValue, setInputValue] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [activeOptionIndex, setActiveOptionIndex] = useState(-1)

  async function handleInputChange(event) {
    const input = event.target.value
    setInputValue(input)

    const response = await geocodingClient
      .forwardGeocode({
        query: input,
        limit: 5,
      })
      .send()

    setSuggestions(response.body.features)
    setActiveOptionIndex(-1)
  }

  function handleSuggestionClick(selectedSuggestion) {
    setAddress(selectedSuggestion.place_name)
    setInputValue(selectedSuggestion.place_name)
    setSuggestions([])
    setActiveOptionIndex(-1)
  }

  function handleOptionKeyDown(event, index) {
    if (event.key === 'Enter') {
      setInputValue(suggestions[index].place_name)
      setSuggestions([])
      setActiveOptionIndex(-1)
    } else if (event.key === 'ArrowUp' && activeOptionIndex > 0) {
      setActiveOptionIndex(activeOptionIndex - 1)
    } else if (
      event.key === 'ArrowDown' &&
      activeOptionIndex < suggestions.length - 1
    ) {
      setActiveOptionIndex(activeOptionIndex + 1)
    }
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter an address"
        autoComplete="off"
      />
      {suggestions.length > 0 && (
        <ul role="listbox">
          {suggestions.map((suggestion, index) => (
            <li
              key={suggestion.id}
              role="option"
              aria-selected={activeOptionIndex === index}
              id={`option-${index}`}
              tabIndex="0"
              onClick={() => handleSuggestionClick(suggestion)}
              onKeyDown={(event) => handleOptionKeyDown(event, index)}
            >
              {suggestion.place_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default AddressField