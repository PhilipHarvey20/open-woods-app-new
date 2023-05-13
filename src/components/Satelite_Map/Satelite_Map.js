import React, { useState, useEffect } from 'react'

import MapboxDraw from '@mapbox/mapbox-gl-draw'
import MapboxGeocoding from '@mapbox/mapbox-sdk/services/geocoding'
import * as turf from '@turf/turf'
import ReactMapboxGl, { Marker } from 'react-mapbox-gl'

import mapboxgl from '!mapbox-gl'
import './SatelliteMap.css'

function SatelliteMap({ address }) {
  const [lngLat, setLngLat] = useState([-86.85288, 33.329108])

  useEffect(() => {
    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true,
      },
      defaultMode: 'draw_polygon',
    })

    const updateArea = (e) => {
      const data = draw.getAll()
      const answer = document.getElementById('calculated-area')
      if (data.features.length > 0) {
        const area = turf.area(data)
        const rounded_area = Math.round(area * 100) / 100
        answer.innerHTML = `<p><strong>${rounded_area}</strong></p><p>square meters</p>`
      } else {
        answer.innerHTML = ''
        if (e.type !== 'draw.delete') alert('Click the map to draw a polygon.')
      }
    }

    const map = new mapboxgl.Map({
      accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
      container: 'map',
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: lngLat,
      zoom: 16,
    })

    map.addControl(draw)
    map.on('draw.create', updateArea)
    map.on('draw.delete', updateArea)
    map.on('draw.update', updateArea)

    return () => {
      map.remove()
    }
  }, [lngLat])

  useEffect(() => {
    const geocoder = new MapboxGeocoding({
      accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
    })

    const fetchCoordinates = async () => {
      const response = await geocoder
        .forwardGeocode({
          query: address,
          limit: 1,
        })
        .send()

      const coordinates = response.body.features[0].center
      setLngLat(coordinates)
    }

    if (address) {
      fetchCoordinates()
    }
  }, [address])

  return (
    <div className="map-container">
      <div id="map" className="map" />
      <div id="calculated-area" />
    </div>
  )
}

export default SatelliteMap