import styled from 'styled-components';
import * as variable from '../../../variables';
interface Props {
    minWidth?: string;
    minHeight?: string;
    width: string;
    height: string;
    rectangle?: boolean;
    circle?: boolean;
    text?: boolean;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
}

export const Sceleton = styled.div<Props>`
    width: ${(props) => `${props.width}`};
    height: ${(props) => `${props.height}`};
    ${(props) => props.rectangle && `border-radius:4px;`}
    ${(props) => props.circle && `border-radius:50%;`}
    ${(props) => props.text && `border-radius:0; `}
    ${(props) => props.marginTop && `margin-top:${props.marginTop}px; `}
    ${(props) =>
        props.marginBottom && `margin-bottom:${props.marginBottom}px; `}
    ${(props) => props.marginLeft && `margin-left:${props.marginLeft}px; `}
    ${(props) => props.marginRight && `margin-right:${props.marginRight}px; `}
    ${(props) =>
        props.minWidth &&
        `
     @media (max-width: ${variable.sm}) {
        width:${props.minWidth}
     }
    `}
    ${(props) =>
        props.minHeight &&
        `
     @media (max-width: ${variable.sm}) {
        height:${props.minHeight}
     }
    `}
    
    position: relative;
    overflow: hidden;
    &::before {
        content: '';
        display: block;
        position: absolute;
        width: 500%;
        height: 100%;
        background: linear-gradient(
            -30deg,
            ${variable.lightGrayishBlue2},
            ${variable.lightGrayishBlue2},
            ${variable.veryLightGrayishBlue} 50%,
            ${variable.lightGrayishBlue2},
            ${variable.lightGrayishBlue2}
        );
        animation: gradientAnimation 4s infinite forwards ease;
    }
    @keyframes gradientAnimation {
        from {
            transform: translate(-80%, 0);
        }

        to {
            transform: translate(0, 0);
        }
    }
`;
