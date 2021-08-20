import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Header, { HeaderProps } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
  },
} as Meta;

// Create a master template for mapping args to render the Header component
const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = { headerText: "I'm a Material UI Header 🕹️" };
