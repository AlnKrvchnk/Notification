import styled from 'styled-components';
import * as variable from '../../../variables';
export const UserName = styled.span`
    font-weight: bold;
    color: ${variable.veryDarkBlue};
    &:hover {
        cursor: pointer;
        color: ${variable.blue};
    }
`;
export const Text = styled.span`
    color: ${variable.grayishBlue};
`;
export const EventText = styled.span`
    font-weight: bold;
    color: ${variable.darkGrayishBlue};
    &:hover {
        cursor: pointer;
        color: ${variable.blue};
    }
`;
export const TimeText = styled.p`
    margin: 4px 0 0 0;
    color: ${variable.lightGrayishBlue2};
`;
export const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color: ${variable.veryDarkBlue};
    @media (max-width: ${variable.sm}) {
        font-size: 20px;
    }
`;
