import React from 'react'

import Menu from '../components/Menu'
import ProjectCard from '../components/ProjectCard';
import CustomizedTimeline from '../components/Timeline';
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
import un from '../images/numero-un.png'
import deux from '../images/numero-2.png'
import trois from '../images/numero-3.png'
import quatre from '../images/numero-quatre.png'

function Home() {

    const skills = [{title:'Front End',img:frontend,languages:[{img:react,name:'React'},{img:js,name:'Javascript'}]},{title:'Back End',img:backend,languages:[{img:django,name:'Django'},{img:python,name:'Python'}]},{title:'Mobile',img:mobile,languages:[{img:react,name:'React Native'}]}]

    const services = [{titre:'Définition de votre projet',texte:'Nous définissons ensemble votre projet web et/ou mobile selon vos besoins et votre budget',img:un},{titre:'Elaboration du cahier des charges', texte:'Le cahier des charges comprend les fonctionnalités, la charte graphique et la taille de votre projet',img:deux},{titre:'Développement de votre projet',texte:'Votre projet prend forme, jusqu\'aux phases de test et déploiement final',img:trois},{titre:'Maintenance',texte:'Un bug ? De nouvelles fonctionnalités à ajouter ? Je vous propose de maintenir votre projet à jour',img:quatre}]

    const certificates = [{date:'2018',img:'f(x)',title:'Licence',titleadd:'De Mathématiques'},{date:'Mars 2023',img:'</>',title:'CS50\'X', titleadd:'Introduction à la programmation',details:['Python','SQL','HTML & CSS','Algorithmes &\n Structures de données']},{date:'Mai 2023',img:'www',title:'CS50\'W',titleadd:'Programmation Web',details:['Python','Javascript','Django']},{date:'Août 2023',img:'Ai',title:'CS50\'AI',titleadd:'Introduction à l\'Intelligence Artificielle',details:['Apprentissage Automatique','Réseaux Neuronaux',"Traitement automatique de langage naturel"]},{date:'Octobre 2023',img:'App',title:'CS50\'M',titleadd:'Développement d\'applications mobiles',details:['React principes fondamentaux et avancés (Context & Redux)','React Native','React Hooks (autodidacte)']}]

    const projects = [{url:'https://youtu.be/nE8qP0K1IhE', img:LocalHospital, title:'IDEL Stock',description:'Une application mobile de gestion d\'inventaire conçu pour un cabinet d\'infirmière libérales', link:'Voir le projet sur Youtube', stack:[react,firebase]},{url:'https://youtu.be/05ObRLxx9Pw', img:LibraryMusicIcon, title:'MusiQuiz', description:'Une application web de Quiz Musical conçu pour un musicien professionel', link:'Voir le projet sur Youtube', stack:[js,react,django,postgre]},{url:'https://youtu.be/AChvKgw0TPY', img:LibraryMusicIcon, title:'Loungetime', description:'Site web de présentation du groupe de musique Loungetime & Mrs Robinson', link:'Voir le projet sur Youtube', stack:[react,django]},{url:'https://youtu.be/X1uOWoI3A9Q', img:SailingIcon, title:'Yachting Conseil', description:'Reproduction d\'un site web de vente de bateau avec NextJS et Material UI', link:'Voir le projet sur Youtube', stack:[react,nextjs,mui]}]

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
                <li><a href='/'>Accueil</a></li>
                <li><a href='/english'>English</a></li>
                <li><a href='/contact'>Contact</a></li>
            </ul>
        </div>
        <div id="socials">
            <ul>
                <li><a href='https://www.linkedin.com/in/david-menechi-6828b6231/'><img src={LinkedinTop} alt='linkedin-icon'/></a></li>
                <li><a href='https://github.com/dvdmnc'><img src={GithubTop} alt='github-icon'/></a></li>
            </ul>
        </div>
    </div>
    <Fab aria-label="Back to Top" onClick={scrollToTop} id='GoTop'>
        <ArrowUpwardIcon />
      </Fab>
    <div id='AboutMe'>
        <div id="Me">
            <h1>Hey, Moi c'est David</h1>
            <h3>Développeur Web & Mobile</h3>
            <h5>Développeur full-stack en freelance, j'intègre votre design et développe vos applications web et mobiles sur mesures. De la mise en place du cahier des charges jusqu'au déploiement de la version finale du projet et la maintenance, je vous propose mon expertise afin de mener à bien vos projets</h5>
            <button><a href='/contact'>Contactez-moi</a></button>
        </div>
        <img id='MePic' src={Me} alt='David'/>
    </div>
    <h1 id='skillstitle'>Mes compétences</h1>
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent='center' alignItems='center' padding={5} id='skills'>
        {skills.map((skill) => (
            <Motion key={skill.title} children={
                <SkillsPaper square={false} className='skillsbox'>
                    <img className='top-icon' src={skill.img} alt={skill.title}/>
                    <br></br>
                    <h2>{skill.title}</h2>
                    <Grid container justifyContent='center'>
                        <Grid item md={6}>
                        {skill.languages.map((language) => (
                            <div className='align' key={language.name}>
                                <img className='icon' src={language.img} alt={language.name}/>
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
            <h1>Mes <span>services</span></h1>
            <h3>Je vous accompagne de A à Z dans votre projet web et/ou mobile
            </h3>
        </Grid>
        <Grid item lg={6} className='services-container'>
            {services.map((service,index) => (
            <div className='service-container' key={service.titre}>
                <img src={service.img} alt={`service ${index+1}`}/>
                <div>
                    <h3>{service.titre}</h3>
                    <p>{service.texte}</p>
                </div>
            </div>
            ))}
        </Grid>
    </Grid>
    <div id='my-background'>
        <div id='title'>
            <h3>Mon</h3>
            <h1>Parcours</h1>
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
    {/* <CustomizedTimeline/> */}
    <Stack direction='column' spacing={2} justifyContent='center' alignItems='center' padding={5} id='projects'>
        <h1>Mes réalisations</h1>
        <p>Quelques projets sur lesquels j'ai travaillé</p>
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

export default Home