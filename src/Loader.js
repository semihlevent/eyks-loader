import React, { useState, useEffect } from 'react';


const Loader = () => {

    const [progress, setProgress] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            if (progress < 100) {
                const remaining = 100 - progress;
                const increase = remaining * (0.05 * remaining / 100);
                setProgress(progress + increase);
            }
        }, 500);
        return () => clearInterval(interval);
    }, );

    const width = `${progress}%`;
    return (
        <div className="loader-container">
            <div className="eyks-loader">
                <div className="eyks-arrow">
                    <div className="tri-up"></div>
                    <div className="tri-up-white"></div>
                    <div className="tri-down"></div>
                    <div className="tri-down-white"></div>
                </div>
                <div className="status-bar-container">
                    <div className="status-bar" 
                        style={{ width }}
                    >

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loader;