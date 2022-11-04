export interface Notification {
    id: string;
    message?: string;
    userName?: string;
    event?: string;
    time?: string;
    text?: string;
    isUnRead?: boolean;
    userAvatar?: string;
    photoUrl?: string;
}
