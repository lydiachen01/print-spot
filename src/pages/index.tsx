import React from 'react';
// import MapComponent from '../components/map';
import Navbar from '@/components/navbar';
import Modal from '@/components/modal';

import dynamic from 'next/dynamic';
import MobileTab from '@/components/MobileTab';
import MobileDrawer from '@/components/MobileDrawer';

const MapComponent = dynamic(() => import('../components/map'), {
    ssr: false // Ensure Leaflet components are not rendered on the server
});


const Homepage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <MapComponent />
            <MobileDrawer />
            {/* <Modal /> */}
        </div>
    );
};

export default Homepage;
