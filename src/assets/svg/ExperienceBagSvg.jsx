import { styled } from "@mui/material/styles"
import c from "../../constants"

const ExperienceBagSvg = () => {
  console.log("ExperienceBagSvg")
  return (
    <Wrapper
      width="43"
      height="37"
      viewBox="0 0 43 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.7541 8.11351V4.10811C14.7541 2.94383 15.6979 2 16.8622 2H25.6108C26.7751 2 27.7189 2.94383 27.7189 4.10811V8.11351M14.7541 8.11351H27.7189M14.7541 8.11351H5.16216C3.41575 8.11351 2 9.52926 2 11.2757V17.5147C2 17.6924 2.11142 17.851 2.27858 17.9113L3.37027 18.305M27.7189 8.11351H37.8378C39.5843 8.11351 41 9.52926 41 11.2757V17.5125C41 17.6913 40.8873 17.8506 40.7187 17.9101L39.2081 18.4432M3.37027 18.305V34.1486C3.37027 34.8472 3.93657 35.4135 4.63514 35.4135H37.9432C38.6418 35.4135 39.2081 34.8472 39.2081 34.1486V18.4432M3.37027 18.305L12.3297 21.5363L16.8095 23.1519L17.9294 23.5558M39.2081 18.4432L30.2486 21.6054L25.7689 23.1865L24.649 23.5818M24.5568 21.1838V24.6622C24.5568 25.2443 24.0848 25.7162 23.5027 25.7162H18.7595C18.1773 25.7162 17.7054 25.2443 17.7054 24.6622V21.1838C17.7054 20.6016 18.1773 20.1297 18.7595 20.1297H23.5027C24.0848 20.1297 24.5568 20.6016 24.5568 21.1838Z"
        // stroke="#212121"
        strokeWidth="2.10811"
        strokeLinejoin="round"
      />
    </Wrapper>
  )
}

export default ExperienceBagSvg

const Wrapper = styled("svg")(({ theme }) => ({
  width: "32px",

  [theme.breakpoints.down(c.md)]: {
    width: "30px",
  },
  [theme.breakpoints.down(c.smd)]: {
    width: "28px",
  },
  "& path": {
    stroke: theme.palette.primary.main,
  },
}))
