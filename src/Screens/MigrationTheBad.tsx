import Box from '@mui/material/Box';
import Text from '@mui/material/Typography';
import { TextListItem } from '../Shared/TextListItem';
import { TextList } from '../Shared/TextList';

export default function Screen(p) {
  return (
    <Box>
      <Text variant="h2">The Migration</Text>
      <Text variant="h3" color="orange">
        The Bad
      </Text>
      <TextList hoverColor="orange">
        <TextListItem>Have to rewrite all the tests</TextListItem>
        <TextListItem>No support for internet explorer (meh)</TextListItem>
        <TextListItem>Test framework is too fast</TextListItem>
      </TextList>
    </Box>
  );
}
