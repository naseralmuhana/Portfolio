import SectionTitle from "../../../../common/UI/Section/SectionTitle.style"
import c from "../../../../constants"
import aboutData from "../../../../data/about.data"
import AboutSvg from "../../../../assets/svg/AboutSvg"
import Style from "./style"

const About = () => {
  return (
    <Style.Section id={c.aboutSectionId}>
      <Style.LineContainer>
        <Style.Circle />
        <Style.Circle />
        <Style.Line />
      </Style.LineContainer>
      <Style.Body>
        <Style.DescriptionContainer>
          <SectionTitle>{aboutData.title}</SectionTitle>
          <Style.Description>
            {aboutData.description1}
            <br />
            <br />
            {aboutData.description2}
          </Style.Description>
        </Style.DescriptionContainer>
        <Style.ImageContainer>
          <AboutSvg />
        </Style.ImageContainer>
      </Style.Body>
    </Style.Section>
  )
}

export default About
