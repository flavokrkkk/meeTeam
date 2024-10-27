import React from "react";
import { EBorderRadius, EInputSizes } from ".";
import styles from "./input.module.scss";

export const inputSizesClasses: Record<EInputSizes, string> = {
  [EInputSizes.LG]: styles.lgSize,
  [EInputSizes.MD]: styles.mdSize,
  [EInputSizes.SM]: styles.smSize,
};

export const inputSizesRounded: Record<EBorderRadius, string> = {
  [EBorderRadius.LG]: styles.lgRounded,
  [EBorderRadius.MD]: styles.mdRounded,
  [EBorderRadius.SM]: styles.smRounded,
};

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  customProp?: string;
  sizes?: EInputSizes;
  rounded?: EBorderRadius;
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { sizes = EInputSizes.SM, rounded = EBorderRadius.MD, type, ...props },
    ref
  ) => {
    return (
      <input
        type={type}
        className={`${inputSizesClasses[sizes]} ${inputSizesRounded[rounded]}`}
        ref={ref}
        {...props}
      />
    );
  }
);
export default Input;
