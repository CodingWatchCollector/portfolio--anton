import Image from 'next/image'
import portraitPlaceholder from '../public/portrait-placeholder.png'

const today = new Date()
const age = today.getFullYear() - 1993

const Frontpage = () => {
  return (
    <article className='frontpage flow-spacer'>
      <h2 className='text-highlight-border text-highlight-border--short'>
        Our hero
      </h2>
      <div className='hero-wrapper grid gap-xs'>
        <div className='bio-wrapper flow-spacer'>
          <div className='portrait-wrapper noise-border'>
            <Image
              src={portraitPlaceholder}
              className='portrait'
              placeholder='blur'
              layout='fill'
              priority
              objectFit='cover'
              objectPosition='center'
              alt='Anton portrait'
            />
            <p className='portrait-author'>
              ChilikoDesign for The Fake Newspaper
            </p>
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
            <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
              <path
                fill='#FF0066'
                d='M48.7,-54.2C61.8,-47.1,70.2,-30.5,71.9,-13.7C73.6,3,68.6,19.8,58.9,31.6C49.3,43.5,35,50.2,19.6,57.3C4.3,64.3,-12.2,71.6,-26.3,68.3C-40.4,64.9,-52.1,50.9,-63,34.9C-73.9,19,-84.1,1.2,-80.4,-13.2C-76.6,-27.5,-59,-38.4,-43.3,-45.2C-27.6,-51.9,-13.8,-54.4,2,-56.8C17.8,-59.2,35.6,-61.4,48.7,-54.2Z'
                transform='translate(100 100)'
              />
            </svg>
            <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
              <path
                fill='#FF0066'
                d='M57,-61.4C72.7,-54.7,83.5,-35.7,82.5,-17.9C81.6,-0.2,69,16.2,56.7,28.2C44.4,40.3,32.3,48,17.5,57.5C2.6,67,-15,78.4,-27.8,74.5C-40.6,70.7,-48.5,51.6,-58.2,34C-67.8,16.4,-79,0.3,-78.6,-15.9C-78.2,-32.1,-66.1,-48.3,-51.1,-55C-36,-61.8,-18,-59.2,1.3,-60.8C20.6,-62.4,41.3,-68.1,57,-61.4Z'
                transform='translate(100 100)'
              />
            </svg>
            <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
              <path
                fill='#FF0066'
                d='M48.7,-54.2C61.8,-47.1,70.2,-30.5,71.9,-13.7C73.6,3,68.6,19.8,58.9,31.6C49.3,43.5,35,50.2,19.6,57.3C4.3,64.3,-12.2,71.6,-26.3,68.3C-40.4,64.9,-52.1,50.9,-63,34.9C-73.9,19,-84.1,1.2,-80.4,-13.2C-76.6,-27.5,-59,-38.4,-43.3,-45.2C-27.6,-51.9,-13.8,-54.4,2,-56.8C17.8,-59.2,35.6,-61.4,48.7,-54.2Z'
                transform='translate(100 100)'
              />
            </svg>
            <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
              <path
                fill='#FF0066'
                d='M57,-61.4C72.7,-54.7,83.5,-35.7,82.5,-17.9C81.6,-0.2,69,16.2,56.7,28.2C44.4,40.3,32.3,48,17.5,57.5C2.6,67,-15,78.4,-27.8,74.5C-40.6,70.7,-48.5,51.6,-58.2,34C-67.8,16.4,-79,0.3,-78.6,-15.9C-78.2,-32.1,-66.1,-48.3,-51.1,-55C-36,-61.8,-18,-59.2,1.3,-60.8C20.6,-62.4,41.3,-68.1,57,-61.4Z'
                transform='translate(100 100)'
              />
            </svg>
            <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
              <path
                fill='#FF0066'
                d='M48.7,-54.2C61.8,-47.1,70.2,-30.5,71.9,-13.7C73.6,3,68.6,19.8,58.9,31.6C49.3,43.5,35,50.2,19.6,57.3C4.3,64.3,-12.2,71.6,-26.3,68.3C-40.4,64.9,-52.1,50.9,-63,34.9C-73.9,19,-84.1,1.2,-80.4,-13.2C-76.6,-27.5,-59,-38.4,-43.3,-45.2C-27.6,-51.9,-13.8,-54.4,2,-56.8C17.8,-59.2,35.6,-61.4,48.7,-54.2Z'
                transform='translate(100 100)'
              />
            </svg>
            <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
              <path
                fill='#FF0066'
                d='M57,-61.4C72.7,-54.7,83.5,-35.7,82.5,-17.9C81.6,-0.2,69,16.2,56.7,28.2C44.4,40.3,32.3,48,17.5,57.5C2.6,67,-15,78.4,-27.8,74.5C-40.6,70.7,-48.5,51.6,-58.2,34C-67.8,16.4,-79,0.3,-78.6,-15.9C-78.2,-32.1,-66.1,-48.3,-51.1,-55C-36,-61.8,-18,-59.2,1.3,-60.8C20.6,-62.4,41.3,-68.1,57,-61.4Z'
                transform='translate(100 100)'
              />
            </svg>
          </div>
          <div className='about-me--primary'>
            <h3 className='about-me--primary__title text-highlight'>
              Some blah-blah about me:
            </h3>
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
              learning lacks consistency) but I also have an eagerness to learn
              more about subjects I&apos;ve never went deep enough, e.g. data
              security, TDD, advanced use of databases, eco-design... I also
              want to improve my softskills and I want to learn more about
              Agile, Scrum, how to organise the teamwork withing dev team, how
              to write comprehensive code and everything else mentioned in the
              podcasts, blogs, tweets and books I&apos;ve read and heard.
            </span>
          </div>
        </div>
        <div className='about-me--secondary medium noise-border'>
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
        <div className='about-me--secondary big noise-border'>
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
        <div className='about-me--secondary medium noise-border'>
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
