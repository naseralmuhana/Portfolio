import useScrollWindow from "../../../../hooks/useScrollWindow"
import LogoAnimation from "./components/Logo"
import Style from "./style"

const Header = () => {
  const trigger = useScrollWindow()

  return (
    <Style.Wrapper trigger={trigger}>
      <LogoAnimation />
      <div>Menu</div>
    </Style.Wrapper>
  )
}

export default Header
