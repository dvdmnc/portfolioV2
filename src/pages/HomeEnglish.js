import React from 'react'

import '../fonts.css'

import Menu from '../components/Menu'
import ProjectCard from '../components/ProjectCard';
import CustomizedTimelineEnglish from '../components/TimelineEnglish';
import ScrollBar from '../components/ScrollBar';
import Motion from '../components/Motion';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles';
import { LocalHospital } from '@mui/icons-material';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SailingIcon from '@mui/icons-material/Sailing';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import Me from '../images/mypic.png'
import Github from '../images/github-sign.png'
import Linkedin from '../images/linkedin.png'
import frontend from '../images/contenu-web.png'
import backend from '../images/back-end.png'
import mobile from '../images/developpement-mobile.png'
import react from '../images/react.png'
import js from '../images/js-icon.png'
import python from '../images/python.png'
import django from '../images/django.png'
import firebase from '../images/firebase.png'
import postgre from '../images/postgre.png'
import nextjs from '../images/nextjs.png'
import mui from '../images/mui.png'

function HomeEnglish() {
    const SkillsPaper = styled(Paper)(({ theme }) => ({
        width: '33vw',
        [theme.breakpoints.down('md')]: {
            width:'75vw',
            height:'500px'
        },
        height: '350px',
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: '#FFF7C2',
        border: '1px solid #F3D673',
        overflow:'auto'
      }));

      const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      };
  return (
    <>
    <ScrollBar />
    <div id='hamburger'><Menu/></div>
    <Fab aria-label="Back to Top" onClick={scrollToTop} id='GoTop'>
        <ArrowUpwardIcon />
    </Fab>
    <div id='AboutMe'>
        <div id="Me">
            <h1>Hey, I'm David 👋<br></br> Web & Mobile Developer</h1>
            <h3>I build things for the web ✌️</h3>
            <div>
                <button><a href='https://github.com/dvdmnc'><img id='github' src={Github}/>Github</a></button>
                <button><a href='https://www.linkedin.com/in/david-menechi-6828b6231/'><img id='linkedin' src={Linkedin}/>Linkedin</a></button>
            </div>
        </div>
        <img id='MePic' src={Me}/>
    </div>
    <h1 id='skillstitle'>My skills</h1>
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent='center' alignItems='center' padding={5} id='skills'>
        <Motion children={
            <SkillsPaper square={false} className='skillsbox'>
                <img className='top-icon' src={frontend}/>
                <br></br>
                <h2>Front End</h2>
                <Grid container justifyContent='center'>
                    <Grid item md={6}>
                        <div className='align'>
                            <img className='icon' src={react}/>
                            <h4>React</h4>
                        </div>
                        <div className='align'>
                            <img className='icon' src={js}/>
                            <h4>Javascript</h4>
                        </div>
                    </Grid>
                </Grid>
            </SkillsPaper>
        }/>
        <Motion children={
            <SkillsPaper square={false} className='skillsbox'>
                <img className='top-icon' src={backend}/>
                <br></br>
                <h2>Back End</h2>
                <br></br>
                <Stack direction='row' className='skill'>
                    <img className='icon' src={django}/>
                    <h4>Django</h4>
                </Stack>
                <Stack direction='row' className='skill'>
                <img className='icon' src={python}/>
                <h4>Python</h4>
            </Stack>
            </SkillsPaper>
        }/>
        <Motion children={
            <SkillsPaper square={false} className='skillsbox'>
                <img className='top-icon' src={mobile}/>
                <br></br>
                <h2>Mobile</h2>
                <br></br>
                <Stack direction='row' className='skill'>
                    <img className='icon' src={react}/>
                    <h4>React Native</h4>
                </Stack>
            </SkillsPaper>
        }/>
    </Stack>
    <CustomizedTimelineEnglish/>
    <Stack direction='column' spacing={2} justifyContent='center' alignItems='center' padding={5} id='projects'>
        <h1>My Projects</h1>
        <p>Here are a few apps/websites i've worked on</p>
        <Grid container>
            <Grid item xs={12} sm={6} lg={4} >
                <Motion children={
                    <ProjectCard href={'https://youtu.be/jYsb_sxzcPY'} Src={LocalHospital} title={'IDEL Stock'} description={'A mobile inventory management application designed for a liberal nursing practice'} link={'Watch on Youtube'} stack={[react,firebase]}/> 
                }/>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                <Motion children={
                    <ProjectCard href={'https://youtu.be/8Nyzr3FPNNA'} Src={LibraryMusicIcon} title={'MusiQuiz'} description={'A Music Quiz web application designed for a professional musician'} link={'Watch on Youtube'} stack={[js,react,django,postgre]}/>
                }/>
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                <Motion children={
                    <ProjectCard href={'https://youtu.be/X1uOWoI3A9Q'} Src={SailingIcon} title={'Yachting Conseil'} description={'Copy of a boat sales website with NextJS and Material UI'} link={'Watch on Youtube (French Version)'} stack={[react,nextjs,mui]}/>
                }/>
            </Grid>
        </Grid>
    </Stack>
    <footer id='footer'>
        <h5><a href='https://www.linkedin.com/in/david-menechi-6828b6231/'>Linkedin</a></h5>
        <h5><a href='https://github.com/dvdmnc'>Github</a></h5>
        <h5><a href='//api.whatsapp.com/send?phone=33616570358&text=Hello, i contact you from your website'>Whatsapp</a></h5>
        <h5><a href='mailto:d.menechi@gmail.com?subject=Mail from your site'>Email</a></h5>
    </footer>
    </>
  )
}

export default HomeEnglish