import Notification from '../Notification/Notification';
import NotificationSceleton from '../NotificationSceleton/NotificationSceleton';
import { StyledNotificationList } from './StyledNotificationList';
import { Notification as NotificationItem } from '../../../types/Notification';
import { Text } from '../../atoms/Typography/StyledTypography';
interface Props {
    items?: Array<NotificationItem>;
    onPhotoClick: (id: string) => void;
    onUserClick: (id: string) => void;
    onEventClick: (id: string) => void;
    onMessageClick: (id: string) => void;
    onClick: (id: string) => void;
}
const NotificationList = ({
    items,
    onPhotoClick,
    onUserClick,
    onEventClick,
    onMessageClick,
    onClick,
}: Props) => {
    return (
        <StyledNotificationList>
            {items ? (
                items.length > 0 ? (
                    items.map((item) => (
                        <Notification
                            key={item.id}
                            message={item.message}
                            userName={item.userName}
                            text={item.text}
                            event={item.event}
                            time={item.time}
                            isUnRead={item.isUnRead}
                            userAvatar={item.userAvatar}
                            photoUrl={item.photoUrl}
                            onPhotoClick={() => onPhotoClick(item.id)}
                            onUserClick={() => onUserClick(item.id)}
                            onEventClick={() => onEventClick(item.id)}
                            onMessageClick={() => onMessageClick(item.id)}
                            onClick={() => onClick(item.id)}
                        />
                    ))
                ) : (
                    <Text>Not Found!</Text>
                )
            ) : (
                <>
                    <NotificationSceleton />
                    <NotificationSceleton />
                    <NotificationSceleton />
                </>
            )}
        </StyledNotificationList>
    );
};
export default NotificationList;
