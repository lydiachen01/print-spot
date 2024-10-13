import React from 'react';

const FormattedDate: React.FC = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return <span>{formattedDate}</span>;
};

export default FormattedDate;