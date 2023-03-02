import PageWrapper from "../../common/PageWrapper"
import c from "../../constants"
import Landing from "./components/Landing"
// import About from "./components/About"
// import Education from "./components/Education"
// import Experience from "./components/Experience"
// import Skills from "./components/Skills"

const Home = () => {
  console.log("Home")
  return (
    <PageWrapper title={c.homePageHelmetTitle}>
      <Landing />
      {/* <About />
      <Education />
      <Skills />
      <Experience /> */}
    </PageWrapper>
  )
}

export default Home
