import * as React from "react";
import styles from "./textarea.module.scss";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  autoplay?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ ...props }, ref) => {
    return (
      <textarea
        placeholder={"Decrivez ...."}
        className={styles.textarea}
        ref={ref}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
