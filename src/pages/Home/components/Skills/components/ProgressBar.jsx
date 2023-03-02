import useProgressWidth from "../hooks/useProgressWidth"
import Style from "./ProgressBar.style"

const ProgressBar = ({ progress }) => {
  const width = useProgressWidth(progress)
  return (
    <Style.Wrapper>
      <Style.Bar max="100" value={width} />
      <span>{width}%</span>
    </Style.Wrapper>
  )
}

export default ProgressBar
