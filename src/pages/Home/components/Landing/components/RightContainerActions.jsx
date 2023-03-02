import Style from "./RightContainerActions.style"

const RightContainerActions = ({ resumePdf }) => {
  return (
    <Style.Wrapper>
      {resumePdf && (
        <a href={resumePdf} download="resume" target="_blank" rel="noreferrer">
          <Style.ResumeBtn className="resume-btn">Download CV</Style.ResumeBtn>
        </a>
      )}

      <Style.ContactBtn className="contact-btn">Contact</Style.ContactBtn>
    </Style.Wrapper>
  )
}

export default RightContainerActions
