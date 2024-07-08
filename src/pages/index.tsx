import React from 'react';
import MapComponent from '../components/map';
import Navbar from '@/components/navbar';
import Modal from '@/components/modal';

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
