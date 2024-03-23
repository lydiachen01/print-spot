import React from 'react';
import MapComponent from '../components/map';

const Homepage: React.FC = () => {
    return (
        <div>
            <h1 className='bg-slate-500 text-white center'>Printer Map</h1>
            <MapComponent />
        </div>
    );
};

export default Homepage;
