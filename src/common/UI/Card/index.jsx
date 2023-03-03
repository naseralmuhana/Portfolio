import Style from "./style"

const Card = ({ title, content, startYear, endYear, avatarSvg }) => {
  return (
    <Style.Wrapper>
      <Style.ImageContainer>{avatarSvg}</Style.ImageContainer>
      <Style.DescriptionContainer>
        <Style.Duration>
          {startYear}-{endYear}
        </Style.Duration>
        <Style.Title>{title}</Style.Title>
        <Style.Content>{content}</Style.Content>
      </Style.DescriptionContainer>
    </Style.Wrapper>
  )
}

export default Card
