import React from 'react';

const Service = ({ service }) => {
    const { name, price, time, description, img } = service;
    return (
        <div>
            <h2>This is a service</h2>
            <h2>{name}</h2>
        </div>
    );
};

export default Service;