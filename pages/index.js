import Head from 'next/head'
import Frontpage from '../components/Frontpage'
import Projects from '../components/Projects'

export default function Home () {
  return (
    <>
      <Head>
        <title>My portfolio</title>
        <meta name='description' content="Anton's web-dev portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <svg width={0} height={0} aria-hidden='true' className='visually-hidden'>
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
        </defs>
      </svg>

      <main>
        <h1 className='visually-hidden'>My portfolio</h1>
        <div className='flow-spacer spacer-xl'>
          <Frontpage />
          <Projects />
        </div>
      </main>
    </>
  )
}
