import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sceleton } from './StyledSceleton';

export default {
    title: 'Atoms/Sceleton',
    component: Sceleton,
} as ComponentMeta<typeof Sceleton>;

const Template: ComponentStory<typeof Sceleton> = (args) => (
    <>
        <Sceleton {...args} />
    </>
);

export const Default = Template.bind({});
Default.args = {
    width: 100,
    height: 50,
};
