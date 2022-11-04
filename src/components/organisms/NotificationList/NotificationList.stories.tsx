import { ComponentStory, ComponentMeta } from '@storybook/react';
import NotificationList from './NotificationList';

export default {
    title: 'Organisms/NotificationList',
    component: NotificationList,
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
    <>
        <NotificationList {...args} />
    </>
);

export const Default = Template.bind({});
Default.args = {};
