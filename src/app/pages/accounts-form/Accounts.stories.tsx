import React from "react";
import { Story, Meta } from "@storybook/react";
import { AddEditAccount } from ".";
import { StoryHelper } from "./../../config/story-helper";

export default {
  title: "Add New Account",
  component: AddEditAccount,
};

const Template: Story<{}> = (args) => (
  <StoryHelper>
    <AddEditAccount {...args} />
  </StoryHelper>
);

export const AccountAddPage = Template.bind({});
AccountAddPage.args = {};
