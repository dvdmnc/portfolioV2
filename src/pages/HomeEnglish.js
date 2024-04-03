import React from 'react'

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
import LinkedinTop from '../images/linkedin-top.png'
import GithubTop from '../images/github-top.png'
import one from '../images/numero-un.png'
import two from '../images/numero-2.png'
import three from '../images/numero-3.png'
import four from '../images/numero-quatre.png'

function HomeEnglish() {
    const skills = [{title:'Front End',img:frontend,languages:[{img:react,name:'React'},{img:js,name:'Javascript'}]},{title:'Back End',img: backend,languages:[{img:django,name:'Django'},{img:python,name:'Python'}]},{title:'Mobile',img:mobile,languages:[{img:react,name:'React Native'}]}]

    const services = [{title:'Defining your project',text:'Together we define your web and/or mobile project according to your needs and budget',img:one},{title:'Drawing up specifications', text: 'The specifications include the functionalities, graphic charter and size of your project',img:two},{title:'Development of your project',text:'Your project takes shape, up to the testing and final deployment phases',img:three},{title:'Maintenance',text:'A bug? New features to add? I\'ll keep your project up to date',img:four}]

    const certificates = [{date:'2018',img:'f(x)',title:'Bachelor',titleadd:'of Mathematics'},{date:'March 2023',img:'</>',title:'CS50\'X', titleadd:'Introduction to programming',details: ['Python','SQL','HTML & CSS','Algorithms & Data Structures']},{date:'May 2023',img:'www',title:'CS50\'W',titleadd:'Web Programming',details:['Python','Javascript','Django']},{date:'August 2023',img: 'Ai',title:'CS50\'AI',titleadd:'Introduction to Artificial Intelligence',details:['Machine Learning','Neural Networks', "Automatic Natural Language Processing"]},{date: 'October 2023',img:'App',title:'CS50\'M',titleadd:'Mobile App Development',details:['React principes fondamentaux et avancés (Context & Redux)','React Native','React Hooks (self-taught)']}]

    const projects = [{url:'https://youtu.be/nE8qP0K1IhE', img:LocalHospital, title:'IDEL Stock',description:'A mobile inventory management application designed for a private nursing practice', link:'View project on Youtube', stack:[react,firebase]},{url:'https://youtu.be/05ObRLxx9Pw', img:LibraryMusicIcon, title:'MusiQuiz', description:'A Musical Quiz web application designed for a professional musician', link:'View project on Youtube', stack:[js,react,django,postgre]},{url:'', img:LibraryMusicIcon, title:'Loungetime', description:'Presentation website of the Loungetime & Mrs Robinson band', link:'View project on Youtube', stack:[react,django]},{url:'https://youtu.be/X1uOWoI3A9Q', img:SailingIcon, title:'Yachting Conseil', description:'Reproduction of a boat sales website with NextJS and Material UI', link:'View project on Youtube', stack:[react,nextjs,mui]}]


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
    <div id="menu_socials">
        <div id="menu">
            <ul>
                <li><a href='/english'>Home</a></li>
                <li><a href='/'>Français</a></li>
                <li><a href='/contact'>Contact</a></li>
            </ul>
        </div>
        <div id="socials">
            <ul>
                <li><a href='https://www.linkedin.com/in/david-menechi-6828b6231/'><img src={LinkedinTop} /></a></li>
                <li><a href='https://github.com/dvdmnc'><img src={GithubTop} /></a></li>
            </ul>
        </div>
    </div>
    <Fab aria-label="Back to Top" onClick={scrollToTop} id='GoTop'>
        <ArrowUpwardIcon />
    </Fab>
    <div id='AboutMe'>
        <div id="Me">
            <h1>Hey, I'm David</h1>
            <h3>Web & Mobile Developer</h3>
            <h5>As a freelance full-stack developer, I integrate your design and develop your customized web and mobile applications. From setting up the specifications to deploying the final version of the project and maintenance, I offer you my expertise to bring your projects to a successful conclusion.</h5>
            <button><a href='/contact'>Contact me</a></button>
        </div>
        <img id='MePic' src={Me}/>
    </div>
    <h1 id='skillstitle'>My skills</h1>
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent='center' alignItems='center' padding={5} id='skills'>
        {skills.map((skill) => (
            <Motion key={skill.title} children={
                <SkillsPaper square={false} className='skillsbox'>
                    <img className='top-icon' src={skill.img}/>
                    <br></br>
                    <h2>{skill.title}</h2>
                    <Grid container justifyContent='center'>
                        <Grid item md={6}>
                        {skill.languages.map((language) => (
                            <div className='align' key={language.name}>
                                <img className='icon' src={language.img}/>
                                <h4>{language.name}</h4>
                            </div>
                        ))}
                        </Grid>
                    </Grid>
                </SkillsPaper>
                } />
        ))}
    </Stack>
    <Grid container className='services' spacing={2}>
        <Grid item lg={6} >
            <h1>My <span>services</span></h1>
            <h3>I support you from A to Z in your web and/or mobile project
            </h3>
        </Grid>
        <Grid item lg={6} className='services-container'>
            {services.map((service) => (
            <div className='service-container' key={service.title}>
                <img src={service.img} />
                <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                </div>
            </div>
            ))}
        </Grid>
    </Grid>
    <div id='my-background'>
        <div id='title'>
            <h3>My</h3>
            <h1>Background</h1>
        </div>
        <Grid container spacing={2} className='timeline'>
             {certificates.map((certificate) => (
                <Grid item md={2.4} xs={12} className='element' key={certificate.title}>
                    <p>{certificate.date}</p>
                    <h4>{certificate.img}</h4>
                    <h5>{certificate.title}</h5>
                    <p className={certificate.details? 'add-on' : ''}>{certificate.titleadd}</p>
                    <ul>
                        {certificate.details?.map((detail,index) => (
                            <li key={index}>{detail}</li>
                        ))}
                    </ul>
                </Grid>
             ))
             }   
        </Grid>
    </div>
    {/* <CustomizedTimelineEnglish/> */}
    <Stack direction='column' spacing={2} justifyContent='center' alignItems='center' padding={5} id='projects'>
        <h1>My Projects</h1>
        <p>Here are a few apps/websites i've worked on</p>
        <Grid container>
            {projects.map((project) => (
               <Grid item xs={12} sm={6} lg={4} key={project.title}>
                <Motion children={
                <ProjectCard href={project.url} Src={project.img} title={project.title} description={project.description} link={project.link} stack={project.stack}/>
                }/>
           </Grid> 
            ))}
        </Grid>
    </Stack>
    </>
  )
}

export default HomeEnglish