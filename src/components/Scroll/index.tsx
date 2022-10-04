import { Scroller } from "./styles"

export const Scroll = ({children}: {children: React.ReactNode}) => {
  return (
    <Scroller>
      {children}
    </Scroller>
  )
}