import { ComponentStory, ComponentMeta } from '@storybook/react';
import  CountLabel  from './CountLabel';

export default {
  title: 'Atoms/CountLabel',
  component:CountLabel,
} as ComponentMeta<typeof CountLabel>;

const Template: ComponentStory<typeof CountLabel> = (args) => <><CountLabel  {...args}/></>;

export const Default = Template.bind({});
Default.args = {
    children:3
};

