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

export default function CustomizedTimeline() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    return (
      <Timeline position='alternate'>
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
              Licence de Mathématiques
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            Mars 2023
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
              CS50'x Introduction à la programmation
            </Typography>
            <Typography display={matches?'block':'none'}>Python, SQL, HTML & CSS, Algorithmes & Structures de données</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
            >
                Mai 2023
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
              CS50'w Programmation Web avec Python & Javascript
            </Typography>
            <Typography display={matches?'block':'none'}>Construction d'applications et sites webs avec Django & JS</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
            >
                Aout 2023
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
              CS50'AI Introduction à l'intelligence artificielle
            </Typography>
            <Typography display={matches?'block':'none'}>Apprentissage automatique, réseaux neuronaux, traitement automatique de
langage naturel</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
            >
                Octobre 2023
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
              CS50'm Développement d'applications mobiles avec React Native
            </Typography>
            <Typography display={matches?'block':'none'}>React principes fondamentaux et avancés (Context, Redux), React Native,
création d'application avec EXPO (Complété par React Hooks en
autodidacte)
</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    );
  }