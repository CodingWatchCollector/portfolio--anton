import { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import FACTS from './FACTS'

const FactText = ({ textKey }) => {
  const [text, setText] = useState('')
  const [showBox, setShowBox] = useState(false)
  const getTextByKey = key => {
    const text = FACTS[key] || ''
    setText(text)
  }

  useEffect(() => {
    getTextByKey(textKey)
    setShowBox(textKey != '')
  }, [textKey])

  return (
    <CSSTransition
      classNames='fact-text'
      in={showBox}
      unmountOnExit={true}
      timeout={350}
    >
      <div key='fact-text' className='fact-text' aria-live='polite'>
        <span>{text}</span>
      </div>
    </CSSTransition>
  )
}

export default FactText
