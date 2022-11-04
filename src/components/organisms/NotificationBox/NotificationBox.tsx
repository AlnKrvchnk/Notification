import BoxTitle from '../../molecules/BoxTitle/BoxTitle';
import NotificationList from '../NotificationList/NotificationList';
import { StyledNotificationBox } from './StyledNotificationBox';

import { Notification as NotificationItem } from '../../../types/Notification';
interface Props {
    items?: Array<NotificationItem>;
    unReadCount?: number;
    onPhotoClick: (id: string) => void;
    onUserClick: (id: string) => void;
    onEventClick: (id: string) => void;
    onMessageClick: (id: string) => void;
    onClick: (id: string) => void;
    onReadAll: () => void;
}
const NotificationBox = ({
    items,
    unReadCount,
    onClick,
    onEventClick,
    onMessageClick,
    onPhotoClick,
    onUserClick,
    onReadAll,
}: Props) => {
    return (
        <StyledNotificationBox>
            <BoxTitle notificationCount={unReadCount} onReadAll={onReadAll} />
            <NotificationList
                items={items}
                onClick={onClick}
                onEventClick={onEventClick}
                onMessageClick={onMessageClick}
                onPhotoClick={onPhotoClick}
                onUserClick={onUserClick}
            />
        </StyledNotificationBox>
    );
};
export default NotificationBox;
