import { useMemo } from 'react'
import RandomFactLabel from './RandomFactLabel'
import FACTS from './FACTS'

const RadioLabelsContainer = ({ activeButtonValue }) => {
  const keysFromFACTS = Object.keys(FACTS)

  const labels = useMemo(() => {
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
  }, [keysFromFACTS, activeButtonValue])

  return <>{labels}</>
}

export default RadioLabelsContainer
