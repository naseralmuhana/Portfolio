import Style from "./SkillCard.styled"
import selectImage from "../utils/selectImage"
import ProgressBar from "./ProgressBar"
import { styled } from "@mui/material/styles"
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip"

const SkillTooltip = styled(({ className, ...props }) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
    followCursor
    placement="top"
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.tertiary.main50,
    color: theme.palette.primary.main,
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "none",
  },
}))

const SkillCard = ({ skill: { label, progress } }) => {
  return (
    <SkillTooltip title={<ProgressBar progress={progress} />}>
      <Style.Wrapper className="skill-card">
        <Style.Image src={selectImage(label)} />
        <Style.Title>{label}</Style.Title>
      </Style.Wrapper>
    </SkillTooltip>
  )
}

export default SkillCard
