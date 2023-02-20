import PageWrapper from "../../common/PageWrapper"
import c from "../../constants"
import About from "./components/About"

const Home = () => {
  return (
    <PageWrapper title={c.homePageHelmetTitle}>
      <About />
    </PageWrapper>
  )
}

export default Home
