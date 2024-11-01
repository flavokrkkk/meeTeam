import { FC } from "react";
import { IRotate, ISizes } from "../utils/icon";

interface IArrowIcon {
  rotate?: IRotate;
  size?: ISizes;
}

const ArrowIcon: FC<IArrowIcon> = ({
  rotate = { rotate: "180deg" },
  size = { height: 9, width: 15 },
}) => {
  return (
    <svg
      style={rotate}
      width={size.width}
      height={size.height}
      viewBox="0 0 15 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.365029 0.522561C0.575998 0.311656 0.862095 0.193176 1.1604 0.193176C1.45871 0.193176 1.74481 0.311656 1.95578 0.522561L7.52453 6.09131L13.0933 0.522561C13.3055 0.317633 13.5896 0.204239 13.8846 0.206802C14.1796 0.209366 14.4617 0.327681 14.6703 0.536265C14.8789 0.744849 14.9972 1.02701 14.9998 1.32198C15.0024 1.61696 14.889 1.90113 14.684 2.11331L8.3199 8.47744C8.10894 8.68834 7.82284 8.80682 7.52453 8.80682C7.22622 8.80682 6.94012 8.68834 6.72915 8.47744L0.365029 2.11331C0.154124 1.90234 0.0356445 1.61625 0.0356445 1.31794C0.0356445 1.01963 0.154124 0.73353 0.365029 0.522561Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowIcon;
