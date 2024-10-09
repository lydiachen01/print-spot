import React from 'react';
import dynamic from 'next/dynamic';
// import MobileTab from '@/components/MobileTab';
// import MobileDrawer from '@/components/MobileDrawer';
import LaptopModal from '@/components/LaptopModal';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const MapComponent = dynamic(() => import('@/components/Map'), {
    ssr: false // Ensure Leaflet components are not rendered on the server
});


const Homepage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <MapComponent />
            <LaptopModal />
            {/* <MobileDrawer /> */}
            {/* <Modal /> */}
            <Footer />
        </div>
    );
};

export default Homepage;
