import Snowfall from 'react-snowfall';
import React from "react";

const SnowComponent = ({ snow }) => {
    if (!snow) return null;

    return (
        <Snowfall
            snowflakeCount={100}
            color="#CFCFCF"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
            }}
        />
    );
};

export default SnowComponent;
