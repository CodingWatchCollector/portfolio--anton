import { useMemo } from 'react'
import RandomFactLabel from './RandomFactLabel'
import FACTS from './FACTS'

const RadioLabelsContainer = ({ activeButtonValue }) => {
  const labels = useMemo(() => {
    const keysFromFACTS = Object.keys(FACTS)
    return keysFromFACTS.map((key, i) => {
      return (
        <RandomFactLabel
          key={key}
          labelText={`random fact №${i + 1}`}
          variantValue={key}
          currentValue={activeButtonValue}
        />
      )
    })
  }, [activeButtonValue])

  return <>{labels}</>
}

export default RadioLabelsContainer
