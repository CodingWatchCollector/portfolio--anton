import { useRef, useEffect } from 'react'

const RandomFactsContainer = ({ children, value, setValue, className }) => {
  const containerRef = useRef(null)
  useEffect(() => {
    const handleClickOutside = event => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setValue('')
        const checkedRadio = containerRef.current.querySelector(
          'input[type="radio"]:checked'
        )
        if (checkedRadio) {
          checkedRadio.checked = false
        }
      }
    }
    if (value !== '') {
      document.addEventListener('click', handleClickOutside, true)
    }
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [value, setValue])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

export default RandomFactsContainer
