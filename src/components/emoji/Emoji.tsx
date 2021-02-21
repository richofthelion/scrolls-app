import React from 'react';

//
// --- Types ---

export interface EmojiProps {
  readonly label?: string;
  readonly symbol?: any;
}

export const Emoji: React.FunctionComponent<EmojiProps> = (props: EmojiProps) => (
  <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
  >
      {props.symbol}
  </span>
);

export default Emoji;
