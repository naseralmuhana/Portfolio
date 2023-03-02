import Style from "./style"

const Tooltip = ({ title, children, placement }) => {
  return (
    <Style.Wrapper title={title} placement={placement}>
      {children}
    </Style.Wrapper>
  )
}

export default Tooltip
