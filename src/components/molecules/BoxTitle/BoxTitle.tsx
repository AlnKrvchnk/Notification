import Button from '../../atoms/Button/Button';
import Title from '../Title/Title';
import { StyledBoxTitle } from './StyledBoxTitle';
interface Props {
    notificationCount?: number;
    onReadAll: () => void;
}
const BoxTitle = ({ notificationCount, onReadAll }: Props) => {
    return (
        <StyledBoxTitle>
            <Title title="Notification" notificationCount={notificationCount} />
            <Button onClick={onReadAll}>Mark all as read</Button>
        </StyledBoxTitle>
    );
};
export default BoxTitle;
