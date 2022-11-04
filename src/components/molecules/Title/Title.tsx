import { StyledTitle } from './StyledTitle';
import { Title as Text } from '../../atoms/Typography/StyledTypography';
import CountLabel from '../../atoms/CountLabel/CountLabel';
interface Props {
    title?: string;
    notificationCount?: number;
}
const Title = ({ title = 'Notifications', notificationCount }: Props) => {
    return (
        <StyledTitle>
            <Text>{title}</Text>
            {notificationCount && <CountLabel>{notificationCount}</CountLabel>}
        </StyledTitle>
    );
};
export default Title;
