import { ComponentStory, ComponentMeta } from '@storybook/react';
import  Message  from './Message';

export default {
  title: 'Molecules/Message',
  component: Message,
} as ComponentMeta<typeof Message>;

const Template: ComponentStory<typeof Message> = (args) => <><Message  {...args}/></>;

export const Default = Template.bind({});
Default.args = {
    message:'gasd agsdias asdghasi ckasuch csahui'
};

