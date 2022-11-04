import { useId } from 'react';
import Photo from '../../atoms/Photo/Photo';
import UserAvatar from '../../atoms/UserAvatar/UserAvatar';
import Message from '../../molecules/Message/Message';
import NotificationDescription from '../../molecules/NotificationDescription/NotificationDescription';
import { StyledNotification } from './StyledNotification';

interface Props {
    message?: string;
    userName?: string;
    text?: string;
    event?: string;
    time?: string;
    isUnRead?: boolean;
    userAvatar?: string;
    photoUrl?: string;
    onPhotoClick: () => void;
    onUserClick: () => void;
    onEventClick: () => void;
    onMessageClick: () => void;
    onClick: () => void;
}
const Notification = ({
    message,
    userName,
    text,
    event,
    time,
    isUnRead,
    userAvatar,
    photoUrl,
    onPhotoClick,
    onUserClick,
    onEventClick,
    onMessageClick,
    onClick,
}: Props) => {
    return (
        <StyledNotification isActive={isUnRead} onClick={onClick}>
            <UserAvatar
                photoUrl={userAvatar}
                alt={userName && userName[0].toUpperCase()}
                onClick={onUserClick}
            />
            <div>
                <div className="content">
                    <NotificationDescription
                        userName={userName}
                        text={text}
                        event={event}
                        time={time}
                        isUnRead={isUnRead}
                        onEventClick={onEventClick}
                        onUserClick={onUserClick}
                    />
                    {photoUrl && (
                        <Photo photoUrl={photoUrl} onClick={onPhotoClick} />
                    )}
                </div>
                {message && (
                    <Message message={message} onClick={onMessageClick} />
                )}
            </div>
        </StyledNotification>
    );
};
export default Notification;
