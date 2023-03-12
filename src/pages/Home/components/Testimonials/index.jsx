import c from "../../../../constants"
import Style from "./style"
import testimonialsData from "../../../../data/testimonials.data"
import TestimonialCard from "./components/TestimonialCard"
import { useRef } from "react"
import ArrowBtn from "./components/ArrowBtn"

// SliderSettings
const SliderSettings = {
  // autoPlay: true,
  infiniteLoop: true,
  useKeyboardArrows: true,
  emulateTouch: true,
  showStatus: false,
  showArrows: false,
  showThumbs: false,
  stopOnHover: true,
}

const Testimonials = () => {
  const sliderRef = useRef()
  if (testimonialsData.length === 0) return // if there are no testimonials
  const goNext = () => sliderRef.current.onClickNext() // go next testimonial
  const goPrev = () => sliderRef.current.onClickPrev() // go prev testimonial

  const cards = testimonialsData.map(({ id, ...rest }) => (
    <TestimonialCard key={id} {...rest} />
  ))

  return (
    <Style.Section id={c.testimonialsSectionsId}>
      <Style.Title>Testimonials</Style.Title>
      <Style.Body>
        <Style.QuoteIcon />
        <Style.SliderContainer>
          <Style.CustomSlider {...SliderSettings} ref={sliderRef}>
            {cards}
          </Style.CustomSlider>
        </Style.SliderContainer>
        <ArrowBtn onClick={goPrev} type={c.prevButton} />
        <ArrowBtn onClick={goNext} type={c.nextButton} />
      </Style.Body>
    </Style.Section>
  )
}

export default Testimonials
