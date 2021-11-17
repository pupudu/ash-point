import React from 'react';
import Box from '@mui/material/Box';
import Text from '@mui/material/Typography';

const Span: React.FC<any> = (props: any) => {
  const { children, ...rest } = props;
  return (
    <Box {...rest} component="span">
      {' '}
      {children}{' '}
    </Box>
  );
};

export default function Screen(p: any) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      textAlign="center"
    >
      <Box>
        <Text variant="h2">
          From<Span color="cyan">Testcafe</Span>to<Span color="green">Cypress</Span>
        </Text>
        <Text variant="h2">
          in<Span color="orange">Pulse</Span>
        </Text>
      </Box>
    </Box>
  );
}
