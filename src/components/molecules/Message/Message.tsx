import { Text } from '../../atoms/Typography/StyledTypography';
import { StyledMessage } from './StyledMessage';
interface Props {
    message: string;
    onClick?: () => void;
}
const Message = ({ message, onClick }: Props) => {
    return (
        <StyledMessage onClick={onClick}>
            <Text children={message} />
        </StyledMessage>
    );
};
export default Message;
