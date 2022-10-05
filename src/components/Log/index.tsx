import { ComponentType} from 'react'
import { Logs } from './styles'

type Props = {
  title: string,
  icon: ComponentType
  onClick?: () => void
}

export const Log = ({title, icon: Icon, ...rest}: Props) => {
  return (
    <Logs text={title} {...rest}>
      <span>{title}</span>
      <Icon/>
    </Logs>
  )
}