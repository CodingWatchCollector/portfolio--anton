import Image from 'next/image'

import imageAbletonFullpage from '../public/ableton--fullpage.png'

const AbletonProject = () => {
  return (
    <div className='card grid grid--3-col gap'>
      <div className='polaroid-frame grid--span-2'>
        <div className='polaroid-frame--shadow-inside'></div>

        <div className='card__photo-wrapper'>
          <Image
            src={imageAbletonFullpage}
            className='card__photo'
            placeholder='blur'
            layout='intrinsic'
            priority
            alt='Ableton about page preview'
          />
        </div>
        <h3 className='card__title'>Ableton about page</h3>
      </div>
      <div className='card__description flow-spacer'>
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
