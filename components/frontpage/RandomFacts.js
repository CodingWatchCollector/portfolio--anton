import { useState } from 'react'

import RandomFactsContainer from './randomFacts/RandomFactsContainer'
import RadioButtonsContainer from './randomFacts/RadioButtonsContainer'
import RadioLabelsContainer from './randomFacts/RadioLabelsContainer'

const RandomFacts = () => {
  const [randomFactValue, setRandomFactValue] = useState('')

  return (
    <fieldset
      className='random-facts-fieldset'
      aria-describedby='random-facts-description'
    >
      <legend className='cursive content--max-width'>
        <h3>Random facts</h3>
      </legend>
      <div className='random-facts-bg'>
        <div className='color-light flow-spacer spacer-xs content--max-width'>
          <p id='random-facts-description' className='random-facts-description'>
            Click on a &quot;planet&quot; or a shape below to get a random fact
            about me
          </p>
          <RandomFactsContainer
            value={randomFactValue}
            setValue={setRandomFactValue}
            className='buttons-and-solar-system-wrapper content--max-width flow-spacer spacer-xs'
          >
            <RadioButtonsContainer
              setValue={setRandomFactValue}
              currentValue={randomFactValue}
            />
            <div className='solar-system'>
              <div className='sun-wrapper'>
                <svg width={66} height={66} className='sun'>
                  <use width={66} height={66} href='/svg/icons.svg#sun' />
                </svg>
              </div>
              <RadioLabelsContainer activeButtonValue={randomFactValue} />
            </div>
          </RandomFactsContainer>
        </div>
      </div>
    </fieldset>
  )
}

export default RandomFacts
