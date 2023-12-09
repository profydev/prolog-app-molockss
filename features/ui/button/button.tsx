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
}

type ButtonProps = {
  children: React.ReactNode;
  size?: ButtonSize;
  color?: ButtonColor;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  size = ButtonSize.md,
  color = ButtonColor.primary,
}: ButtonProps) {
  return (
    <div className={classNames(styles.container, styles[size], styles[color])}>
      {children}
    </div>
  );
}
