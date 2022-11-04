import styled from 'styled-components';
import * as variable from '../../../variables';
interface Props {
    isActive?: boolean;
}
export const StyledNotification = styled.div<Props>`
    display: grid;
    grid-template-columns: min-content auto;
    padding: 16px;
    border-radius: 8px;
    @media (max-width: ${variable.sm}) {
        padding: 12px;
    }
    ${(props) =>
        props.isActive &&
        ` background-color: ${variable.veryLightGrayishBlue};
        cursor: pointer;
        box-shadow: -0px 0px 4px ${variable.lightGrayishBlue1};
        `}

    & > :not(:first-of-type) {
        margin-left: 16px;

        @media (max-width: ${variable.sm}) {
            margin-left: 12px;
        }
        .content {
            display: grid;
            align-items: center;
            grid-template-columns: auto min-content;
            & > :first-of-type {
                width: 100%;
            }
            & > :not(:first-of-type) {
                margin-left: 16px;

                @media (max-width: ${variable.sm}) {
                    margin-left: 12px;
                }
            }
        }
    }
`;
