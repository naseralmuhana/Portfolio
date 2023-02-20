import { Helmet } from "react-helmet-async"

const PageWrapper = ({ title, children }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href="" />
      </Helmet>
      {children}
    </>
  )
}

export default PageWrapper
