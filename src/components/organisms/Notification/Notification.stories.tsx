import { ComponentStory, ComponentMeta } from '@storybook/react';
import Notification from './Notification';

export default {
    title: 'Organisms/Notification',
    component: Notification,
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => (
    <>
        <Notification {...args} />
    </>
);

export const Default = Template.bind({});
Default.args = {
    message: 'Some Message',
    userName: 'User Name',
    text: 'Some Text',
    event: 'Some Event',
    time: '2 days ago',
    isUnRead: true,
    userAvatar: 'avatar-angela-gray.webp',
    photoUrl: 'avatar-angela-gray.webp',
};
