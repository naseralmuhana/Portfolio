import c from "../../../../constants"
import Style from "./style"
import LeftContainer from "./components/LeftContainer"
import RightContainer from "./components/RightContainer"
import headerData from "../../../../data/header.data"

const Landing = () => {
  return (
    <Style.Section id={c.landingSectionId}>
      <LeftContainer />
      <Style.Blob src={headerData.image} />
      <RightContainer />
    </Style.Section>
  )
}

export default Landing
