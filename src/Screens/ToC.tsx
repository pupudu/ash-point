import Box from '@mui/material/Box';
import Text from '@mui/material/Typography';
import { TimelineComponent } from '../Shared/Timeline';
import React from 'react';

export default function Screen(p) {
  return (
    <Box>
      <Text variant="h2">Table of Contents</Text>
      <TimelineComponent
        items={[
          <Box>
            Why{' '}
            <Box component="span" color="cyan">
              Testcafe?
            </Box>
          </Box>,
          <Box>
            Why{' '}
            <Box component="span" color="green">
              Cypress?
            </Box>
          </Box>,
          <Box>
            What is{' '}
            <Box component="span" color="orange">
              Pulse?
            </Box>
          </Box>,
          <Box>
            The Migration:{' '}
            <Box component="span" color="#36F">
              The Good
            </Box>
          </Box>,
          <Box>
            The Migration:{' '}
            <Box component="span" color="#E70">
              The Bad
            </Box>
          </Box>,
          <Box>
            The Migration:{' '}
            <Box component="span" color="red">
              The Ugly
            </Box>
          </Box>,
          <Box>
            <Box component="span" color="green">
              Cypress
            </Box>{' '}
            Dashboard
          </Box>,
          <Box sx={{ textDecoration: 'line-through' }}>Deep Dive into Cypress</Box>,
        ]}
      />
    </Box>
  );
}
