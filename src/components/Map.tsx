
import React, { useRef, useEffect, useState } from 'react';
import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";
import L, { Map, Icon } from "leaflet"; // Import Map and Icon from Leaflet
import "leaflet/dist/leaflet.css";
import { createRoot } from 'react-dom/client';
import Modal from './PopupModal';
// import LaptopModal from './LaptopModal';
import HistoryTab from './HistoryTab';
import { CSSProperties } from 'react';
import AddPrinterBtn from './AddPrinterBtn';

const mapWrap: CSSProperties = {
    position: 'relative',
    margin: 'auto',
    height: '93vh'
};

const mapStyle: CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: '100%'
};

const historyTabStyle: CSSProperties = {
    position: "absolute", 
    top: '20px',       
    right: '30px',    
    zIndex: 1000
}

const printerBtnStyle: CSSProperties = {
    position: "absolute", 
    bottom: '50px',       
    right: '30px',    
    zIndex: 1000
}

const MapComponent: React.FC = () => {
    const mapContainer = useRef<HTMLDivElement | null>(null);
    const mapInstance = useRef<Map | null>(null);
    const center = { lng: -71.096, lat: 42.3706 };
    const [zoom] = useState<number>(18);

    useEffect(() => {
        if (!mapContainer.current || mapInstance.current) return;

        mapInstance.current = L.map(mapContainer.current, {
            center: [center.lat, center.lng],
            zoom: zoom,
            scrollWheelZoom: false
        });

        new MaptilerLayer({
            apiKey: process.env.NEXT_PUBLIC_API_KEY as string,
        }).addTo(mapInstance.current);

        const PrinterIcon = new Icon({
            iconUrl: 'icons8-printer-48.png',
            iconSize: [30, 30],
            iconAnchor: [15, 0],
            popupAnchor: [0, 0]
        });

        const openModel = (e: L.LeafletMouseEvent) => {
            const popup = L.popup();
            popup.setLatLng(e.latlng).setContent('<div id="popupContainer"></div>').openOn(mapInstance.current!);
            const container = document.getElementById('popupContainer');
            if (container) {
                // Stop event propagation to prevent the popup from closing
                container.addEventListener('click', (event) => {
                    event.stopPropagation();
                });

                const root = createRoot(container);
                root.render(<Modal />);
            }
        }

        L.marker([center.lat, center.lng], { icon: PrinterIcon })
            .addTo(mapInstance.current)
            .on('click', openModel);

    }, [center.lng, center.lat, zoom]);

    return (
        <>
            <div style={mapWrap}>
                <label style={historyTabStyle}>
                    <HistoryTab />
                </label>
                <label style={printerBtnStyle}>
                    <AddPrinterBtn />
                </label>
                <div ref={mapContainer} style={mapStyle} />
            </div>
        </>
    );
};

export default MapComponent;
