import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import Tooltip from "../../../../../common/UI/Tooltip"
import c from "../../../../../constants"
import Style from "./ArrowBtn.style"

const ArrowBtn = ({ onClick, type }) => {
  const title = type === c.nextButton ? "Next" : "Previous"
  const sx = type === c.nextButton ? { right: "5%" } : { left: "5%" }

  return (
    <Tooltip title={title}>
      <Style.Wrapper onClick={onClick} sx={sx}>
        {type === c.nextButton ? <FaArrowRight /> : <FaArrowLeft />}
      </Style.Wrapper>
    </Tooltip>
  )
}

export default ArrowBtn
