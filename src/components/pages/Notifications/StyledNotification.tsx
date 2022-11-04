import styled from 'styled-components';
import * as variable from '../../../variables';
export const StyledNotifications = styled.div`
    min-height: calc(100vh - 120px);
    width: 100%;
    background-color: ${variable.lightGrayishBlue2};
    padding-top: 60px;
    padding-bottom: 60px;
    & > * {
        margin: auto;
        min-height: calc(100vh - 184px);
        width: 50%;
    }
    @media (max-width: ${variable.sm}) {
        padding: 0;
        & > * {
            width: initial;
            height: initial;
            min-height: 100vh;
            margin: 0;
        }
    }
`;
