import { useState } from 'react'
import ChezMmanImage from './ChezMman-image'
import SwitchButtonWithBear from './switch-button--with-bear'

const ChezMmanProject = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className='chez-mman card grid gap'>
      <div className='polaroid-frame '>
        <div className='polaroid-frame--shadow-inside'></div>
        <div className='card__photo-wrapper'>
          <ChezMmanImage darkMode={darkMode} />
        </div>
        <h3 className='card__title'>
          Chez M&apos;man Mobile Menu{' '}
          <SwitchButtonWithBear
            toggleState={darkMode}
            setToggleState={setDarkMode}
          />
        </h3>
      </div>
      <div className='card__description text-max-length flow-spacer spacer-xs'>
        <p>
          This is a web page I&apos;ve made for the restaurant where I work.
          It&apos;s a lightweight website with the menu and drink list and is
          easy to update with CMS.
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
        </p>
        <details className='flow-spacer spacer-xs'>
          <summary className='button-style'>
            Details
            <span className='visually-hidden'>on Chez M&apos;man project</span>
          </summary>
          <div className='expandable flow-spacer spacer-xs'>
            <ul className='expandable__list'>
              <h4>Main reasons to start this project:</h4>
              <li>Make useful real world project</li>
              <li>Solidify my CSS knowledge</li>
              <li>
                Build a nice looking webpage (that&apos;s what my mum says)
                designed by myself
              </li>
              <li>
                I love CSS <span>&#9825;</span>
              </li>
            </ul>
            <ul className='expandable__list'>
              <h4>What i have learned in process:</h4>
              <li>
                wcag recommendations on buttons(switch buttons in particular)
              </li>
              <li>
                How to use third party libraries, but also concerns, bugs and
                issues related to it.{' '}
              </li>
              <li>How to use CMS and Figma</li>
              <li>
                How to use version control and more importantly why to do this
              </li>
              <li>
                It&apos;s important to gather feedback from users and improve
                their experience.
              </li>
              <li>
                How to make a major update and do not break the code (I
                redesigned the website and changed some core features).
              </li>
            </ul>
          </div>
        </details>
      </div>
    </div>
  )
}

export default ChezMmanProject
