import Tooltip from "../../../../../common/UI/Tooltip"
import { socialsHeaderData } from "../../../../../data/socials.data"
import Style from "./LeftContainer.style"

const LeftContainer = () => {
  const socialIcons = socialsHeaderData.map(({ href, icon, label }) => (
    <Tooltip title={label} key={label}>
      <a href={href} target="_blank" rel="noreferrer">
        <Style.SocialIcon component={icon} aria-label={label} />
      </a>
    </Tooltip>
  ))

  return (
    <Style.Wrapper>
      <Style.Body>{socialIcons}</Style.Body>
    </Style.Wrapper>
  )
}

export default LeftContainer
