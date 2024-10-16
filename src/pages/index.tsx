import React from 'react';
import dynamic from 'next/dynamic';
// import MobileTab from '@/components/MobileTab';
// import MobileDrawer from '@/components/MobileDrawer';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

// Ensure Leaflet components are not rendered on the server
const MapComponent = dynamic(() => import('@/components/Map'), {
    ssr: false 
});


const Homepage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <MapComponent />
            <Footer />
        </div>
    );
};

export default Homepage;
