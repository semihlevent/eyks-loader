import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import World from './World';




{/* <div className='world__container' style={{marginTop: '1em'}}>
                <div className='world__vertical'></div>
                <div className='world__horizontal'></div>
                <div className='world__circle'></div>
                <div className='world__circle' style={{transform: 'rotateY(30deg)'}}></div>
                <div className='world__circle' style={{transform: 'rotateY(60deg)'}}></div>
                <div className='world__circle' style={{transform: 'rotateY(90deg)'}}></div>
                <div className='world__circle' style={{transform: 'rotateY(120deg)'}}></div>
                <div className='world__circle' style={{transform: 'rotateY(150deg)'}}></div>
            </div> */}

const BoardMembersLoader = props => {
    const { size, colorPrimary="#6c6d6f", colorSecondary="#971f20", worldColor=colorPrimary, backgroundColor="white",
        spin, spinDuration="90s", worldSpin, worldSpinDuration
    } = props;

    const passingProps = {size, colorPrimary, colorSecondary, backgroundColor, spin, spinDuration };
    const worldProps = {color: worldColor, spin: worldSpin, spinDuration: worldSpinDuration};
    //size: 3.2 6.8
    return (
        <Container {...passingProps}>
            <Chamber {...passingProps}>
                <Round backgroundColor={backgroundColor} color={colorPrimary} style={{top: '.8em', transform: 'translateY(-50%)'}} />
                <Round backgroundColor={backgroundColor} color={colorSecondary} style={{bottom: '.8em', transform: 'translateY(50%) rotate(180deg)'}} />
                <Round backgroundColor={backgroundColor} color={colorSecondary} style={{left: '3.7em', top:'5.1em', transform: 'translateX(-50%) rotate(300deg)'}} />
                <Round backgroundColor={backgroundColor} color={colorSecondary} style={{left: '3.7em', bottom:'5.1em', transform: 'translateX(-50%) rotate(240deg)'}} />
                <Round backgroundColor={backgroundColor} color={colorSecondary} style={{right: '3.7em', top:'5.1em', transform: 'translateX(50%) rotate(60deg)'}} />
                <Round backgroundColor={backgroundColor} color={colorSecondary} style={{right: '3.7em', bottom:'5.1em', transform: 'translateX(50%) rotate(120deg)'}} />
            </Chamber>
            <World {...worldProps} />
        </Container>
    );
};

export default BoardMembersLoader;

// https://stackoverflow.com/questions/11644993/want-to-show-the-thickness-of-an-element-while-it-rotate

// https://www.youtube.com/watch?v=FeJEEE3zc4U


const Container = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${props => `${props.size}px`};
    width: 40em;
    height: 40em;
`;

const Round = styled.div`
    & {
        width: 10em;
        height: 10em;
        position: absolute;
        background-color: ${props => props.backgroundColor};
        border-radius: 50%;
    }
    &::after {
        content: "";
        position: absolute;
        border-radius: 50%;
        background-color: ${props => props.color};
        width: 8.8em;
        height: 8.8em;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
    &::before {
        content: "";
        position: absolute;
        background-color:${props => props.backgroundColor};
        width: 0.65em;
        height: 4em;
        top: 100%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
`;

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Chamber = styled.div`
    & {
        position: absolute;
        z-index: -2;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: ${({ colorPrimary, colorSecondary }) => `linear-gradient(30deg, ${colorSecondary} 38%, ${colorPrimary} 38%) 0 0,
        linear-gradient(-30deg, ${colorSecondary} 38%, ${colorPrimary} 38%) 100% 1%,
        linear-gradient(0deg, ${colorSecondary} 0%, ${colorSecondary} 0%) 0 99%,
        linear-gradient(0deg, ${colorSecondary} 0%, ${colorSecondary} 0%) 100% 100%`};
        background-repeat: no-repeat;
        background-size: 50% 50%;
        animation: ${props => props.spin && css`${spin} linear infinite`};
        animation-duration: ${props => props.spin ? props.spinDuration : "0s" };
    }
    
    &::after {
        width: 26.66em;
        height: 26.66em;
        content: "";
        z-index: -1;
        position: absolute;
        background-color: ${props => props.backgroundColor};
        border-radius: 50%;
    }

`;