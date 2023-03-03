import { useEffect, useState } from "react"

const useScrollWindow = () => {
  const [trigger, SetTrigger] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      SetTrigger(window.scrollY > 100)
    })
    return () => {
      window.removeEventListener("scroll", () => {
        SetTrigger(false)
      })
    }
  }, [])

  return trigger
}

export default useScrollWindow
