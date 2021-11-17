import Box from '@mui/material/Box';
import Text from '@mui/material/Typography';

export default function Screen(p) {
  return (
    <Box>
      <Text variant="h2">What is Pulse?</Text>
      <iframe
        style={{ border: 'none' }}
        width="1200"
        height="800"
        src="https://whimsical.com/embed/JFB6sJ4fkCo8pu6emFD6CW@2Ux7TurymNFmB5QbYPrR"
      />
    </Box>
  );
}
