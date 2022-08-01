import AboutMe from './frontpage/AboutMe'
import Bio from './frontpage/Bio'
import RandomFacts from './frontpage/RandomFacts'

const Frontpage = () => {
  return (
    <>
      <article className='frontpage flow-spacer'>
        <div className='header-portrait-wrapper content--max-width'>
          <h2 className='text-highlight'>
            Hero <span aria-hidden='true'>*_*</span>
          </h2>
        </div>
        <div className='hero-wrapper flow-spacer'>
          <AboutMe />
          <Bio />
          <RandomFacts />
        </div>
      </article>
    </>
  )
}

export default Frontpage
