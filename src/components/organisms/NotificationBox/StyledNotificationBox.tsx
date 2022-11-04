import styled from 'styled-components';
import * as variable from '../../../variables';
export const StyledNotificationBox = styled.div`
    border-radius: 16px;
    padding: 32px;
    background-color: ${variable.white};
    box-shadow: -0px 0px 12px ${variable.lightGrayishBlue1};
    @media (max-width: ${variable.sm}) {
        padding: 16px;
        border-radius: 0;
        box-shadow: none;
    }
`;
