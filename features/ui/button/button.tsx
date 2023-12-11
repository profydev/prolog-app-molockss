// Button.tsx

import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./button.module.scss";

export enum ButtonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xlg = "xlg",
}

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  empty = "empty",
  emptygray = "emptygray",
  error = "error",
  emptyerror = "emptyerror",
  nocolor = "nocolor",
}

export enum ButtonIcon {
  none = "none",
  only = "only",
  trailing = "trailing",
  leading = "leading",
}

type ButtonProps = {
  children: React.ReactNode;
  size?: ButtonSize;
  color?: ButtonColor;
  icon?: ButtonIcon;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  size = ButtonSize.md,
  color = ButtonColor.nocolor,
  icon = ButtonIcon.none,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={classNames(
        styles.container,
        styles[size],
        styles[color],
        styles[icon],
        {
          [styles.only]: icon === ButtonIcon.only,
        },
      )}
    >
      {children}
    </button>
  );
}
