import Image from 'next/image'

import rentawilderImg from '../../public/rentawilder.jpg'

export const Rentawilder = () => {
  return (
    <div className='ableton card grid gap'>
      <div className='photo-and-button-wrapper'>
        <div className='card__photo-wrapper'>
          <div className='line-work-in-progress'>
            <div className='line-wrapper'>
              <div className='moving-text first' aria-hidden='true'>
                work in progress
              </div>
              <div className='moving-text second' aria-hidden='true'>
                work in progress
              </div>
              <div className='moving-text third' aria-hidden='true'>
                work in progress
              </div>
            </div>
          </div>
          <Image
            src={rentawilderImg}
            className='card__photo'
            placeholder='blur'
            layout='responsive'
            alt='Rentawilder home page preview'
          />
        </div>
      </div>
      <div className='card__description flow-spacer spacer-xs'>
        <h3 className='card__title'>Equipment rental website</h3>
        <p>
          In a small team, we are designing and developing a web application as
          our study project. The project already includes reservation
          management, uses GraphQL and TypeORM for the back-end, React for the
          front-end, and also unit and end-to-end tests. We implemented CI/CD
          with Docker, GitHub Actions, and webhooks for seamless deployment.
          Additionally, we are building a complementary application using React
          Native.
        </p>
        <a
          className='link--block'
          href='https://dev.hamilton1.wns.wilders.dev/'
          target='_blank'
          rel='noreferrer'
        >
          Link to the latest version
          <span className='visually-hidden'>
            {' '}
            of our equipment rental project
          </span>
        </a>
      </div>
    </div>
  )
}
