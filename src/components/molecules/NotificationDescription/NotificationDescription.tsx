import {
    UserName,
    Text,
    TimeText,
    EventText,
} from '../../atoms/Typography/StyledTypography';
import { StyledDescriptionTitle } from './StyledNotificationDescription';
interface Props {
    userName?: string;
    text?: string;
    event?: string;
    time?: string;
    isUnRead?: boolean;
    onUserClick?: () => void;
    onEventClick?: () => void;
}
const NotificationDescription = ({
    userName,
    text,
    event,
    time,
    isUnRead,
    onUserClick,
    onEventClick,
}: Props) => {
    return (
        <div>
            <StyledDescriptionTitle isUnRead={isUnRead || false}>
                <Text>
                    <UserName children={`${userName} `} onClick={onUserClick} />
                    {`${text} `}
                    {event && (
                        <EventText children={event} onClick={onEventClick} />
                    )}
                </Text>
            </StyledDescriptionTitle>
            <TimeText children={time} />
        </div>
    );
};
export default NotificationDescription;
