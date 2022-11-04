import GlobalStyle from '../../../globalStyles';
import { StyledButton } from './StyledButton';
interface Props {
    children?: string;
    onClick?: () => void;
}
const Button = ({ children, onClick }: Props) => {
    return (
        <>
            <StyledButton children={children} onClick={onClick} />
            <GlobalStyle />
        </>
    );
};
export default Button;
