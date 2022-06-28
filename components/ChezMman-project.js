import { useState } from 'react'
import ChezMmanImage from './ChezMman-image'

const ChezMmanProject = () => {
  const [darkMode, setDarkMode] = useState(false)

  const handleToggle = e => {
    const button = e.target
    const arm = document.getElementById('bear-arm')
    if (darkMode === false) {
      arm.classList.remove('bear-arm--from-right')
      arm.classList.add('bear-arm--from-left')
    }
    if (darkMode === true) {
      arm.classList.remove('bear-arm--from-left')
      arm.classList.add('bear-arm--from-right')
    }
    button.disabled = true
    arm.onanimationend = () => {
      button.disabled = false
    }
    arm.onanimationiteration = () => {
      setDarkMode(!darkMode)
    }
  }

  return (
    <div className='card grid grid--3-col gap'>
      <div className='polaroid-frame grid--span-2'>
        <div className='polaroid-frame--shadow-inside'></div>
        <div className='card__photo-wrapper'>
          <ChezMmanImage darkMode={darkMode} />
        </div>
        <h3 className='card__title'>
          Chez M&apos;man Mobile Menu{' '}
          <button
            aria-pressed={darkMode}
            className='scheme-toggle-button'
            onClick={handleToggle}
          >
            <svg
              aria-hidden='true'
              focusable='false'
              className='scheme-toggle-button__icon'
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 24 24'
            >
              <path d='M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm2.312-4.897c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4zm10 0c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z' />
            </svg>
            <svg
              aria-hidden='true'
              focusable='false'
              className='scheme-toggle-button__icon'
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              viewBox='0 0 24 24'
            >
              <path d='M10.719 2.082c-2.572 2.028-4.719 5.212-4.719 9.918 0 4.569 1.938 7.798 4.548 9.895-4.829-.705-8.548-4.874-8.548-9.895 0-5.08 3.808-9.288 8.719-9.918zm1.281-2.082c-6.617 0-12 5.383-12 12s5.383 12 12 12c1.894 0 3.87-.333 5.37-1.179-3.453-.613-9.37-3.367-9.37-10.821 0-7.555 6.422-10.317 9.37-10.821-1.74-.682-3.476-1.179-5.37-1.179zm0 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001z' />
            </svg>
            <span className='visually-hidden'>Switch to dark color scheme</span>
            <svg
              className='bear-body'
              aria-hidden='true'
              focusable='false'
              viewBox='0 0 284.94574 359.73706'
              preserveAspectRatio='xMinYMin'
            >
              <g transform='translate(-7.5271369,-761.38595)'>
                <g transform='matrix(1.2335313,0,0,1.2335313,-35.029693,-212.83637)'>
                  <path
                    d='M 263.90933,1081.4151 A 113.96792,96.862576 0 0 0 149.99132,985.71456 113.96792,96.862576 0 0 0 36.090664,1081.4151 l 227.818666,0 z'
                    style={{ fill: '#784421', fillOpacity: 1 }}
                  />
                  <path
                    d='m 250.42825,903.36218 c 2e-5,66.27108 -44.75411,114.99442 -102.42825,114.99442 -57.674143,0 -98.428271,-48.72334 -98.428251,-114.99442 4e-6,-66.27106 40.754125,-92.99437 98.428251,-92.99437 57.67413,0 102.42825,26.72331 102.42825,92.99437 z'
                    style={{ fill: '#784421', fillOpacity: 1 }}
                  />
                  <path
                    d='m 217,972.86218 c 2e-5,21.53911 -30.44462,42.00002 -68,42.00002 -37.55538,0 -66.000019,-20.46091 -66,-42.00002 0,-21.53911 28.44464,-36 66,-36 37.55536,0 68,14.46089 68,36 z'
                    style={{ fill: '#e9c6af', illOpacity: 1 }}
                  />
                  <path
                    d='m 181.5,944.36218 c 0,8.28427 -20.59974,26.5 -32.75,26.5 -12.15026,0 -34.75,-18.21573 -34.75,-26.5 0,-8.28427 22.59974,-13.5 34.75,-13.5 12.15026,0 32.75,5.21573 32.75,13.5 z'
                    style={{ fill: '#000000', fillOpacity: 1 }}
                  />
                  <g>
                    <ellipse
                      style={{ fill: '#784421', fillOpacity: 1 }}
                      cx='69'
                      cy='823.07269'
                      rx='34.5'
                      ry='33.289474'
                    />
                    <path
                      style={{ fill: '#e9c6af', fillOpacity: 1 }}
                      d='M 69,47.310547 A 24.25,23.399124 0 0 0 44.75,70.710938 24.25,23.399124 0 0 0 64.720703,93.720703 c 0.276316,-0.40734 0.503874,-0.867778 0.787109,-1.267578 1.70087,-2.400855 3.527087,-4.666237 5.470704,-6.798828 1.943616,-2.132591 4.004963,-4.133318 6.179687,-6.003906 2.174725,-1.870589 4.461274,-3.611714 6.855469,-5.226563 2.394195,-1.614848 4.896019,-3.10338 7.498047,-4.46875 0.539935,-0.283322 1.133058,-0.500695 1.68164,-0.773437 A 24.25,23.399124 0 0 0 69,47.310547 Z'
                      transform='translate(0,752.36216)'
                    />
                  </g>
                  <g transform='matrix(-1,0,0,1,300,0)'>
                    <ellipse
                      ry='33.289474'
                      rx='34.5'
                      cy='823.07269'
                      cx='69'
                      style={{ fill: '#784421', illOpacity: 1 }}
                    />
                    <path
                      transform='translate(0,752.36216)'
                      d='M 69,47.310547 A 24.25,23.399124 0 0 0 44.75,70.710938 24.25,23.399124 0 0 0 64.720703,93.720703 c 0.276316,-0.40734 0.503874,-0.867778 0.787109,-1.267578 1.70087,-2.400855 3.527087,-4.666237 5.470704,-6.798828 1.943616,-2.132591 4.004963,-4.133318 6.179687,-6.003906 2.174725,-1.870589 4.461274,-3.611714 6.855469,-5.226563 2.394195,-1.614848 4.896019,-3.10338 7.498047,-4.46875 0.539935,-0.283322 1.133058,-0.500695 1.68164,-0.773437 A 24.25,23.399124 0 0 0 69,47.310547 Z'
                      style={{ fill: '#e9c6af', fillOpacity: 1 }}
                    />
                  </g>
                  <ellipse
                    ry='9.6790915'
                    rx='9.2701159'
                    cy='900.38916'
                    cx='105.83063'
                    style={{ fill: '#000000', fillOpacity: 1 }}
                  />
                  <ellipse
                    style={{ fill: '#000000', fillOpacity: 1 }}
                    cx='186.89894'
                    cy='900.38916'
                    rx='9.2701159'
                    ry='9.6790915'
                  />
                </g>
              </g>
            </svg>
            <svg
              id='bear-arm'
              aria-hidden='true'
              focusable='false'
              className='bear-arm'
              viewBox='0 0 250.00001 99.999997'
              preserveAspectRatio='xMinYMin'
            >
              <g>
                <g transform='translate(868.57141,-900.93359)'>
                  <path
                    style={{ fill: '#784421', fillOpacity: 1 }}
                    d='m -619.43416,945.05124 c 4.18776,73.01076 -78.25474,53.24342 -150.21568,52.94118 -82.38711,-0.34602 -98.92158,-19.44459 -98.92157,-47.05883 0,-27.61424 4.78794,-42.54902 73.82353,-42.54902 69.03559,0 171.43607,-30.93764 175.31372,36.66667 z'
                  />
                  <ellipse
                    style={{ fill: '#e9c6af', fillOpacity: 1 }}
                    cx='-683.02264'
                    cy='950.98572'
                    rx='29.910826'
                    ry='29.414362'
                  />
                </g>
              </g>
            </svg>
          </button>
        </h3>
      </div>
      <div className='card__description flow-spacer'>
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
              How to make a major update and do not break the code (I redesigned
              the website and changed some core features).
            </li>
          </ul>
        </div>
      </details>
    </div>
  )
}

export default ChezMmanProject
