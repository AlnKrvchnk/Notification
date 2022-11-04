import { ComponentStory, ComponentMeta } from '@storybook/react';
import BoxTitle from './BoxTitle';

export default {
    title: 'Molecules/BoxTitle',
    component: BoxTitle,
} as ComponentMeta<typeof BoxTitle>;

const Template: ComponentStory<typeof BoxTitle> = (args) => (
    <>
        <BoxTitle {...args} />
    </>
);

export const Default = Template.bind({});
Default.args = {};
