import AbletonProject from './Ableton-project'
import ChezMmanProject from './ChezMman-project'

const Projects = () => {
  return (
    <article className='projects flow-spacer'>
      <h2>My projects/work</h2>
      <div className='cards-wrapper grid gap-xl'>
        <AbletonProject />
        <ChezMmanProject />
      </div>
    </article>
  )
}

export default Projects
