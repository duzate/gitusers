import {useState} from 'react'
import { Tab } from "../Tab"
import { Container } from "./styles"
import {BiHomeAlt} from 'react-icons/bi'
import {FiGithub} from 'react-icons/fi'
import {MdOutlinePeopleAlt} from 'react-icons/md'

export const Footer = () => {
 
  return(
    <Container>
      <Tab icon={BiHomeAlt} title='Home' link="/home" />
      <Tab icon={FiGithub} title='Repos' link="/repos"/>
      <Tab icon={MdOutlinePeopleAlt} title='Seguidores' link="/followers"/>
      <Tab icon={MdOutlinePeopleAlt} title='Seguindo'link="/following"/>
    </Container>
  )
}