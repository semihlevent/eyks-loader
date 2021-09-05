import React, { useState, useEffect } from 'react';

import './style.css';

/**
 * A number between 0 - 10. 10 is fastest.
 * @param {Number} speed 
 */
const convertSpeedToMs = speed => {
    if (isNaN(speed)) throw new Error("Speed value must be a number between 1 - 10.");
    if (speed > 10) speed = 10;
    if (speed < 0) speed = 0;
    if (speed === 0) return undefined;
    // X = V x t 
    // X = 10000, V = speed, t = duration in ms
    return `${10000 / speed}ms`;
}


const EyksLoader = ({ size=8, color="rgba(154, 27, 21, 255)", glowingColor="rgb(190, 4, 4)",
                        speed=1.5, statusBar, done }) => {
    const fontSize = `${size}px`;
    const animationDuration = convertSpeedToMs(speed);
    const backgroundColor = color;
    return (
        <div className="eyks-loader" style={{ fontSize }} >
            <div className="eyks-arrow" style={{ animationDuration, backgroundColor }} >
                <div className="tri-up" style={{ borderBottomColor: backgroundColor }}></div>
                <div className="tri-up-white"></div>
                <div className="tri-down" style={{ borderTopColor: backgroundColor }}></div>
                <div className="tri-down-white"></div>
            </div>
            <StatusBar 
                statusBar={statusBar} 
                done={done} 
                color={color} 
                glowingColor={glowingColor} 
            />
        </div>
    );
}

const StatusBar = ({ statusBar, done, color, glowingColor }) => {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (done) {
                setProgress(100);
            } else if (progress < 100) {
                const remaining = 100 - progress;
                const increase = remaining * (0.03 * remaining / 100);
                setProgress(progress + increase);
            }
        }, 300);
        return () => clearInterval(interval);
    }, );

    if (!statusBar) return null;

    const width = `${progress}%`;
    
    return (
        <div className="status-bar-container" style={{borderColor: color }}>
            <div className="status-bar" 
                style={{ width, backgroundColor: color }}
            >
                <div className="status-bar-after" 
                    style={{ backgroundColor: glowingColor, color: glowingColor }}
                />
            </div>
        </div>
    );
}

export default EyksLoader;