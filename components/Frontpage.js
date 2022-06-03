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
            <p className='bio__name'>realName: Anton Begunenko</p>
            <p className='bio__age'>revolutionsAroundTheSun (aka years): 29</p>
          </div>
          <div className='about-me--primary'>
            About me. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Ipsum nostrum minima facere nobis sit? Deserunt voluptates soluta
            facilis asperiores iste.
          </div>
        </div>
        <div className='about-me--secondary'>
          side or just floating info? Lorem ipsum dolor sit amet.
        </div>
        <div className='about-me--secondary'>
          floating info. Lorem ipsum dolor sit amet.
        </div>
        <div className='about-me--secondary'>
          floating info. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Officia, eos.
        </div>
        <div className='about-me--secondary'>
          floating info. Lorem ipsum dolor sit amet.
        </div>
      </div>
    </article>
  )
}

export default Frontpage
