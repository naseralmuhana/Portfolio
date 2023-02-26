import Style from "./SkillCard.styled"
import skillsImage from "../../../../../utils/skillsImage"
import ProgressBar from "./ProgressBar"

const SkillCard = ({ label, progress }) => {
  return (
    <Style.Tooltip title={<ProgressBar progress={progress} />}>
      <Style.Wrapper className="skill-card">
        <Style.Image src={skillsImage(label)} />
        <Style.Title>{label}</Style.Title>
      </Style.Wrapper>
    </Style.Tooltip>
  )
}

export default SkillCard
