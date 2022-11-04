import { ComponentStory, ComponentMeta } from '@storybook/react';
import Notifications from './Notifications';

export default {
    title: 'Pages/Notifications',
    component: Notifications,
} as ComponentMeta<typeof Notifications>;

const Template: ComponentStory<typeof Notifications> = () => (
    <>
        <Notifications />
    </>
);

export const Default = Template.bind({});
