import React from 'react';
import MapComponent from '../components/Map';
import Navbar from '@/components/Navbar';
import Modal from '@/components/Modal';

const Homepage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <MapComponent />
            <Modal />

        </div>
    );
};

export default Homepage;
