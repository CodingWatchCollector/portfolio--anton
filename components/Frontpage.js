import Image from 'next/image'
import portraitPlaceholder from '../public/portrait-placeholder.png'

const Frontpage = () => {
  return (
    <article className='frontpage flow-spacer'>
      <h2>Our hero</h2>
      <div className='hero-wrapper'>
        <div className='bio-wrapper grid gap grid--3-col'>
          <div className='portrait-wrapper grid--span-2'>
            <Image
              src={portraitPlaceholder}
              className='portrait'
              placeholder='blur'
              layout='intrinsic'
              priority
              alt='Anton Begunenko portrait'
            />
            <p className='portrait-author'>ChilikoDesign for fake Newspaper</p>
          </div>
          <div className='bio'>
            <p className='bio__name'>
              realName: <span className='cursive'> Anton Begunenko</span>
            </p>
            <p className='bio__age'>
              revolutionsAroundTheSun (aka years):{' '}
              <span className='cursive'>29</span>
            </p>
          </div>
          <div className='about-me--primary'>
            Info from Wikipedia: I have been passionate about web development
            for the last 5 years, but I could not find enough time to learn it
            properly until Covid containment when I could set aside my
            waitor&apos;s job and rush the FreeCodeCamp site to learn Frontend
            and Backend (HTML, CSS, JavaScript, a bit of Python, basic QA and
            data visualisation). <br />
            My learning path continues with advanced CSS and accessibility (some
            courses and lots of blogs reading and conference talks). I&apos;ve
            made a copy of Ableton&apos;s website about page and a website for
            the restaurant where I was working.
            <br />
            Now I want to fill in the gaps in my knowledge (self-taught learning
            lacks consistency) but also to learn more about subjects i&apos;ve
            never went deep enough, e.g. security, TDD, advanced use of data
            bases, eco-design...
          </div>
        </div>
        <div className='about-me--secondary'>
          Random fact:{' '}
          <span className='cursive'>
            Knows every local dish from Lyon (thanks to work at local restaurant
            for 6 years)
          </span>
        </div>
        <div className='about-me--secondary'>
          Random fact:{' '}
          <span className='cursive'>
            Wants to dive in to the world of web development
          </span>
        </div>
        <div className='about-me--secondary'>
          Random fact:{' '}
          <span className='cursive'>
            Has decent knowledge about accessibility, Core Web Vitals, but no so
            much about security and SEO (but i would love to learn more!)
          </span>
        </div>
        <div className='about-me--secondary'>
          Random fact:{' '}
          <span className='cursive'>
            Speaks french, ukrainian, english and russian
          </span>
        </div>
        <div className='about-me--secondary'>
          Random fact:{' '}
          <span className='cursive'>
            Has more watches than T-shirts, hence the nickname on github
          </span>
        </div>
        <div className='about-me--secondary'>
          Random fact: <span className='cursive'>Wears cape at home</span>
        </div>
      </div>
    </article>
  )
}

export default Frontpage
