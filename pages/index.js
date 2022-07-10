import Head from 'next/head'
import Frontpage from '../components/Frontpage'
import Projects from '../components/Projects'
import NewspaperLogo from '../public/svg/newspaper-logo'

export default function Home () {
  return (
    <div className='frame'>
      <Head>
        <title>My portfolio</title>
        <meta name='description' content="Anton's web-dev portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <svg width={0} height={0}>
        <defs>
          <filter id='noise-filter--1'>
            <feTurbulence
              result='NOISE'
              type='fractalNoise'
              baseFrequency={0.0015}
              seed={600}
              numOctaves={6}
            ></feTurbulence>
            <feDisplacementMap
              id='displacer'
              in2='NOISE'
              in='SourceGraphic'
              scale='15'
            ></feDisplacementMap>
          </filter>
          <filter id='noise-filter--2'>
            <feTurbulence
              result='NOISE'
              type='fractalNoise'
              baseFrequency={0.0015}
              seed={400}
              numOctaves={6}
            ></feTurbulence>
            <feDisplacementMap
              id='displacer'
              in2='NOISE'
              in='SourceGraphic'
              scale='18'
            ></feDisplacementMap>
          </filter>
          <filter id='noise-filter--3'>
            <feTurbulence
              result='NOISE'
              type='fractalNoise'
              baseFrequency={0.0015}
              seed={500}
              numOctaves={6}
            ></feTurbulence>
            <feDisplacementMap
              id='displacer'
              in2='NOISE'
              in='SourceGraphic'
              scale='12'
            ></feDisplacementMap>
          </filter>
        </defs>
      </svg>

      <main className='paperframe'>
        <div className='container flow-spacer'>
          {/* <div className='newspaper-logo-wrapper'>
            <NewspaperLogo />
          </div>
          <h1>
            is this a future of accessible <span>web development?!</span>
          </h1> */}
          <Frontpage />
          <Projects />
        </div>
      </main>
    </div>
  )
}
