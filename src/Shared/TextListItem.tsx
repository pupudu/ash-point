import Icon from '@mui/icons-material/LensTwoTone';
import Text from '@mui/material/Typography';
import React from 'react';

type Props = {
  hoverColor?: string;
};

export const TextListItem: React.FC<Props> = (props) => {
  return (
    <Text
      variant="h4"
      pb="1.5rem"
      sx={{ cursor: 'pointer', '&:hover': { color: props.hoverColor || 'initial' } }}
    >
      <Icon /> {props.children}
    </Text>
  );
};
