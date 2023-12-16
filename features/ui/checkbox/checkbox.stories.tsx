import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Checkbox, CheckboxSize } from "./checkbox";

export default {
  title: "UI/Checkbox",
  component: Checkbox,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = ({
  size,
  label,
  checkboxType,
  disabled,
  checked,
}) => (
  <div style={{ padding: 10 }}>
    <Checkbox
      size={size}
      label={label}
      checkboxType={checkboxType}
      disabled={disabled}
      checked={checked}
    ></Checkbox>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: CheckboxSize.sm,
  label: "",
};
Default.parameters = {
  viewMode: "docs",
};
