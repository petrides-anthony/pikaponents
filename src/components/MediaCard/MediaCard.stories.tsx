import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import MediaCard, { MediaCardProps } from './MediaCard';

export default {
  title: 'Components/MediaCard',
  component: MediaCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// Create a master template for mapping args to render the MediaCard component
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<MediaCardProps> = (args) => <MediaCard {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { title: 'Card Title' };
