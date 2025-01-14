// External Libraries
import { useState, useEffect } from 'react'

// Utils
import { makeInitialValueWindowState } from './utils'

const useWindowDimensions = () => {
  // States
  const [windowDimensions, setWindowDimensions] = useState(
    makeInitialValueWindowState
  )

  // UseEffects
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }

      handleResize()

      window.addEventListener('resize', handleResize)

      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowDimensions
}

export default useWindowDimensions
