import Box from '@mui/material/Box';
import Text from '@mui/material/Typography';
import { TextListItem } from '../Shared/TextListItem';
import { TextList } from '../Shared/TextList';

export default function Screen(p) {
  return (
    <Box>
      <Text variant="h2">The Migration</Text>
      <Text variant="h3" color="cyan">
        The Good
      </Text>
      <TextList hoverColor="green">
        <TextListItem>Just swap the framework and everything else just works!</TextListItem>
        <TextListItem>Tests are running significantly faster</TextListItem>
        <TextListItem>Github integration out of the box</TextListItem>
        <TextListItem>Test recording</TextListItem>
        <TextListItem>Time travel debugging</TextListItem>
        <TextListItem>Integrated logs</TextListItem>
      </TextList>
    </Box>
  );
}
