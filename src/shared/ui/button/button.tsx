import React from "react";
import { EBorderRadius, EButtonSizes, EButtonVariant } from ".";
import styles from "./button.module.scss";

export const buttonSizesClasses: Record<EButtonSizes, string> = {
  [EButtonSizes.LG]: styles.lgSize,
  [EButtonSizes.MD]: styles.mdSize,
  [EButtonSizes.SM]: styles.smSize,
};

export const buttonClassesRounded: Record<EBorderRadius, string> = {
  [EBorderRadius.LG]: styles.lgRounded,
  [EBorderRadius.MD]: styles.mdRounded,
  [EBorderRadius.SM]: styles.smRounded,
};

export const buttonVariantClasses: Record<EButtonVariant | "none", string> = {
  [EButtonVariant.OUTLINED]: styles.outlined,
  [EButtonVariant.SECONDARY]: styles.secondary,
  [EButtonVariant.DEFAULT]: styles.default,
  [EButtonVariant.ERROR]: styles.error,
  ["none"]: styles.none,
};

export const buttonTextClasses: Record<"start" | "end" | "center", string> = {
  ["start"]: styles.textStart,
  ["end"]: styles.textEnd,
  ["center"]: styles.textCenter,
};

export interface InputProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  customProp?: string;
  sizes?: EButtonSizes;
  text?: "start" | "end" | "center";
  rounded?: EBorderRadius;
  variant?: EButtonVariant | "none";
}
const Button = React.forwardRef<HTMLButtonElement, InputProps>(
  (
    {
      sizes = EButtonSizes.SM,
      className,
      variant = EButtonVariant.DEFAULT,
      rounded = EBorderRadius.MD,
      text = "center",
      type,
      ...props
    },
    ref
  ) => {
    return (
      <button
        type={type}
        className={`${buttonSizesClasses[sizes]} ${buttonTextClasses[text]} ${buttonClassesRounded[rounded]} ${buttonVariantClasses[variant]} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
export default Button;
