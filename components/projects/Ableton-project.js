import Image from 'next/image'

import imageAbletonFullpage from '../../public/ableton-full.png'

const AbletonProject = () => {
  return (
    <div className='ableton card grid gap'>
      <div className='photo-and-button-wrapper'>
        <div className='card__photo-wrapper'>
          <Image
            src={imageAbletonFullpage}
            className='card__photo'
            placeholder='blur'
            layout='responsive'
            priority
            alt='Ableton about page preview'
          />
        </div>
      </div>

      <div className='card__description flow-spacer spacer-xs'>
        <h3 className='card__title'>Ableton about page</h3>
        <p>
          This is a copy of Ableton&apos;s about page using only HTML, CSS and
          vanilla JS.
          <a
            className='link--block'
            href='https://www.ableton.com/en/about/'
            target='_blank'
            rel='noreferrer'
          >
            Link to original
            <span className='visually-hidden'>Ableton </span> page
          </a>
          <a
            className='link--block'
            href='https://ableton-about-page.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            View hosted copy
            <span className='visually-hidden'>of Ableton about web page</span>
          </a>
          <a
            className='link--block'
            href='https://github.com/CodingWatchCollector/ableton-about--no-framework'
            target='_blank'
            rel='noreferrer'
          >
            View
            <span className='visually-hidden'>Ableton project</span> on Github
          </a>
        </p>
        <details className='flow-spacer spacer-xs'>
          <summary className='button-style'>
            Details
            <span className='visually-hidden'>on Ableton project</span>
          </summary>
          <div className='expandable flow-spacer spacer-xs'>
            <ul className='expandable__list'>
              <h4>Main reasons to copy this page:</h4>
              <li>Solidify my CSS Grid knowledge</li>
              <li>Build a complex page using WCAG recommendations</li>
              <li>I like the design and I wanted to recreate it</li>
            </ul>
            <ul className='expandable__list'>
              <h4>My personal touch and some fixes of the original page:</h4>
              <li>
                Fix heading hierarchy of the original page where every section
                has a H1(what?!)
              </li>
              <li>
                Skip to content button (10+ tabs before you skip the navigation
                links)
              </li>
              <li>
                Hover state on links (doesn&apos;t exist on original page)
              </li>
              <li>Added alt text to images</li>
              <li>Bumped up the outline on focus</li>
            </ul>
          </div>
        </details>
      </div>
    </div>
  )
}

export default AbletonProject
