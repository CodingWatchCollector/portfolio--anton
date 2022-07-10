import { useState, useEffect } from 'react'

const QUERY = '(prefers-reduced-motion: no-preference)'
function usePrefersReducedMotion () {
  // Default to reduced motion on first render
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true)
  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY)
    // Set the true initial value, now that we're on the client:
    setPrefersReducedMotion(!window.matchMedia(QUERY).matches)

    // Register our event listener
    const listener = event => {
      setPrefersReducedMotion(!event.matches)
    }

    mediaQueryList.addEventListener('change', listener)

    return () => {
      mediaQueryList.removeEventListener('change', listener)
    }
  }, [])
  return prefersReducedMotion
}

export default usePrefersReducedMotion
