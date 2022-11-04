import styled from 'styled-components';
import * as variable from '../../../variables';
export const StyledBoxTitle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    @media (max-width: ${variable.sm}) {
        margin-bottom: 4px;
    }
`;
