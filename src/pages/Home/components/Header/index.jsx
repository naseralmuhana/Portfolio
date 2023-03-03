import useScrollTrigger from "@mui/material/useScrollTrigger"
import LogoAnimation from "./components/Logo"

import Style from "./style"

const Header = () => {
  const trigger = useScrollTrigger({ disableHysteresis: true })
  return (
    <Style.Wrapper trigger={trigger}>
      <LogoAnimation trigger={trigger} />
      <div className="trigger">
        <span />
      </div>
    </Style.Wrapper>
  )
}

export default Header
