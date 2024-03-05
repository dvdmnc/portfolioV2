import * as React from 'react';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Math from '../images/math.png'
import CS from '../images/algorithme.png'
import Web from '../images/contenu-web.png'
import AI from '../images/ai.png'
import ReactNative from '../images/computer-science.png'

export default function CustomizedTimelineEnglish() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'))

    return (
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            2018
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: '#4F3422' }}/>
            <TimelineDot sx={{bgcolor: '#FFF7C2', border:'1px solid #F3D673'}} >
              <img src={Math} />
            </TimelineDot >
            <TimelineConnector sx={{ bgcolor: '#4F3422' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant={matches?'h6':'body2'} component="span">
              Bachelor's degree in Mathematics
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            March 2023
          </TimelineOppositeContent>
          <TimelineSeparator >
            <TimelineConnector sx={{ bgcolor: '#4F3422' }}/>
            <TimelineDot sx={{bgcolor: '#FFF7C2', border:'1px solid #F3D673'}}>
                <img src={CS} />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: '#4F3422' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant={matches?'h6':'body2'} component="span">
              CS50'x Introduction to computer Science
            </Typography>
            <Typography display={matches?'block':'none'}>Python, SQL, HTML & CSS, Algorithms & Data Structures</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
            >
                May 2023
            </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: '#4F3422' }}/>
            <TimelineDot sx={{bgcolor: '#FFF7C2', border:'1px solid #F3D673'}}>
                <img src={Web} />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: '#4F3422' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant={matches?'h6':'body2'} component="span">
              CS50'w Web Programming with Python and Javascript
            </Typography>
            <Typography display={matches?'block':'none'}>Building web applications and websites with Django & JS</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
            >
                August 2023
            </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: '#4F3422' }} />
            <TimelineDot sx={{bgcolor: '#FFF7C2', border:'1px solid #F3D673'}}>
                <img src={AI} />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: '#4F3422' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant={matches?'h6':'body2'} component="span">
              CS50'AI Introduction to Artificial Intelligence
            </Typography>
            <Typography display={matches?'block':'none'}>Machine learning, neural networks, natural language processing</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
            >
                October 2023
            </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: '#4F3422' }} />
            <TimelineDot sx={{bgcolor: '#FFF7C2', border:'1px solid #F3D673'}}>
                <img src={ReactNative} />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: '#4F3422' }}/>
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant={matches?'h6':'body2'} component="span">
              CS50 Mobile App Development with React Native
            </Typography>
            <Typography display={matches?'block':'none'}>React fundamentals and advanced principles (Context, Redux), React Native, application creation with EXPO (supplemented by React Hooks self-taught)
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    );
  }