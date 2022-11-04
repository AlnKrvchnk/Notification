import { ComponentStory, ComponentMeta } from '@storybook/react';
import NotificationBox from './NotificationBox';

export default {
    title: 'Organisms/NotificationBox',
    component: NotificationBox,
} as ComponentMeta<typeof NotificationBox>;

const Template: ComponentStory<typeof NotificationBox> = (args) => (
    <>
        <NotificationBox {...args} />
    </>
);

export const Default = Template.bind({});
Default.args = {};
