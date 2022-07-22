import AboutMe from './frontpage/AboutMe'
import Bio from './frontpage/Bio'
import RandomFacts from './frontpage/RandomFacts'

// Frontpage
//   h1
//   div.heroWrapper
//     <AboutMe />
//     div.bioWrapper
//       <Bio />
//       <RandomFacts /> (fieldset)
//         legend(h3)
//         <RandomFactsContainer /> (with clickOutsideCheck)
//           p.description
//           <RadioButtons />
//             7*Radio
//           <Labels />
//             <FactText />
//             sun/portrait
//             7*labels

const Frontpage = () => {
  return (
    <>
      <article className='frontpage flow-spacer'>
        <div className='header-portrait-wrapper content--max-width'>
          <h2 className='text-highlight'>Hero *_*</h2>
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

{
  /* <div className='about-me--secondary medium noise-border'>
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
</div> */
}
