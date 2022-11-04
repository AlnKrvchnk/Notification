import styled from 'styled-components';
import * as variable from '../../../variables'

export const StyledButton =styled.button`
    background: none;
    border: none;
    outline: none;
    cursor:pointer;
    color:${variable.grayishBlue};
    &:hover{
       color: ${variable.blue}
    }
    

    
`