import { StyledCountLabel } from "./StyledCountLabel"
interface Props{
    children:number
}
const CountLabel=({children}:Props)=>{
    return(<StyledCountLabel children={children}/>)
}
export default CountLabel