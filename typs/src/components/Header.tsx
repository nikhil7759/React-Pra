import { type ReactNode } from "react"

type Headerprops = {
  image: {
    src: string
    alt: string
  }
  children: ReactNode
}

const Header = ({ image, children }: Headerprops) => {
  return (
    <header>
      <img src={image.src} alt={image.alt} />
      {children}
    </header>
  )
}

export default Header
