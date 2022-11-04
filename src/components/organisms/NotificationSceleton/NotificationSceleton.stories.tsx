import { ComponentStory, ComponentMeta } from '@storybook/react';
import NotificationSceleton from './NotificationSceleton';

export default {
    title: 'Organisms/NotificationSceleton',
    component: NotificationSceleton,
} as ComponentMeta<typeof NotificationSceleton>;

const Template: ComponentStory<typeof NotificationSceleton> = () => (
    <>
        <NotificationSceleton />
    </>
);

export const Sceleton = Template.bind({});
Sceleton.args = {};
