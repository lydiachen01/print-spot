import React from 'react';
import MapComponent from '../components/map';

const Homepage: React.FC = () => {
    return (
        <div className='bg-slate-500'>
            <div className='text-white text-center text-lg p-5'>Printer Map</div>
            <MapComponent />
            <div className='h-52'></div>
        </div>
    );
};

export default Homepage;
