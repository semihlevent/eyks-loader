import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';


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

const Container = styled.div`
    position: relative;
    font-size: ${props => `${props.size}px`};
    background-color: white;
    border-radius: 50%;
    mix-blend-mode: multiply;
    width: 20em;
    height: 20em;
`;

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(-360deg);
    }
`;
//parameterize animation delay
const EyksArrow = styled.div`
    & {
        height: 100%;
        width: 100%;
        border-radius: 50%;
        position: relative;
        animation: ${spin} linear infinite;
        animation-duration: ${props => props.animationDuration};
        animation-delay: ${props => `${props.spinDelay}ms`};
        background-color: ${props => props.color};
    }
    &::after {
        position: absolute;
        content: "";

        top: 1.75em;
        bottom: 1.75em;
        right: 1.75em;
        left: 1.75em;

        background-color: white;
        border-radius: 50%;
    }
`;

const TriangleUp = styled.div`
    position: absolute;
    width: 0;
    height: 0;
    z-index: 1;
    border-bottom: 3.5em solid;
    border-left: 2em solid transparent;
    border-right: 2em solid transparent;

    top: 50%;
    transform: translateY(-50%);
    right: 0;
    margin-right: -0.95em;
    border-bottom-color: ${props => props.color};
`;

const TriangleUpWhite = styled.div`
    position: absolute;
    width: 0;
    height: 0;
    border-bottom: 3.5em solid white;
    border-left: 2em solid transparent;
    border-right: 2em solid transparent;

    top: 50%;
    transform: translateY(calc(-50% - 1em));
    right: 0;
    margin-right: -0.95em;
`;

const TriangleDown = styled.div`
    position: absolute;
    width: 0;
    height: 0;
    z-index: 1;
    border-top: 3.5em solid;
    border-left: 2em solid transparent;
    border-right: 2em solid transparent;

    top: 50%;
    transform: translateY(-50%);
    left: 0;
    margin-left: -0.95em;
    border-top-color: ${props => props.color};
`;

const TriangleDownWhite = styled.div`
    position: absolute;
    width: 0;
    height: 0;
    border-top: 3.5em solid white;
    border-left: 2em solid transparent;
    border-right: 2em solid transparent;

    top: 50%;
    transform: translateY(calc(-50% + 1em));
    left: 0;
    margin-left: -0.95em;
`;



const EyksLoader = ({ size=8, color="rgba(154, 27, 21, 255)", spinDelay=0, glowingColor="rgb(190, 4, 4)",
                        speed=1.5, statusBar, done, ...otherProps }) => {
    return (
        <Container size={size} {...otherProps} >
            <EyksArrow  animationDuration={convertSpeedToMs(speed)} color={color} spinDelay={spinDelay}>
                <TriangleUp color={color} />
                <TriangleUpWhite />
                <TriangleDown color={color} />
                <TriangleDownWhite />
            </EyksArrow>
            <StatusBar 
                statusBar={statusBar} 
                done={done} 
                color={color} 
                glowingColor={glowingColor} 
            />
        </Container>
    );
}

const StatusBarContainer = styled.div`
&{
    height: 0.3em;
	
	border-radius: 0.3em;
    border-color: ${props => props.color};
	position: absolute;
	top: 50%;
	left: 17%;
	right: 17%;
	transform: translateY(-50%);
}
    
&::after{
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: -1;
}

`;

const glow = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const StatusBarStyled = styled.div`
    & {
        position: relative;
        height: 100%;
        border-radius: 0.3em;
        transition: width 300ms linear;
        width: ${props => `${props.progress}%`};
        background-color: ${props => props.color};
    }
    &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        box-shadow: 0px 0px 0.8em 0.07em;
        animation: ${glow} 1000ms linear 300ms infinite alternate;
        background-color: ${props => props.glowingColor};
        color: ${props => props.glowingColor};
    }
`;

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
        <StatusBarContainer color={color}>
            <StatusBarStyled 
                progress={progress} 
                color={color}
                glowingColor={glowingColor}
            />
        </StatusBarContainer>
    );
}

export default EyksLoader;