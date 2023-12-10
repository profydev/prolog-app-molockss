// Button.stories.tsx

import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button, ButtonSize, ButtonColor, ButtonIcon } from "./button";

export default {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = ({ size, color, icon, children }) => {
  // Function to render the appropriate icon based on the selected type
  const renderIcon = () => {
    switch (icon) {
      case ButtonIcon.leading:
        return <img src="icons/Loading-circle.svg" alt="leading icon" />;
      case ButtonIcon.trailing:
        return <img src="icons/Loading-circle.svg" alt="trailing icon" />;
      case ButtonIcon.only:
        return <img src="icons/Loading-circle.svg" alt="only icon" />;
      default:
        return null;
    }
  };

  return (
    <div style={{ padding: 10 }}>
      <Button color={color} size={size} icon={icon}>
        {(icon === ButtonIcon.leading || icon === ButtonIcon.trailing) &&
          renderIcon()}
        {icon === ButtonIcon.only ? renderIcon() : children}
      </Button>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  size: ButtonSize.sm,
  color: ButtonColor.primary,
  icon: ButtonIcon.none,
  children: "Button CTA",
};
Default.parameters = {
  viewMode: "docs",
};
