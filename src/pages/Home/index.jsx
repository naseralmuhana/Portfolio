import PageWrapper from "../../common/PageWrapper"
import c from "../../constants"
import About from "./components/About"
import Education from "./components/Education"
import Experience from "./components/Experience"

const Home = () => {
  console.log("Home")
  return (
    <PageWrapper title={c.homePageHelmetTitle}>
      <About />
      <Education />
      <Experience />
    </PageWrapper>
  )
}

export default Home
