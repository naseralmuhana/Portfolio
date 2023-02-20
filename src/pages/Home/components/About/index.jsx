import { useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import c from "../../../../constants"
import aboutData from "../../../../data/about.data"
import { SectionTitle } from "../shared.style"
// prettier-ignore
import { 
  Body, Description, DescriptionContainer, Image, ImageContainer, Section, Circle, Line, LineContainer 
} from "./style"

const About = () => {
  const theme = useTheme()

  const matchLg = useMediaQuery(theme.breakpoints.between("smd", "sxl"))
  const matchSmd = useMediaQuery(theme.breakpoints.down("smd"))
  const matchSm = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Section id={c.aboutSectionId}>
      {/* Top Line */}
      <LineContainer>
        <Circle />
        <Circle />
        <Line />
      </LineContainer>
      {/* Body */}
      <Body>
        {/* Description & Title Container */}
        <DescriptionContainer>
          {/* title */}
          <SectionTitle>{aboutData.title}</SectionTitle>
          {/* Description */}
          <Description>
            {aboutData.description1}
            <br />
            <br />
            {aboutData.description2}
          </Description>
        </DescriptionContainer>
        {/* Image */}
        <ImageContainer>
          <Image
            primary={theme.palette.primary.main}
            deepPrimary={theme.palette.primary.dark}
            secondary={theme.palette.tertiary.main}
            width={matchLg ? "300" : matchSmd ? "250" : matchSm ? "200" : "380"}
          />
        </ImageContainer>
      </Body>
    </Section>
  )
}

export default About
