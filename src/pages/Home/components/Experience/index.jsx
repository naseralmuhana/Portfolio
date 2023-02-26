import c from "../../../../constants"
import Shared from "../../../../common/UI/Section/shared.style"
import SectionTitle from "../../../../common/UI/Section/SectionTitle.style"
import ExperienceSvg from "../../../../assets/svg/ExperienceSvg"
import Card from "../../../../common/UI/Card"
import experienceData from "../../../../data/experience.data"
import ExperienceBagSvg from "../../../../assets/svg/ExperienceBagSvg"

const Experience = () => {
  console.log("Experience")
  const cards = experienceData.map((exp) => (
    <Card
      key={exp.id}
      title={exp.jobTitle}
      content={exp.company}
      startYear={exp.startYear}
      endYear={exp.endYear}
      avatarSvg={<ExperienceBagSvg />}
    />
  ))
  return (
    <Shared.Section id={c.experienceSectionId}>
      <Shared.SectionBody>
        <Shared.SectionImageContainer sx={{ marginLeft: "7%" }}>
          <ExperienceSvg />
        </Shared.SectionImageContainer>
        <Shared.SectionDescriptionContainer
          sx={{ alignItems: "flex-end", marginLeft: 0, marginRight: "2rem" }}
        >
          <SectionTitle>Experience</SectionTitle>
          {cards}
        </Shared.SectionDescriptionContainer>
      </Shared.SectionBody>
    </Shared.Section>
  )
}

export default Experience
