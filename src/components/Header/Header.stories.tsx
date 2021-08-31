import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import Header, { HeaderProps, ColourPalette } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
  },
} as Meta;

// Create a master template for mapping args to render the Header component
// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Example1 = Template.bind({});
Example1.args = { headerText: "I'm a Material UI Header 🕹️" };

export const Example2 = Template.bind({});
Example2.args = {
  backgroundColor: ColourPalette.PastelBlue,
  headerText: "I'm a Material UI Header 🕹️",
  navLinkText1: 'Home',
  navLinkText2: 'About Us',
  navLinkText3: 'Contact Us',
};
