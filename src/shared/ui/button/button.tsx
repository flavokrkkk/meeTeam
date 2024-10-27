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

export const buttonVariantClasses: Record<EButtonVariant, string> = {
  [EButtonVariant.OUTLINED]: styles.outlined,
  [EButtonVariant.SECONDARY]: styles.secondary,
  [EButtonVariant.DEFAULT]: styles.default,
};

export interface InputProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  customProp?: string;
  sizes?: EButtonSizes;
  rounded?: EBorderRadius;
  variant?: EButtonVariant;
}
const Button = React.forwardRef<HTMLButtonElement, InputProps>(
  (
    {
      sizes = EButtonSizes.SM,
      variant = EButtonVariant.DEFAULT,
      rounded = EBorderRadius.MD,
      type,
      ...props
    },
    ref
  ) => {
    return (
      <button
        type={type}
        className={`${buttonSizesClasses[sizes]} ${buttonClassesRounded[rounded]} ${buttonVariantClasses[variant]}`}
        ref={ref}
        {...props}
      />
    );
  }
);
export default Button;
