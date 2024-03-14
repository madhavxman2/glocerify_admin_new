import React, { useRef, useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const OperatingZone = () => {
  const mapContainer = useRef(null);
  const [selectedZone, setSelectedZone] = useState(null);

  useEffect(() => {
    // Initialize the map
    const map = L.map(mapContainer.current).setView([40.7128, -74.0060], 12); // New York City coordinates

    // Add tile layer (you can use any tile provider, this is an example with OpenStreetMap)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Define the boundaries for each zone within the city
    const zoneABoundaries = [[40.7128, -74.0060], [40.715, -74.005], [40.715, -74.004], [40.7128, -74.004]];
    const zoneBBoundaries = [[40.715, -74.0060], [40.718, -74.005], [40.718, -74.004], [40.715, -74.004]];
    const zoneCBoundaries = [[40.7128, -74.004], [40.715, -74.004], [40.715, -74.002], [40.7128, -74.002]];
    const zoneDBoundaries = [[40.715, -74.004], [40.718, -74.004], [40.718, -74.002], [40.715, -74.002]];
    const zoneEBoundaries = [[40.7128, -74.002], [40.715, -74.002], [40.715, -74.0005], [40.7128, -74.0005]];
    const zoneFBoundaries = [[40.715, -74.002], [40.718, -74.002], [40.718, -74.0005], [40.715, -74.0005]];
    const zoneGBoundaries = [[40.7128, -74.0005], [40.715, -74.0005], [40.715, -73.999], [40.7128, -73.999]];
    const zoneHBoundaries = [[40.715, -74.0005], [40.718, -74.0005], [40.718, -73.999], [40.715, -73.999]];

    // Create polygon layers for each zone and add them to the map
    const Driver1 = L.polygon(zoneABoundaries, { color: 'red', fillOpacity: 0.5 }).addTo(map);
    const Driver2 = L.polygon(zoneBBoundaries, { color: 'blue', fillOpacity: 0.5 }).addTo(map);
    const Driver3 = L.polygon(zoneCBoundaries, { color: 'green', fillOpacity: 0.5 }).addTo(map);
    const Driver4 = L.polygon(zoneDBoundaries, { color: 'yellow', fillOpacity: 0.5 }).addTo(map);
    const Driver5 = L.polygon(zoneEBoundaries, { color: 'pink', fillOpacity: 0.5 }).addTo(map);
    const Driver6 = L.polygon(zoneFBoundaries, { color: 'orange', fillOpacity: 0.5 }).addTo(map);
    const Driver7 = L.polygon(zoneGBoundaries, { color: 'purple', fillOpacity: 0.5 }).addTo(map);
    const Driver8 = L.polygon(zoneHBoundaries, { color: 'cyan', fillOpacity: 0.5 }).addTo(map);

    // Define click event handlers for each zone
    Driver1.on('click', () => setSelectedZone("Driver 1"));
    Driver2.on('click', () => setSelectedZone("Driver 2"));
    Driver3.on('click', () => setSelectedZone("Driver 3"));
    Driver4.on('click', () => setSelectedZone("Driver 4"));
    Driver5.on('click', () => setSelectedZone("Driver 5"));
    Driver6.on('click', () => setSelectedZone("Driver 6"));
    Driver7.on('click', () => setSelectedZone("Driver 7"));
    Driver8.on('click', () => setSelectedZone("Driver 8"));

    // Clean up on unmount
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div>
      <div ref={mapContainer} style={{ height: "600px", width: "100%" }} />
      {selectedZone && (
        <div>
          <h1>Selected Zone: {selectedZone}</h1>
        </div>
      )}
    </div>
  );
};

export default OperatingZone;
