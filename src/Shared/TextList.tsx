import Box from '@mui/material/Box';
import React, { CSSProperties } from 'react';

type Props = {
  children: React.ReactElement[];
  hoverColor?: CSSProperties['color'];
};

export const TextList: React.FC<Props> = (props) => {
  return (
    <Box textAlign="left" pt="3rem">
      {React.Children.map(props.children, (child: React.ReactElement | string) => {
        return typeof child !== 'string'
          ? React.cloneElement(child, { hoverColor: props.hoverColor })
          : child;
      })}
    </Box>
  );
};
