import styled from 'styled-components';
import * as variable from '../../../variables';
export const StyledMessage = styled.div`
    margin-top: 12px;
    padding: 20px;
    border: solid 1px ${variable.lightGrayishBlue2};
    border-radius: 4px;
    @media (max-width: ${variable.sm}) {
        padding: 16px;
    }
    &:hover {
        background-color: ${variable.lightGrayishBlue1};
        cursor: pointer;
    }
`;
