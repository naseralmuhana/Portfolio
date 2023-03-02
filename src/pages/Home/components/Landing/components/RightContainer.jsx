import headerData from "../../../../../data/header.data"
import Style from "./RightContainer.style"
import RightContainerActions from "./RightContainerActions"

const RightContainer = () => {
  const { title, name, description, resumePdf } = headerData
  return (
    <Style.Wrapper>
      <Style.Body>
        <Style.Title>{title}</Style.Title>
        <Style.Name>{name}</Style.Name>
        <Style.Description>{description}</Style.Description>
        <RightContainerActions resumePdf={resumePdf} />
      </Style.Body>
    </Style.Wrapper>
  )
}

export default RightContainer
