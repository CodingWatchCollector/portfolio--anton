import { useState } from 'react'
import ChezMmanImage from './ChezMman-image'

const ChezMmanProject = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className='card grid grid--3-col gap'>
      <div className='polaroid-frame scotch-tape-on-sides grid--span-2'>
        <button
          className='scheme-toggle-button'
          onClick={() => {
            setDarkMode(!darkMode)
          }}
        >
          Switch color scheme
        </button>
        <div className='card__photo-wrapper'>
          <ChezMmanImage darkMode={darkMode} />
        </div>
        <h3 className='card__title'>Chez M&apos;man Mobile Menu</h3>
      </div>
      <div className='card__description flow-spacer'>
        <p>
          This is a web page I&apos;ve made for the restaurant where I work.
          It&apos;s a lightweight website with the menu and drink list and it
          should replace the paper menu.
          <a
            className='link--block'
            href='https://chez-mman.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            View
            <span className='visually-hidden'>Chez M&apos;man</span> hosted page
          </a>
        </p>
      </div>
      <details className='flow-spacer spacer-xs'>
        <summary className='button-style'>
          Details
          <span className='visually-hidden'>on Chez M&apos;man project</span>
        </summary>
        <div className='expandable flow-spacer spacer-xs'>
          <ul className='expandable__list'>
            <h4>Main reasons to start this project:</h4>
            <li>Make usefull real world project</li>
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
            <h4>My personal touch and some fixes of the original page:</h4>
            <li>
              Fix heading hierarchy of the original page where every section has
              a H1(what?!)
            </li>
            <li>
              Skip to content button (10+ tabs before you skip the navigation
              links)
            </li>
            <li>Hover state on links (doesn&apos;t exist on original page)</li>
            <li>Added alt text to images</li>
            <li>Bumped up the outline on focus</li>
          </ul>
        </div>
      </details>
    </div>
  )
}

export default ChezMmanProject
