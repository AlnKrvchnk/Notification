import { ComponentStory, ComponentMeta } from '@storybook/react';
import  UserAvatar  from './UserAvatar';

export default {
  title: 'Atoms/UserAvatar',
  component: UserAvatar,
} as ComponentMeta<typeof UserAvatar>;

const Template: ComponentStory<typeof UserAvatar> = (args) => <><UserAvatar  {...args}/></>;

export const Default = Template.bind({});
Default.args = {
    photoUrl:'AHLj50vuzwGB_ymeAg52Bqc3_Dswv5icwYq1ASm4vOqj3ro-TD175f8lWhDhIB1gtLYvYRPdeXpT_PkZilX9TyP9.jpg'
};

