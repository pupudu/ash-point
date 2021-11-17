import Box from '@mui/material/Box';
import Text from '@mui/material/Typography';
import Icon from '@mui/icons-material/LensTwoTone';

export default function Screen(p) {
  return (
    <Box>
      <Text variant="h2">Why Testcafe?</Text>
      <Box textAlign="left" pt="3rem">
        <Text variant="h4" pb="1.5rem" sx={{ cursor: 'pointer', '&:hover': { color: 'cyan' } }}>
          <Icon /> Modern javascript based test api
        </Text>
        <Text variant="h4" pb="1.5rem" sx={{ cursor: 'pointer', '&:hover': { color: 'cyan' } }}>
          <Icon /> Cross browser support including Internet Explorer 11
        </Text>
        <Text variant="h4" pb="1.5rem" sx={{ cursor: 'pointer', '&:hover': { color: 'cyan' } }}>
          <Icon /> Tons of features and integrations
        </Text>
        <Text variant="h4" pb="1.5rem" sx={{ cursor: 'pointer', '&:hover': { color: 'cyan' } }}>
          <Icon /> Optional - dashboard integration ($500 per user, per year)
        </Text>
      </Box>
    </Box>
  );
}
