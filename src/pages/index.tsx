import React from 'react';
import MapComponent from '../components/map';
import Navbar from '@/components/navbar';

const Homepage: React.FC = () => {
    return (
        <div>
            <Navbar />
            <MapComponent />
        </div>
    );
};

export default Homepage;
