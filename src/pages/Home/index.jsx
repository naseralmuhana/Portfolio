import PageWrapper from "../../common/PageWrapper"
import c from "../../constants"
// import Header from "./components/Header"
// import Landing from "./components/Landing"
// import About from "./components/About"
// import Education from "./components/Education"
// import Experience from "./components/Experience"
// import Skills from "./components/Skills"
import Testimonials from "./components/Testimonials"

const Home = () => {
  return (
    <PageWrapper title={c.homePageHelmetTitle}>
      {/* <Header />
      <Landing />
      <About />
      <Education />
      <Skills />
      <Experience /> */}
      <Testimonials />
    </PageWrapper>
  )
}

export default Home
