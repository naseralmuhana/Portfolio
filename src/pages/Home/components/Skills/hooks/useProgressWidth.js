import { useEffect, useState } from "react"

const useProgressWidth = (progress) => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (width < progress) {
        setWidth((prev) => prev + 2)
      } else {
        clearInterval(interval)
      }
    }, 15)
    return () => {
      clearInterval(interval)
    }
  }, [progress, width])

  return width
}

export default useProgressWidth
