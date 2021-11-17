import Timeline, { TimelineProps } from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import React, { ReactElement } from 'react';

type Props = {
  position?: TimelineProps['position'];
  fontSize?: string;
  hoverFontSize?: string;
  items: (string | ReactElement)[];
};

export const TimelineComponent: React.FC<Props> = (props) => {
  const { position = 'alternate', fontSize = '1.5rem', hoverFontSize = '2rem', items } = props;
  return (
    <Timeline position={position}>
      {items.map((item, index) => {
        return (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              {index !== items.length - 1 ? <TimelineConnector /> : null}
            </TimelineSeparator>
            <TimelineContent
              fontSize={fontSize}
              sx={{
                transition: '0.2s ease-in',
                cursor: 'pointer',
                '&:hover': { fontSize: hoverFontSize },
              }}
            >
              {item}
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};
