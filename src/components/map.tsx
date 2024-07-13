import React, { useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';

const MapComponent = () => {
    const [mapLoaded, setMapLoaded] = useState(false);
    const [map, setMap] = useState<maptilersdk.Map | null>(null); // State to hold the map instance
    const [watchId, setWatchId] = useState(Number);

    maptilersdk.config.apiKey = process.env.NEXT_PUBLIC_API_KEY as string;

    useEffect(() => {
        // Function to initialize the map
        const initializeMap = (latitude: number, longitude: number) => {
            const newMap = new maptilersdk.Map({
                container: 'map',
                center: [longitude, latitude],
                zoom: 18,
                style: maptilersdk.MapStyle.STREETS,
                hash: true,
            });

            // Add a marker
            const marker = new maptilersdk.Marker({
                draggable: false
            })
                .setLngLat([longitude, latitude])
                .addTo(newMap);

            // newMap.on('load', function () {
            //     newMap.addSource('printer', {
            //         type: 'geojson',
            //         data: 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ports.geojson'
            //     })

            //     newMap.loadImage('icons8-printer-48.png', function (err, image: any) {
            //         if (err) throw err;
            //         newMap.addImage('printer', image);
            //     })

            //     newMap.addLayer({
            //         'id': 'printer',
            //         'type': 'symbol',
            //         'source': 'printer',
            //         'layout': {
            //             'icon-image': 'printer',
            //             'icon-size': ['*', ['get', 'scalerank'], 0.01]
            //         },
            //         'paint': {}
            //     });
            // })

            setMap(newMap); // Set the map instance to state
            setMapLoaded(true); // Mark map as loaded
        };

        // Function to handle successful geolocation
        const success = (pos: any) => {
            const { latitude, longitude } = pos.coords;
            // const longitude = -69.92355713
            // const latitude = 12.4375

            if (!mapLoaded) {
                initializeMap(latitude, longitude);
            } else {
                if (map) {
                    map.setCenter([latitude, longitude], 18);
                }
            }
        };

        // Function to handle errors in geolocation
        const error = (err: any) => {
            console.error('Error retrieving geolocation:', err);
        };

        // Start watching geolocation on component mount
        if (!watchId) {
            const id = navigator.geolocation.watchPosition(success, error);
            setWatchId(id); // Set watchId to state
        }

        // Clean up the watcher on component unmount
        return () => {
            if (watchId) {
                navigator.geolocation.clearWatch(watchId);
                setWatchId(-1);
            }
        };
    }, []);

    return <div id="map" style={{ height: '500px' }}>
    </div>;
};

export default MapComponent;
