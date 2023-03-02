import Style from "./style"
import c from "../../../../constants"
import skillsData from "../../../../data/skills.data"
import SkillCard from "./components/SkillCard"
import SectionTitle from "../../../../common/UI/Section/SectionTitle.style"
import SectionHeader from "../../../../common/UI/Section/SectionHeader.style"

const Skills = () => {
  const cards = skillsData.map(({ id, ...rest }) => (
    <SkillCard key={id} {...rest} />
  ))

  return (
    <Style.Section id={c.skillsSectionId}>
      <SectionHeader style={{ margin: "0.7rem" }}>
        <SectionTitle style={{ marginBottom: 0 }}>Skills</SectionTitle>
      </SectionHeader>
      <Style.Body>
        <Style.Scroll>
          <Style.CustomMarquee>{cards}</Style.CustomMarquee>
        </Style.Scroll>
      </Style.Body>
    </Style.Section>
  )
}

export default Skills
