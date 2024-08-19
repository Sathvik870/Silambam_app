import React, { useEffect } from 'react';
import './LocationNavigation.css';

const LocationNavigation = () => {
  const destination = 'Mullai martial arts sports academy, Bhuvana diamond apartment, near Chandrakandji public school, Cheran Ma Nagar, Coimbatore, Tamil Nadu 641035';

  useEffect(() => {
    // Initialize the map after the component mounts
    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 11.0168, lng: 76.9558 }, // Coimbatore coordinates
        zoom: 15,
      });

      new window.google.maps.Geocoder().geocode({ address: destination }, (results, status) => {
        if (status === 'OK') {
          const { location } = results[0].geometry;
          new window.google.maps.Marker({
            map,
            position: location,
            title: 'Destination',
          });
          map.setCenter(location);
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    };

    // Ensure the Google Maps script is loaded
    if (window.google && window.google.maps) {
      initMap();
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=4776-4775-7713`;
      script.async = true;
      script.onload = initMap;
      document.head.appendChild(script);
    }
  }, [destination]);

  const handleNavigate = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${encodeURIComponent(destination)}`;
        window.open(googleMapsUrl, '_blank');
      }, (error) => {
        alert('Unable to retrieve your location. Please enable location services.');
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div className="location-navigation-page">
      <h2>Location Navigation</h2>
      <div id="map" className="map-container"></div>
      <div className="navigation-frame">
        <button className="navigate-button" onClick={handleNavigate}>
          Get Directions
        </button>
      </div>
    </div>
  );
};

export default LocationNavigation;
