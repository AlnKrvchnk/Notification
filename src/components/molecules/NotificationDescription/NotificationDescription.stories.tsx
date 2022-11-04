import { ComponentStory, ComponentMeta } from '@storybook/react';
import { text } from 'stream/consumers';
import  NotificationDescription from './NotificationDescription';

export default {
  title: 'Molecules/NotificationDescription',
  component: NotificationDescription,
} as ComponentMeta<typeof NotificationDescription>;

const Template: ComponentStory<typeof NotificationDescription> = (args) => <><NotificationDescription  {...args}/></>;

export const Default = Template.bind({});
Default.args = {
    userName:'User Name',
    text:'text',
    event:'event',
    time:'time',
    isUnRead:true

};

