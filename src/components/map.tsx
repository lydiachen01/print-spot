import React, { useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
    const [mapLoaded, setMapLoaded] = useState(false);

    useEffect(() => {
        let map = null;

        const successCallback = (pos: any) => {
            const { latitude, longitude } = pos.coords;

            // Initialize the map only once
            if (!mapLoaded) {
                maptilersdk.config.apiKey = process.env.NEXT_PUBLIC_API_KEY as string;

                map = new maptilersdk.Map({
                    container: 'map',
                    center: [latitude, longitude],
                    zoom: 18,
                    style: maptilersdk.MapStyle.STREETS,
                    hash: true,
                });

                // Add a marker
                const marker = new maptilersdk.Marker({
                    color: "#e3e3e3",
                    draggable: false
                }).setLngLat([longitude, latitude]).addTo(map);

                setMapLoaded(true);
            }
        };

        const errorCallback = (err: any) => {
            console.error('Error retrieving geolocation:', err);
            // Handle error if needed
        };

        // Start watching geolocation
        const watchId = navigator.geolocation.watchPosition(successCallback, errorCallback);

        // Clean up the watcher when component unmounts
        return () => {
            navigator.geolocation.clearWatch(watchId);
        };
    }, [mapLoaded]);

    return <div id="map" style={{ height: '600px' }}></div>;
};

export default MapComponent;
