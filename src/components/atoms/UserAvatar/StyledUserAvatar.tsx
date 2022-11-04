import styled from 'styled-components';
import * as variable from '../../../variables';
export const StyledUserAvatar = styled.div`
    width: 46px;
    height: 46px;
    object-fit: cover;
    overflow: hidden;
    border-radius: 50%;
    line-height: 46px;
    background: ${variable.lightGrayishBlue1};
    color: ${variable.white};
    text-align: center;
    cursor: pointer;
    > img {
        width: 100%;
    }
    @media (max-width: ${variable.sm}) {
        line-height: 40px;
        width: 40px;
        height: 40px;
    }
`;
