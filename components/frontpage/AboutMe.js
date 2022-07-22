const AboutMe = () => {
  return (
    <div className='about-me--primary'>
      <h3 className='cursive content--max-width'>Some blah-blah about me</h3>
      <div className='about-me--primary__text-wrapper color-light'>
        <div className='about-me--primary__text__bg '>
          <div>
            <svg width='600px' height='900px' aria-hidden='true'>
              <use href='/svg/shapes_bg.svg#background-with-shapes' />
            </svg>
            <svg width='600px' height='900px' aria-hidden='true'>
              <use href='/svg/shapes_bg.svg#background-with-shapes' />
            </svg>
          </div>
          <div>
            <svg width='600px' height='900px' aria-hidden='true'>
              <use href='/svg/shapes_bg.svg#background-with-shapes' />
            </svg>
            <svg width='600px' height='900px' aria-hidden='true'>
              <use href='/svg/shapes_bg.svg#background-with-shapes' />
            </svg>
          </div>
        </div>
        <div className='about-me--primary__text content--max-width'>
          <span>
            I have been passionate about web development for the last 5 years,
            but I could not find enough time to learn it properly until Covid
            containment when I could set aside my waitor&apos;s job and rush the
            FreeCodeCamp site to learn Frontend and Backend (HTML, CSS,
            JavaScript, a bit of Python, basic QA and data visualisation).
          </span>
          <span>
            My learning path continues with advanced CSS and accessibility (some
            courses and lots of blogs reading and conference talks).
          </span>
          <span>
            Now I want to fill in the gaps in my knowledge (self-taught learning
            lacks consistency) but I also have an eagerness to learn more about
            subjects I&apos;ve never went deep enough, e.g. data security, TDD,
            advanced use of databases, eco-design... I also want to improve my
            softskills and I want to learn more about Agile, Scrum, how to
            organise the teamwork withing dev team, how to write comprehensive
            code and everything else mentioned in the podcasts, blogs, tweets
            and books I&apos;ve read and heard.
          </span>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
