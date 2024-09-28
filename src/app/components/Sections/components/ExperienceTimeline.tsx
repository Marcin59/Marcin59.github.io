"use client";
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faWordpressSimple } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons';
import { TimelineOppositeContent } from '@mui/lab';
import { motion } from 'framer-motion';

export default function ExperienceTimeline() {
  return (
    <Timeline position="alternate">

      <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body1"
          >
            <motion.div
              initial={{opacity: 0, x: -25}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{ once: true }}
              transition={{duration: 1, delay: 0.6}}
            >
              October 2023 - Current
            </motion.div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='primary'>
            <FontAwesomeIcon icon={faMagnifyingGlassChart} size='2x'/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <motion.div
            initial={{opacity: 0, x: 25}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{ once: true }}
            transition={{duration: 1, delay: 0.5}}
          >
            <Typography variant="h5">GHOST Member</Typography>
            <Typography variant='body2'>ML in Timeseries science club at PUT</Typography>
            <Box sx = {{margin: "5px 0 0 10px"}}>
              <ul>
                <li>
                  Learning basics about forecasting of timeseries data
                </li>
                <li>
                  Working in teams on Kaggle price prediction competition
                </li>
              </ul>
            </Box>
          </motion.div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body1"
          >
            <motion.div
              initial={{opacity: 0, x: 25}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{ once: true }}
              transition={{duration: 1, delay: 1.1}}
            >
              May 2022 - August 2023
            </motion.div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='primary'>
            <FontAwesomeIcon icon={faReact} size='2x'/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <motion.div
            initial={{opacity: 0, x: -25}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{ once: true }}
            transition={{duration: 1, delay: 1.0}}
          >
            <Typography variant="h5">Frontend Developer</Typography>
            <Typography variant='body2'>Stock Trade IQ</Typography>
            <Box sx = {{margin: "5px 10px 0 0", direction: 'rtl'}}>
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
            </Box>
          </motion.div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body1"
          >
            <motion.div
              initial={{opacity: 0, x: -25}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{ once: true }}
              transition={{duration: 1, delay: 1.6}}
            >
              July 2021 - August 2021
            </motion.div>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='primary'>
            <FontAwesomeIcon icon={faWordpressSimple} size='2x'/>
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <motion.div
            initial={{opacity: 0, x: 25}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{ once: true }}
            transition={{duration: 1, delay: 1.5}}
          >
            <Typography variant="h5">Wordpress Developer</Typography>
            <Typography variant='body2'>BCSG</Typography>
            <Box sx = {{margin: "5px 0 0 10px"}}>
              <ul>
                <li>
                  Developing portfolio website for Software Development company
                </li>
                <li>
                  Deploying the app to a hosting platform
                </li>
              </ul>
            </Box>
          </motion.div>
        </TimelineContent>
      </TimelineItem>

    </Timeline>
  );
}
