import Box from '@mui/material/Box';
import Text from '@mui/material/Typography';
import Icon from '@mui/icons-material/LensTwoTone';
import { TextListItem } from '../Shared/TextListItem';
import { TextList } from '../Shared/TextList';

export default function Screen(p) {
  return (
    <Box>
      <Text variant="h2">The Migration</Text>
      <Text variant="h3" color="red">
        The Ugly
      </Text>
      <TextList hoverColor="deeppink">
        <TextListItem>No support for test metadata out of the box</TextListItem>
        <TextListItem>Sh*t API compared to Testcafe</TextListItem>
        <TextListItem>Poor typescript support from Mocha test runner</TextListItem>
        <TextListItem>Cannot interact with window object (Maybe a good thing)</TextListItem>
        <TextListItem>No concurrency out of the box (Needs the dashboard)</TextListItem>
      </TextList>
    </Box>
  );
}
