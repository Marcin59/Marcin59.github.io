import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from '@mui/material';

export default function ExperienceTimeline() {
  return (
    <Timeline position="alternate">

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h5">GHOST Member</Typography>
          <Typography variant='body2'>"ML in Timeseries" science club at PUT</Typography>
          <Typography variant='body1' sx = {{margin: "5px 0 0 10px"}}>
            <ul>
              <li>
                Learning basics about forecasting of timeseries data
              </li>
              <li>
                Working in teams on Kaggle price prediction competition
              </li>
            </ul>
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h5">Frontend Developer</Typography>
          <Typography variant='body2'>Stock Trade IQ</Typography>
          <Typography variant='body1' sx = {{margin: "5px 10px 0 0", direction: 'rtl'}}>
            <ul>
              <li>
                Developing React app for stock prices analysis
              </li>
              <li>
                Developing and maintaining applications using Azure AD B2C Service
              </li>
              <li>
                Building CI/CD pipelines with Azure DevOps
              </li>
              <li>
                Using Git for code versioning and collaboration
              </li>
              <li>
                Consuming REST API
              </li>
              <li>
                Working effectively within a team environment
              </li>
              <li>
                Applying Kanban practices in project managment
              </li>
            </ul>
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
        <Typography variant="h5">Wordpress Developer</Typography>
          <Typography variant='body2'>BCSG</Typography>
          <Typography variant='body1' sx = {{margin: "5px 0 0 10px"}}>
            <ul>
              <li>
                Developing portfolio website for Software Development company
              </li>
              <li>
                Deploying the app to a hosting platform
              </li>
            </ul>
          </Typography>
        </TimelineContent>
      </TimelineItem>

    </Timeline>
  );
}
