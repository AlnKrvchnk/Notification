import { useEffect, useMemo, useState } from 'react';
import { Notification } from '../../../types/Notification';
import NotificationBox from '../../organisms/NotificationBox/NotificationBox';

const NotificationBoxContainer = () => {
    const [unReadItems, setUnReadItems] =
        useState<Array<string>>(unReadNotifications);
    const [items, setItems] =
        useState<Array<Notification> | undefined>(undefined);
    useEffect(() => {
        setTimeout(
            () =>
                setItems(
                    notificationItems.map((item) =>
                        unReadItems.indexOf(item.id) === -1
                            ? item
                            : { isUnRead: true, ...item }
                    )
                ),
            3000
        );
    }, []);
    useEffect(() => {
        items &&
            setItems(
                notificationItems.map((item) =>
                    unReadItems.indexOf(item.id) === -1
                        ? item
                        : { isUnRead: true, ...item }
                )
            );
    }, [unReadItems]);
    const unReadCount = useMemo(() => {
        return unReadItems.length > 0 ? unReadItems.length : undefined;
    }, [unReadItems]);
    const onItemClick = (id: string) => {
        setUnReadItems(unReadItems.filter((item) => item != id));
    };
    const onEventClick = (id: string) => {
        console.log(`onEventClick: ${id}`);
    };
    const onMessageClick = (id: string) => {
        console.log(`onMessageClick: ${id}`);
    };
    const onPhotoClick = (id: string) => {
        console.log(`onPhotoClick: ${id}`);
    };
    const onUserClick = (id: string) => {
        console.log(`onUserClick: ${id}`);
    };

    return (
        <NotificationBox
            unReadCount={unReadCount}
            onReadAll={() => setUnReadItems([])}
            items={items}
            onClick={onItemClick}
            onEventClick={onEventClick}
            onMessageClick={onMessageClick}
            onPhotoClick={onPhotoClick}
            onUserClick={onUserClick}
        />
    );
};
export default NotificationBoxContainer;
const unReadNotifications: Array<string> = ['0', '1', '2'];
const notificationItems: Array<Notification> = [
    {
        id: '0',
        userName: 'Mark Webber',
        userAvatar: 'avatar-mark-webber.webp',
        text: 'reacted to your recent post',
        time: '1m ago',
        event: 'My first tournament today!',
    },
    {
        id: '1',
        userName: 'Angela Gray',
        userAvatar: 'avatar-angela-gray.webp',
        text: 'followed you',
        time: '5m ago',
    },
    {
        id: '2',
        userName: 'Jacob Thompson',
        userAvatar: 'avatar-jacob-thompson.webp',
        text: 'has joined your group',
        time: '1day ago',
        event: 'Chess Club',
    },
    {
        id: '3',
        userName: 'Rizky Hasanuddin',
        userAvatar: 'avatar-rizky-hasanuddin.webp',
        text: 'sent you private message',
        time: '5days ago',
        message:
            "Hello, thanks for up the Chess Club. I've been a memeber for a few weeks now and i'm alredy having loost of fun and improving my game.",
    },
    {
        id: '4',
        userName: 'Kimberly Smith',
        userAvatar: 'avatar-kimberly-smith.webp',

        text: 'comment on your picture',
        time: '1week ago',
        photoUrl: 'image-chess.webp',
    },
    {
        id: '5',
        userName: 'Nathan Peterson',
        userAvatar: 'avatar-nathan-peterson.webp',

        text: 'reacted to your recent post',
        time: '2weeks ago',
        event: '5 end-game strategies to increase your win rate',
    },
    {
        id: '6  ',
        userName: 'Anna Kim',
        userAvatar: 'avatar-anna-kim.webp',
        text: 'left the Group',
        time: '2weeks ago',
        event: 'Ches Club',
    },
];
