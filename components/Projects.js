import AbletonProject from './Ableton-project'
import ChezMmanProject from './ChezMman-project'
import NintendoProject from './Nintendo-project'

const Projects = () => {
  return (
    <article className='projects flow-spacer'>
      <h2 className='text-highlighted text-highlighted--dark'>
        My projects/work
      </h2>
      <div className='cards-wrapper grid gap-xl'>
        <AbletonProject />
        <ChezMmanProject />
        <NintendoProject />
      </div>
    </article>
  )
}

export default Projects
