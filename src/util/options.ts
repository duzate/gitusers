import {BiHomeAlt} from 'react-icons/bi'
import {FiGithub} from 'react-icons/fi'
import {MdOutlinePeopleAlt} from 'react-icons/md'

export const options = [
  {id: '1', title: 'Home', icon: BiHomeAlt, link: '/home'},
  {id: '2', title: 'Repos', icon: FiGithub, link: '/repos'},
  {id: '3', title: 'Seguidores', icon: MdOutlinePeopleAlt, link: '/followers'},
  {id: '4', title: 'Seguindo', icon: MdOutlinePeopleAlt, link: '/following'},
]