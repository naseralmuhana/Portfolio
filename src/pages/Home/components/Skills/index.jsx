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

// import Style from "./style"
// import c from "../../../../constants"
// import skillsData from "../../../../data/skills.data"
// import SkillCard from "./components/SkillCard"
// import { AutoScroll } from "@splidejs/splide-extension-auto-scroll"
// import SectionTitle from "../../../../common/UI/Section/SectionTitle.style"
// import SectionHeader from "../../../../common/UI/Section/SectionHeader.style"

// // Default theme
// import "@splidejs/react-splide/css"
// import { SplideSlide } from "@splidejs/react-splide"

// const Skills = () => {
//   const cards = skillsData.map(({ id, ...rest }) => (
//     <SplideSlide key={id}>
//       <SkillCard {...rest} />
//     </SplideSlide>
//   ))

//   return (
//     <Style.Section id={c.skillsSectionId}>
//       <SectionHeader style={{ margin: "0.7rem" }}>
//         <SectionTitle style={{ marginBottom: 0 }}>Skills</SectionTitle>
//       </SectionHeader>
//       <Style.Body
//         options={{
//           type: "loop",
//           drag: "free",
//           clones: 10,
//           autoWidth: true,
//           width: "100%",
//           arrows: false,
//           pagination: false,
//         }}
//         extensions={{ AutoScroll }}
//       >
//         {cards}
//       </Style.Body>
//     </Style.Section>
//   )
// }

// export default Skills
