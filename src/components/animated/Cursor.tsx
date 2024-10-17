import { ReactNode, memo } from 'react';

export type CursorProps = {
  /** Enable cursor blinking animation */
  cursorBlinking?: boolean;
  /** Enable smooth blinking (defaults to true if not provided) */
  smoothBlinking?: boolean;
  /** Change cursor style */
  cursorStyle?: ReactNode;
  /** Change cursor color */
  cursorColor?: string;
};

const MemoizedCursor = ({
  cursorBlinking = true,
  smoothBlinking = true, // New prop for smooth or sharp blinking
  cursorStyle = '|',
  cursorColor = 'inherit',
}: CursorProps): JSX.Element => {
  return (
    <span
      style={{ color: cursorColor }}
      className={`relative font-inherit text-inherit leading-inherit left-[3px] top-0 opacity-100 ${
        cursorBlinking
          ? smoothBlinking
            ? 'animate-blinkSmooth'
            : 'animate-blinkSharp'
          : ''
      }`}>
      {cursorStyle}
    </span>
  );
};

export const Cursor = memo(MemoizedCursor);
