import { ComponentStory, ComponentMeta } from '@storybook/react';
import  Photo  from './Photo';

export default {
  title: 'Atoms/Photo',
  component: Photo,
} as ComponentMeta<typeof Photo>;

const Template: ComponentStory<typeof Photo> = (args) => <><Photo  {...args}/></>;

export const Default = Template.bind({});
Default.args = {
    photoUrl:'AHLj50vuzwGB_ymeAg52Bqc3_Dswv5icwYq1ASm4vOqj3ro-TD175f8lWhDhIB1gtLYvYRPdeXpT_PkZilX9TyP9.jpg'
};

