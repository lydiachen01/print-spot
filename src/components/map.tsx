import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
    const [mapLoaded, setMapLoaded] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined' && !mapLoaded) {
            import('leaflet').then(L => {
                const { latLng, tileLayer } = L;

                /* Initialize map */
                const options = {
                    center: latLng(42.407482, -71.119026),
                    zoom: 17,
                };

                const mymap = L.map('map', options);

                /* Load tile layer */
                const key = process.env.NEXT_PUBLIC_API_KEY; // Access environment variable
                tileLayer(`https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${key}`, {
                    tileSize: 512,
                    zoomOffset: -1,
                    minZoom: 1,
                    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors',
                    crossOrigin: true
                }).addTo(mymap);

                setMapLoaded(true);
            });
        }
    }, [mapLoaded]);

    return <div id="map" style={{ height: '600px', maxWidth: "800px" }}></div>;
};

export default MapComponent;
