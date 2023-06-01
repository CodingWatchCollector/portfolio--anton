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
            I&apos;m Anton, a passionate self-taught web developer with a focus
            on accessibility and inclusivity. For the past three years,
            I&apos;ve been immersed in the world of web development, constantly
            learning and growing.
          </span>
          <span>
            Working primarily with TypeScript, React, and CSS, I&apos;ve honed
            my skills in front-end development. I kickstarted my career by
            building an online menu for a restaurant using React and CMS.
          </span>
          <span>
            Currently, I&apos;m completing an internship at Riverse, a
            green-tech start-up where I have been responsible for almost the
            entire front-end development of their carbon credit sales platform.
            I&apos;ve used TypeScript, Next.js, and TailwindCSS, conducted
            usability and accessibility tests, and made contributions to the
            back-end.
          </span>
          <span>
            To expand my skills, I&apos;m pursuing the Professional Data
            Engineer Certification program by Google to gain expertise in
            back-end development and data engineering.
          </span>
          <span>
            I am committed to making a positive impact on the world and the web.
            Inclusivity and environmental sustainability are of great importance
            to me. I am enthusiastic about collaborating on projects that
            prioritize accessibility and contribute to a brighter and more
            sustainable future.
          </span>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
