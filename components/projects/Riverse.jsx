import Image from 'next/image'

import imageRiverse from '../../public/riverse-1.png'

export const Riverse = () => {
  return (
    <div className='ableton card grid gap'>
      <div className='photo-and-button-wrapper'>
        <div className='card__photo-wrapper'>
          <Image
            src={imageRiverse}
            className='card__photo bg-riverse'
            placeholder='blur'
            layout='responsive'
            priority
            alt='Riverse carbon credits platform interface'
          />
        </div>
      </div>

      <div className='card__description flow-spacer spacer-xs'>
        <h3 className='card__title'>Carbon credit trading platform</h3>
        <p>
          I handled 90% of the front-end codebase, utilizing Next.js, Tailwind
          CSS, TypeScript, Auth0, and unit tests. Additionally, I conducted
          screen reader and usability tests to ensure accessibility and
          usability.
        </p>
        <a
          className='link--block'
          href='https://registry.riverse.io'
          target='_blank'
          rel='noreferrer'
        >
          Link to the <span className='visually-hidden'>Riverse </span> platform
        </a>
      </div>
    </div>
  )
}
