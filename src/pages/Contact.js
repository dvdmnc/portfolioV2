import { Box, Typography, Button, TextField } from "@mui/material"

import CustomizedInput from "../components/CustomizedInput"
import Menu from "../components/Menu"

import LinkedinTop from '../images/linkedin-top.png'
import GithubTop from '../images/github-top.png'

import { useState, useRef } from "react"

import emailjs from '@emailjs/browser';


function Contact() {
   const[sent, setSent] = useState(false)
    const[err, setError] = useState(false)

  const form = useRef()

    
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3z4129d', 'template_8bb08ol', form.current, {
        publicKey: 'S_khTmv6KE257bfDF',
      })
      .then(
        () => {
          setSent(true)
          setTimeout(() => {
            setSent(false)
          }, 5000)
        },
        (error) => {
          setError(true)
          setTimeout(() => {
            setError(false)
          }, 5000)
        },
      );
  };
  return (
    <Box width={'100vw'} height={'100vh'} bgcolor={'#FFC53D'}>
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
                <li><a href='https://www.linkedin.com/in/david-menechi-6828b6231/'><img src={LinkedinTop} /></a></li>
                <li><a href='https://github.com/dvdmnc'><img src={GithubTop} /></a></li>
            </ul>
        </div>
    </div>
    <Box display={"flex"} justifyContent={'center'} alignItems={'center'} paddingTop={16} >
        <form id="contact-form" onSubmit={sendEmail} ref={form}>
            <Box className="contact">
                <Typography variant="h4" textAlign="center" padding={2} fontWeight={600}>
                    Contactez-moi
                </Typography>
                <CustomizedInput type="email" name="email" label="Email" />
                <CustomizedInput type="text" name="subject" label="Sujet" />
                <TextField
                    label="Message"
                    multiline
                    rows={4}
                    InputProps={{style: {borderRadius:10,fontSize:20}}}
                    InputLabelProps={{style: {color:"#4F3422"}}}
                    name="message"
                    />
                <Button type="submit" className="submit"
                >
                    Envoyer
                </Button>
                {sent ? <p id="success">Message envoyé, je vous répondrais dès que possible !</p> : null}
                {err ? <p id="error">Il semblerait qu'il y ai un problème.. Veuillez réessayer plus tard. Vous pouvez sinon me contacter au 06 16 57 03 58</p> : null}
            </Box>
        </form>
    </Box>
    </Box>
  )
}

export default Contact