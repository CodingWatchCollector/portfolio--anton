import { useMemo } from 'react'
import RandomFactRadio from './RandomFactRadio'
import FactText from './FactText'
import FACTS from './FACTS'

const RadioButtonsContainer = ({ currentValue, setValue }) => {
  const radioButtons = useMemo(() => {
    const keysFromFACTS = Object.keys(FACTS)
    const handleRadioChange = e => {
      setValue(e.target.value)
    }
    return keysFromFACTS.map(key => {
      return (
        <RandomFactRadio
          key={key}
          radioName='fact-name'
          variantValue={key}
          handleRadioChange={handleRadioChange}
        />
      )
    })
  }, [setValue])

  return (
    <div className='facts__buttons-wrapper'>
      <FactText textKey={currentValue} />

      {radioButtons}
    </div>
  )
}

export default RadioButtonsContainer
