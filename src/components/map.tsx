
import React, { useRef, useEffect, useState } from 'react';
import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";
import L, { Map, Icon } from "leaflet"; // Import Map and Icon from Leaflet
import "leaflet/dist/leaflet.css";
import ReactDOM from 'react-dom';
import Modal from './LaptopModal';

const mapWrap = {
    position: 'relative',
    width: '100%',
    height: '60vh'
};

const mapStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%'
};

const MapComponent: React.FC = () => {
    const mapContainer = useRef<HTMLElement | null>(null);
    const mapInstance = useRef<Map | null>(null);
    const center = { lng: -71.096, lat: 42.3706 };
    const [zoom] = useState<number>(18);

    useEffect(() => {
        if (!mapContainer.current || mapInstance.current) return;

        mapInstance.current = L.map(mapContainer.current, {
            center: [center.lat, center.lng],
            zoom: zoom
        });

        new MaptilerLayer({
            apiKey: process.env.NEXT_PUBLIC_API_KEY as string,
        }).addTo(mapInstance.current);

        const PrinterIcon = new Icon({
            iconUrl: 'icons8-printer-48.png',
            iconSize: [40, 40],
            iconAnchor: [20, 40],
            popupAnchor: [0, -40]
        });

        const openModel = (e: any) => {
            // const popup = L.popup();
            // popup.setLatLng(e.latlng).setContent('<div id="popupContainer"></div>').openOn(mapInstance.current!);
            // ReactDOM.render(<Modal />, document.getElementById('popupContainer'));
            console.log("Finished handling click")
        }

        L.marker([center.lat, center.lng], { icon: PrinterIcon })
            .addTo(mapInstance.current)
            .on('click', openModel);

    }, [center.lng, center.lat, zoom]);

    return (
        <div style={mapWrap}>
            <div ref={mapContainer} style={mapStyle} />
        </div>
    );
};

export default MapComponent;
