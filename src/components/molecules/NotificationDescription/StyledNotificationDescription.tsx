import styled from "styled-components";
import * as variable from '../../../variables'
interface Props{
    isUnRead:boolean
}
export const StyledDescriptionTitle=styled.div<Props>`
${props=>props.isUnRead&&`
    &:after{
        content :'';
        width:8px;
        height:8px;
        line-height:8px;
        margin-left:8px;
        background:${variable.red};
        border-radius:50%;
        display:inline-block;
    }
`}
`