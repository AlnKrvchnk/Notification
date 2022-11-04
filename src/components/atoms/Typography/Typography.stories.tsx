import { storiesOf } from '@storybook/react';
import {Text,TimeText,UserName, EventText} from './StyledTypography'


storiesOf('Atoms/Typography', module)
    .add('Text', () => <Text children='Text' />)
    .add('TimeText', () => <TimeText children='TimeText' />)
    .add('UserName', () => <UserName children='UserName' />)
    .add('EventText', () => <EventText children='EventText' />)
