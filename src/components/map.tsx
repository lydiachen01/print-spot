import React, { useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
    const [mapLoaded, setMapLoaded] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined' && !mapLoaded) {
            maptilersdk.config.apiKey as string = process.env.NEXT_PUBLIC_API_KEY;

            const map = new maptilersdk.Map({
                container: 'map',
                center: [-71.119026, 42.407482],
                zoom: 16,
                style: maptilersdk.MapStyle.STREETS,
                hash: true,
            });

            // Add a marker
            const marker = new maptilersdk.Marker({
                color: "#FFFFFF",
                draggable: false
            }).setLngLat([-71.119026, 42.407482]).addTo(map);
            setMapLoaded(true);
        }
    }, []);

    return <div id="map" style={{ height: '600px' }}></div>;
};

export default MapComponent;
