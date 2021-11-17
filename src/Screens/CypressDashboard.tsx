import Box from '@mui/material/Box';
import Text from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Screen(p) {
  return (
    <Box>
      <Text variant="h2">Cypress Dashboard</Text>
      <Button
        href="https://dashboard.cypress.io/organizations/c177d6f3-69be-4203-94f7-4fb6afd94e12/projects"
        target="_blank"
        sx={{ marginTop: '2rem' }}
      >
        Go to dashboard
      </Button>
    </Box>
  );
}
