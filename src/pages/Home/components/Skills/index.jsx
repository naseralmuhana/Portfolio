import Style from "./styled"
import c from "../../../../constants"
import skillsData from "../../../../data/skills.data"
import SkillCard from "./components/SkillCard"

const Skills = () => {
  const cards = skillsData.map((skill) => (
    <SkillCard key={skill.id} skill={skill} />
  ))

  return (
    <Style.Section id={c.skillsSectionId}>
      <header>
        <div>Skills</div>
      </header>
      <Style.Body>
        <Style.Scroll>
          <Style.CustomMarquee {...marqueeSettings}>
            {cards}
          </Style.CustomMarquee>
        </Style.Scroll>
      </Style.Body>
    </Style.Section>
  )
}

export default Skills

const marqueeSettings = {
  gradient: false,
  speed: 80,
  pauseOnHover: true,
  pauseOnClick: true,
}
