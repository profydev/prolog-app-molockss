import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { LoadingError } from "./loading-error";

export default {
  title: "UI/LoadingError",
  component: LoadingError,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof LoadingError>;

const Template: StoryFn<typeof LoadingError> = () => <LoadingError />;

export const Default = Template.bind({});
