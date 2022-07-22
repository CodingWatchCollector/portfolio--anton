import { useMemo } from 'react'
import RandomFactRadio from './RandomFactRadio'
import FactText from './FactText'
import FACTS from './FACTS'

const RadioButtonsContainer = ({ currentValue, setValue }) => {
  const handleRadioChange = e => {
    setValue(e.target.value)
  }

  const keysFromFACTS = Object.keys(FACTS)

  const radioButtons = useMemo(() => {
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
  }, [keysFromFACTS, handleRadioChange])

  return (
    <div className='facts__buttons-wrapper'>
      <FactText textKey={currentValue} />

      {radioButtons}
    </div>
  )
}

export default RadioButtonsContainer
