import Image from 'next/image'
import portraitPlaceholder from '../public/portrait-placeholder.png'

const today = new Date()
const age = today.getFullYear() - 1993

const Frontpage = () => {
  return (
    <article className='frontpage flow-spacer spacer-xl'>
      <h2 className='text-highlight-border text-highlight-border--short'>
        Our hero
      </h2>
      <div className='hero-wrapper grid gap grid--3-col'>
        <div className='bio-wrapper flow-spacer'>
          <div className='portrait-wrapper noise-border grid--span-2'>
            <Image
              src={portraitPlaceholder}
              className='portrait'
              placeholder='blur'
              layout='fill'
              priority
              alt='Anton portrait'
            />
            <p className='portrait-author'>ChilikoDesign for fake Newspaper</p>
          </div>
          <div className='bio'>
            <p className='bio__name'>
              realName: <span className='cursive'> Anton Begunenko</span>
            </p>
            <p className='bio__age '>
              revolutionsAroundTheSun (aka years):{' '}
              <span className='cursive'>{age}</span>
            </p>
            <p className='bio__github'>
              githubLink:{' '}
              <a
                href='https://github.com/CodingWatchCollector'
                className='cursive'
              >
                {' '}
                CodingWatchCollector
              </a>
            </p>
          </div>
          <div className='about-me--primary'>
            <span className='about-me--primary__title text-highlight'>
              Some blah-blah about me:
            </span>
            <span>
              I have been passionate about web development for the last 5 years,
              but I could not find enough time to learn it properly until Covid
              containment when I could set aside my waitor&apos;s job and rush
              the FreeCodeCamp site to learn Frontend and Backend (HTML, CSS,
              JavaScript, a bit of Python, basic QA and data visualisation).
            </span>
            <span>
              My learning path continues with advanced CSS and accessibility
              (some courses and lots of blogs reading and conference talks).
            </span>
            <span>
              Now I want to fill in the gaps in my knowledge (self-taught
              learning lacks consistency) but also to learn more about subjects
              I&apos;ve never went deep enough, e.g. data security, TDD,
              advanced use of databases, eco-design... I also want to improve my
              softskills and I want to learn more about Agile, Scrum, how to
              organise the teamwork withing dev team, how to write comprehensive
              code and everything else mentioned in the podcasts, blogs, tweets
              and books I&apos;ve read and heard.
            </span>
          </div>
        </div>
        <div className='about-me--secondary noise-border'>
          <span className='about-me--secondary__title text-highlight'>
            Random fact:
          </span>{' '}
          <span className=''>
            I know every local dish from Lyon (thanks to work at local
            restaurant for 6 years)
          </span>
        </div>
        <div className='about-me--secondary noise-border'>
          <span className='about-me--secondary__title text-highlight'>
            Random fact:
          </span>{' '}
          <span className=''>
            I want to dive in the world of web development
          </span>
        </div>
        <div className='about-me--secondary noise-border'>
          <span className='about-me--secondary__title text-highlight'>
            Random fact:
          </span>{' '}
          <span className=''>
            I have decent knowledge about accessibility, Core Web Vitals, but no
            so much about security and SEO (but i would love to learn more!)
          </span>
        </div>
        <div className='about-me--secondary noise-border'>
          <span className='about-me--secondary__title text-highlight'>
            Random fact:
          </span>{' '}
          <span className=''>
            I speak french, ukrainian, russian and english
          </span>
        </div>
        <div className='about-me--secondary noise-border'>
          <span className='about-me--secondary__title text-highlight'>
            Random fact:
          </span>{' '}
          <span className=''>
            I have more watches than T-shirts, hence the nickname on github
          </span>
        </div>
        <div className='about-me--secondary noise-border'>
          <span className='about-me--secondary__title text-highlight'>
            {' '}
            Random fact:
          </span>{' '}
          <span className=''>I wear cape at home</span>
        </div>
        <div className='about-me--secondary noise-border'>
          <span className='about-me--secondary__title text-highlight'>
            {' '}
            Random fact:
          </span>{' '}
          <span className=''>SVG filters are cool, right?</span>
        </div>
      </div>
    </article>
  )
}

export default Frontpage
