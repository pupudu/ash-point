import Box from '@mui/material/Box';
import Text from '@mui/material/Typography';
import Icon from '@mui/icons-material/LensTwoTone';

export default function Screen(p) {
  return (
    <Box>
      <Text variant="h2">Why Cypress?</Text>
      <Box textAlign="left" pt="3rem">
        <Text variant="h4" pb="1.5rem" sx={{ cursor: 'pointer', '&:hover': { color: 'green' } }}>
          <Icon /> Modern javascript based test api
        </Text>
        <Text variant="h4" pb="1.5rem" sx={{ cursor: 'pointer', '&:hover': { color: 'green' } }}>
          <Icon /> Cross browser support <b>excluding</b> Internet Explorer 11
        </Text>
        <Text variant="h4" pb="1.5rem" sx={{ cursor: 'pointer', '&:hover': { color: 'green' } }}>
          <Icon /> Tons of features and integrations
        </Text>
        <Text variant="h4" pb="1.5rem" sx={{ cursor: 'pointer', '&:hover': { color: 'green' } }}>
          <Icon /> Optional - dashboard integration (Pretty cheap compared to Testcafe)
        </Text>
        <br />
        <Text variant="h4" pb="1.5rem" sx={{ cursor: 'pointer', '&:hover': { color: 'green' } }}>
          <Icon /> Testcafe started to become quite unstable in Kubernetes
        </Text>
        <Text variant="h4" pb="1.5rem" sx={{ cursor: 'pointer', '&:hover': { color: 'green' } }}>
          <Icon /> Cypress offers tons of more features compared to Testcafe
        </Text>
        <Text variant="h4" pb="1.5rem" sx={{ cursor: 'pointer', '&:hover': { color: 'green' } }}>
          <Icon /> Cypress community is huge
        </Text>
      </Box>
    </Box>
  );
}
