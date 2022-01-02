import React from 'react';
import styled, { keyframes, css } from 'styled-components';

//eyks red: #971f20 //rgba(151,31,32,255)
//https://stackoverflow.com/questions/14184494/segments-in-a-circle-using-css3

const World = props => {
    const { size, thickness="1.5em", color="#6c6d6f", spin, spinDuration="50s" } = props;
    const passingProps = { size, thickness, color, spin, spinDuration };
    return (
        <WorldContainer {...passingProps}>
            <WorldVerticalLine {...passingProps} />
            <WorldHorizontalLine {...passingProps} />
            <WorldCircle1 {...passingProps} />
            <WorldCircle2 {...passingProps} />
            <WorldCircle3 {...passingProps} />
            <WorldCircle4 {...passingProps} />
            <WorldCircle5 {...passingProps} />
            <WorldCircle6 {...passingProps} />
            <WorldCircle7 {...passingProps} />
        </WorldContainer>
    );
};

export default World;


const spin = keyframes`
    0% {
        transform: rotateY(0deg);
    }
    100% {
        transform: rotateY(360deg);
    }
`;


const WorldContainer = styled.div`
    position: relative;
	transform-style: preserve-3d;
	width: 20em;
	height: 20em;
	font-size: ${props => `${props.size}px`};
    animation: ${props => props.spin && css`${spin} linear infinite`};
    animation-duration: ${props => props.spin ? props.spinDuration : "0s" };
`;

const WorldVerticalLine = styled.div`
    &{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transform-style: preserve-3d;
    }
    &::after {
        content: "";
        background-color: ${props => props.color};
        position: absolute;
        top: 0;
        bottom: 0;
        left: ${props => `calc(50% - calc(${props.thickness} / 2 * .8))`};
        width: ${props => `calc(${props.thickness} * .8)`};
        z-index: -10;
    }
    &::before {
        content: "";
        background-color:${props => props.color};
        position: absolute;
        top: 0;
        bottom: 0;
        left:  ${props => `calc(50% - calc(${props.thickness} / 2 * .8))`};
        width: ${props => `calc(${props.thickness} * .8)`};
        transform: rotateY(-90deg);
        z-index: -10;
    }
`;

const WorldHorizontalLine = styled.div`
    &{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transform-style: preserve-3d;
    }
    &::after {
        content: "";
        background-color: ${props => props.color};
        position: absolute;
        left: 0;
        right: 0;
        top: ${props => `calc(50% - calc(${props.thickness} / 2 * .8))`};
        height: ${props => `calc(${props.thickness} * .8)`};
        z-index: -10;
    }
    &::before {
        content: "";
        background-color: ${props => props.color};
        position: absolute;
        left: 0;
        right: 0;
        top: ${props => `calc(50% - calc(${props.thickness} / 2 * .8))`};
        height: ${props => `calc(${props.thickness} * .8)`};
        transform: rotateY(-90deg);
        z-index: -10;
    }
`;

const WorldCircle1 = styled.div`
    position: absolute;
	transform-style: preserve-3d;
    box-sizing: border-box;
    top: 0;
	left: 0;
    width: 20em;
    height: 20em;
    border-radius: 100%;
	border: ${({ thickness, color }) => `solid ${thickness} ${color}`};
    background-color: transparent;
`;

const WorldCircle2 = styled(WorldCircle1)`
    transform: rotateY(30deg);
`;

const WorldCircle3 = styled(WorldCircle1)`
    transform: rotateY(60deg);
`;

const WorldCircle4 = styled(WorldCircle1)`
    transform: rotateY(90deg);
`;

const WorldCircle5 = styled(WorldCircle1)`
    transform: rotateY(120deg);
`;

const WorldCircle6 = styled(WorldCircle1)`
    transform: rotateY(150deg);
`;

const WorldCircle7 = styled(WorldCircle1)`
    transform: rotateY(180deg);
`;