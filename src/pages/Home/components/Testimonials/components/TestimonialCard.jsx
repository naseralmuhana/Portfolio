import Style from "./TestimonialCard.style"

const TestimonialCard = ({ name, title, text, image }) => {
  return (
    <Style.Wrapper>
      <Style.Body>
        <Style.ImageContainer>
          <img src={image} alt={name} />
        </Style.ImageContainer>
        <Style.DetailsContainer>
          <p>{text}</p>
          <h1>{name}</h1>
          <h4>{title}</h4>
        </Style.DetailsContainer>
      </Style.Body>
    </Style.Wrapper>
  )
}

export default TestimonialCard
