import styled from 'styled-components';
import * as variable from '../../../variables';
export const StyledPhoto = styled.div`
    width: 46px;
    height: 46px;
    object-fit: cover;
    overflow: hidden;
    border-radius: 8px;
    color: ${variable.white};
    line-height: 46px;
    text-align: center;
    cursor: pointer;
    > img {
        width: 100%;
    }

    @media (max-width: ${variable.sm}) {
        width: 40px;
        height: 40px;
        line-height: 40px;
    }
    &:hover {
        box-shadow: 0px 0px 4px ${variable.grayishBlue};
    }
`;
