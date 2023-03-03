import { motion, useAnimation } from "framer-motion"
import useScrollTrigger from "@mui/material/useScrollTrigger"
import Style from "./Logo.style"
import logoData from "../../../../../data/logo.data"
import { useTheme } from "@mui/material/styles"
import { useEffect } from "react"

const svgVariants = {
  hidden: {},
  visible: {},
}

const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
}

const Logo = () => {
  const trigger = useScrollTrigger({ disableHysteresis: true })

  return (
    <Style.Wrapper
      trigger={trigger}
      viewBox="0 0 279 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={svgVariants}
      initial="hidden"
      animate="visible"
    >
      <mask
        id="path-1-outside-1_1_10"
        maskUnits="userSpaceOnUse"
        x="0.0767822"
        y="0.38205"
        width="279"
        height="31"
        fill="black"
      >
        <rect fill="white" x="0.0767822" y="0.38205" width="279" height="31" />
        {logoData.map(({ id, d }) => (
          <motion.path key={id} variants={pathVariants} d={d} />
        ))}
      </mask>
      {logoData.map(({ id, d }) => (
        <motion.path
          key={id}
          variants={pathVariants}
          d={d}
          stroke="#212121"
          strokeWidth="4"
          mask="url(#path-1-outside-1_1_10)"
        />
      ))}
    </Style.Wrapper>
  )
}

export default Logo
