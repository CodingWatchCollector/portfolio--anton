import { useState } from 'react'
import ChezMmanImage from './ChezMman-image'
import SwitchButtonWithBear from './switch-button--with-bear'

const ChezMmanProject = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className='chez-mman card grid gap'>
      <div className='photo-and-button-wrapper'>
        <div className='card__photo-wrapper'>
          <ChezMmanImage darkMode={darkMode} />
        </div>
        <SwitchButtonWithBear
          toggleState={darkMode}
          setToggleState={setDarkMode}
        />
      </div>
      <div className='card__description flow-spacer spacer-xs'>
        <h3 className='card__title'>Chez M&apos;man Mobile Menu </h3>
        <p>
          Lightweight online menu. Loads fast even on regular 3G, uses CMS to
          update the content.
        </p>
        <div>
          <a
            className='link--block'
            href='https://chez-mman.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            View
            <span className='visually-hidden'>Chez M&apos;man</span> hosted page
          </a>
          <a
            className='link--block'
            href='https://github.com/CodingWatchCollector/chez-mman-qr-code'
            target='_blank'
            rel='noreferrer'
          >
            View
            <span className='visually-hidden'>Chez M&apos;man</span> on Github
          </a>
        </div>
      </div>
    </div>
  )
}

export default ChezMmanProject
