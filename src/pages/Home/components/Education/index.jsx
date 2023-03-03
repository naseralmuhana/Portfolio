import c from "../../../../constants"
import Shared from "../../../../common/UI/Section/shared.style"
import SectionTitle from "../../../../common/UI/Section/SectionTitle.style"
import Card from "../../../../common/UI/Card"
import EducationSvg from "../../../../assets/svg/EducationSvg"
import educationData from "../../../../data/education.data"
import EducationHatSvg from "../../../../assets/svg/EducationHatSvg"

const Education = () => {
  const cards = educationData.map((edu) => (
    <Card
      key={edu.id}
      title={edu.course}
      content={edu.institution}
      startYear={edu.startYear}
      endYear={edu.endYear}
      avatarSvg={<EducationHatSvg />}
    />
  ))
  return (
    <Shared.Section id={c.educationSectionId}>
      <Shared.SectionBody>
        <Shared.SectionDescriptionContainer>
          <SectionTitle>Education</SectionTitle>
          {cards}
        </Shared.SectionDescriptionContainer>
        <Shared.SectionImageContainer>
          <EducationSvg />
        </Shared.SectionImageContainer>
      </Shared.SectionBody>
    </Shared.Section>
  )
}

export default Education
