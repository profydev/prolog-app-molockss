import React, { HTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./checkbox.module.scss";

export enum CheckboxSize {
  sm = "sm",
  md = "md",
}

export enum CheckboxType {
  unechecked = "unchecked",
  check = "check",
  partly = "partly",
}

interface CheckboxProps {
  size?: CheckboxSize;
  label?: string;
  checkboxType?: CheckboxType;
}

// Additional HTML attributes for the checkbox input
interface CheckBoxAttributes extends HTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  checked?: boolean;
}

export function Checkbox({
  size = CheckboxSize.sm,
  label = "",
  checkboxType = CheckboxType.check,
  ...CheckboxProps
}: CheckBoxAttributes & CheckboxProps) {
  return (
    <label
      data-disabled={CheckboxProps.disabled}
      className={classNames(
        styles[size],
        styles.checkbox,
        styles[checkboxType],
      )}
    >
      {label ? `${label}` : null}
      <input type="checkbox" {...CheckboxProps} />

      <span></span>
    </label>
  );
}
/* Empty span element; creating a custom-styled checkbox.
The span doesn't contain any actual content but is used purely for its visual styling properties to represent the appearance of a checkbox in different states and sizes */
